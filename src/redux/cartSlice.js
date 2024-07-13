import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const storeInLocalStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
    totalAmount: 0,
    totalItems: 0,
  },

  reducers: {
    addToCart(state, action) {
      const existingProduct = state.data.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct) {
        const tempCart = state.data.map((product) => {
          if (product.id === action.payload.id) {
            let newQty = product.quantity + action.payload.quantity;
            let newTotalPrice = newQty * product.price;

            return {
              ...product,
              quantity: newQty,
              totalPrice: newTotalPrice,
            };
          } else {
            return product;
          }
        });
        state.data = tempCart;
        storeInLocalStorage(state.data);
        toast.success("Item quantity updated successfully!");
      } else {
        state.data.push(action.payload);
        storeInLocalStorage(state.data);
        toast.success("Item added to cart successfully!");
      }

      cartSlice.caseReducers.getCartTotal(state);
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;

      const productIndex = state.data.findIndex((product) => product.id === id);
      if (productIndex !== -1) {
        const updateProduct = {
          ...state.data[productIndex],
          quantity: Math.max(quantity || 1, 1),
        };
        updateProduct.totalPrice = updateProduct.price * updateProduct.quantity;

        state.data[productIndex] = updateProduct;
        storeInLocalStorage(state.data);
      }

      cartSlice.caseReducers.getCartTotal(state);
    },

    removeItem(state, action) {
      const tempCart = state.data.filter(
        (product) => product.id !== action.payload.id
      );
      state.data = tempCart;
      storeInLocalStorage(state.data);
      toast.success("Item removed from cart successfully!");

      cartSlice.caseReducers.getCartTotal(state);
    },
    clearCart(state) {
      state.data = [];
      storeInLocalStorage(state.data);
      toast.success("Cart cleared successfully!");
    },

    getCartTotal(state) {
      state.totalAmount = state.data.reduce((cartTotal, cartItem) => {
        return (cartTotal += cartItem.totalPrice);
      }, 0);

      state.totalItems = state.data.length;
    },
    
  },
});

export const { addToCart, updateQuantity, removeItem, getCartTotal,clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
