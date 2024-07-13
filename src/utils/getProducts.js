// src/api/products.js
import axios from "axios";
import { useQuery } from "react-query";

const fetchProducts = async (page = 1, size = 10) => {
  const { data } = await axios.get(
    `https://timbu-get-all-products.reavdev.workers.dev/?organization_id=${
      import.meta.env.VITE_ORG_ID
    }&reverse_sort=false&page=${page}&size=${size}&Appid=${
      import.meta.env.VITE_APP_ID
    }&Apikey=${import.meta.env.VITE_API_KEY}`
  );
  return data;
};

const fetchProductDetails = async (productId) => {
  const { data } = await axios.get(
    `https://timbu-get-single-product.reavdev.workers.dev/${productId}?organization_id=${
      import.meta.env.VITE_ORG_ID
    }&Appid=${import.meta.env.VITE_APP_ID}&Apikey=${
      import.meta.env.VITE_API_KEY
    }`
  );
  return data;
};

export const useProducts = (page, size) => {
  return useQuery(["products", page], () => fetchProducts(page, size), {
    staleTime: 5 * 60 * 1000,
  });
};

export const useProductDetails = (productId) => {
  return useQuery(
    ["product", productId],
    () => fetchProductDetails(productId),
    {
      enabled: !!productId, // Only run if productId is available
      staleTime: 5 * 60 * 1000, // 5 minutes
    }
  );
};
