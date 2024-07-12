import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api', // This will use the proxy defined in the Vite configuration
  headers: {
    'Content-Type': 'application/json',
  },
});

// src/api/products.js
import { useQuery } from 'react-query';

const fetchProducts = async () => {
  const { data } = await axiosInstance.get('/products?organization_id=14190a5309024744a55c21e9e8b2ca7f&reverse_sort=false&page=1&size=10&Appid=N4HG6J7NO3W3NMR&Apikey=5e6e3e3efa3641fb96eee48621639a9920240712165433834602');
  return data;
};

const fetchProductDetails = async (productId) => {
  const { data } = await axiosInstance.get(`/products/${productId}`);
  return data;
};

export const useProducts = () => {
  return useQuery('products', fetchProducts);
};

export const useProductDetails = (productId) => {
  return useQuery(['product', productId], () => fetchProductDetails(productId));
};
