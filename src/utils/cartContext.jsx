// src/context/CartContext.js
import  { createContext, useContext, useState, useEffect } from 'react';
import useCartStore from './store/cartStore';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { cart } = useCartStore();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // Simulate loading time for demonstration purposes
      setTimeout(() => {
        setLoading(false);
      }, 500);
    } catch (err) {
      setError('Failed to load cart');
      setLoading(false);
    }
  }, [cart]);

  return (
    <CartContext.Provider value={{ loading, error }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
