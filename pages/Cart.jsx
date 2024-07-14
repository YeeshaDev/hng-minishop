import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import { LuMinus, LuPlus } from "react-icons/lu";
import { Link } from "react-router-dom";
import { removeItem, updateQuantity, clearCart } from "../src/redux/cartSlice";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.data);
  const { totalAmount, totalItems } = useSelector((state) => state.cart);

  const handleRemove = (id) => {
    dispatch(removeItem({ id }));
    //toast.success("Item removed from cart successfully!");
  };

  const handleIncrement = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: quantity + 1 }));
    toast.info("Quantity updated successfully!");
  };

  const handleDecrement = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: Math.max(quantity - 1, 1) }));
    toast.info("Quantity updated successfully!");
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="relative">
      <h2 className="text-2xl sm:text-3xl text-center my-7 font-semibold">
        Shopping Cart
      </h2>

      <div>
        {cart?.length === 0 ? (
          <div className="flex flex-col  gap-y-5 items-center justify-center m-auto ">
            <img
              width={200}
              height={200}
              alt="empty cart"
              src="/assets/emptycart.svg"
            />
            <p> Cart is Empty</p>
            <Link
              to="/"
              className="w-[150px] bg-textClr text-white h-12 flex items-center justify-center rounded-md"
            >
              Shop
            </Link>
          </div>
        ) : (
          <>
            <section className="hidden md:flex gap-y-8 md:gap-x-20 md:justify-between ">
              {/** DESKTOP CART */}
              <article className="w-full md:w-1/2">
                {cart?.length > 0 &&
                  cart.map((product, index) => (
                    <div
                      key={index}
                      className="flex justify-between border-b items-start gap-5 p-5"
                    >
                      <div className="flex-center gap-x-5">
                        <Link to={`/product_details/${product?.id}`}>
                          <img
                            width={120}
                            height={120}
                            src={product?.image}
                            alt={product?.name}
                          />
                        </Link>
                        <div className="">
                          <p className="text-textClr capitalize  font-semibold mb-3">
                            {product?.name}
                          </p>
                          <p className="text-lightGray">
                            Metal: {product?.metal || "Silver Sterling"}{" "}
                            {/* Example: Silver Sterling */}
                          </p>
                          <p className="text-red-600 font-medium text-[1rem]">
                            ${product?.totalPrice.toFixed(2)}
                          </p>
                          <button
                            className="border-b-2 mt-2 border-textClr"
                            onClick={() => handleRemove(product?.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="border border-[#EEEEEE] px-4 py-3 flex-center gap-x-3 font-medium">
                        <button
                          onClick={() =>
                            handleIncrement(product?.id, product?.quantity)
                          }
                        >
                          <LuPlus />
                        </button>
                        <p>{product.quantity}</p>
                        <button
                          onClick={() =>
                            handleDecrement(product?.id, product?.quantity)
                          }
                        >
                          <LuMinus />
                        </button>
                      </div>
                      <hr />
                    </div>
                  ))}
                <button
                  className="float-right mt-5 text-red-600 underline font-semibold "
                  onClick={handleClearCart}
                >
                  Clear Cart
                </button>
              </article>
              {/* Checkout */}
              <article className="relative w-full md:w-1/2 max-h-[400px] mt-3 border border-lightGray/20 mx-auto !item-start pt-5 pb-10 px-5 sm:px-10 shadow-md rounded-md ">
                <div className=" text-Clr">
                  <h2 className="text-xl text-center my-7 font-bold">
                    Order Summary
                  </h2>
                  <div className="flex flex-col gap-6 mt-5">
                    <p className="flex justify-between gap-x-10">
                      Order Value{" "}
                      <span className="">${totalAmount.toFixed(2)}</span>
                    </p>

                    <p className="flex justify-between gap-x-10">
                      VAT <span>${(totalAmount * 0.15).toFixed(2)}</span>
                    </p>

                    <p className="flex justify-between gap-x-10">
                      Total before Discount{" "}
                      <span>
                        ${(totalAmount + totalAmount * 0.15).toFixed(2)}
                      </span>
                    </p>

                    <p className="flex justify-between gap-x-10 ">
                      TOTAL{" "}
                      <span className="text-textClr text-lg font-bold">
                        ${(totalAmount + totalAmount * 0.15).toFixed(2)}
                      </span>
                    </p>

                    <Link
                      to="/checkout"
                      className="bg-black text-white flex-center uppercase h-14 w-full mt-7"
                    >
                      proceed to checkout
                    </Link>
                  </div>
                </div>
              </article>
            </section>

            <section className="md:hidden block">
              {/** MOBILE CART */}
              <div className="font-semibold mx-3 mb-5  bg-textClr/10 flex justify-between py-2 px-3">
                <p>SUBTOTAL ({totalItems} Items)</p>
                <p>${totalAmount}.00</p>
              </div>

              <hr className="p-2 mx-2" />
              <article className="w-full md:w-1/2 mt-5">
                {cart?.length > 0 &&
                  cart.map((product, index) => (
                    <div
                      key={index}
                      className="flex justify-between border-b text-sm !items-start gap-3 p-3"
                    >
                      <div className="flex-center gap-x-5">
                        <Link to={`/product_details/${product?.id}`}>
                          <img
                            width={120}
                            height={120}
                            src={product?.image}
                            alt={product?.name}
                          />
                        </Link>
                        <div>
                          <div className=" ml-7">
                            <p className="text-textClr capitalize font-semibold mb-1">
                              {product?.name || " Chain Bracelet"}
                            </p>
                            <p className="text-lightGray text-[12px]">
                              Metal: Silver Sterling{" "}
                            </p>
                            <p className="text-red-600 font-medium ">
                              ${product?.totalPrice.toFixed(2)}
                            </p>
                            <button
                              onClick={() => handleRemove(product?.id)}
                              className="border-b-2 mt-1 border-textClr"
                            >
                              Remove
                            </button>
                          </div>
                          <div>
                            <button
                              onClick={() =>
                                handleIncrement(product?.id, product?.quantity)
                              }
                              className="border-b-2  !-ml-4 px-1.5 flex text-sm items-center gap-x-2 text-textClr/60 bg-textClr/20"
                            >
                              {product.quantity} <FaAngleDown />
                            </button>
                          </div>
                        </div>
                      </div>

                      <hr />
                    </div>
                  ))}

                <button
                  className="float-right text-red-600 underline font-semibold py-4 px-2"
                  onClick={handleClearCart}
                >
                  Clear Cart
                </button>
                <Link
                  to="/checkout"
                  className="bg-black text-sm text-white flex-center uppercase h-14 w-[90%] mx-auto mt-7"
                >
                  {" "}
                  proceed to checkout
                </Link>
                <Link
                  to="/"
                  className="border-b-2 w-[160px] mt-3 text-sm border-lightGray uppercase flex-center mx-auto "
                >
                  Continue shopping
                </Link>
              </article>
            </section>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
