// src/pages/SeeAllProducts.js
import React, { useState } from "react";
import { useProducts } from "../src/utils/getProducts";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import {motion} from 'framer-motion'
function SeeAllProducts() {
  const query = new URLSearchParams(useLocation().search);
  const pageQuery = query.get("page") ? parseInt(query.get("page")) : 1;
  const navigate = useNavigate();
  const [page, setPage] = useState(pageQuery);
  const { data, error, isLoading } = useProducts(page, 10);

  const handlePageChange = (newPage) => {
    setPage(newPage);
    navigate(`/products?page=${newPage}`);
  };

  if (isLoading) return <p className='flex items-center py-10 justify-center m-auto'>Loading Produts...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <main className="p-5">
      <nav className="text-sm mb-4">
        <Link to="/" className="text-textClr font-bold hover:underline">
          Home
        </Link>{" "}
        / <span>All Products</span>
      </nav>
      <h2 className="text-2xl sm:text-3xl text-center my-7 font-semibold">
        All Products
      </h2>
      < motion.section
      
       className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {data?.items?.length > 0 &&
          data?.items.map((product) => (
            <article
              key={product.id}
              className="border py-3 px-2 rounded-lg shadow-sm transition-transform transform "
            >
              <Link to={`/product_details/${product.id}`}>
                <img
                  src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
                  alt={product.name}
                  className="w-[300px] h-64 object-cover transition-transform transform hover:scale-[1.03]"
                />
                <h3 className="text-lg font-medium mt-3 px-3 capitalize">
                  {product?.name}
                </h3>
                <p className="text-red-600 font-medium px-3">
                  ${product?.current_price?.["NGN"]?.[0] || 50}
                </p>
              </Link>
            </article>
          ))}
      </motion.section>
      <div className="flex justify-between items-center mt-10">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 disabled:opacity-50"
        >
          <FaAngleLeft /> Previous
        </button>
        <span>Page {page}</span>
        <button
          onClick={() => handlePageChange(page + 1)}
          className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          Next <FaAngleRight />
        </button>
      </div>
    </main>
  );
}

export default SeeAllProducts;
