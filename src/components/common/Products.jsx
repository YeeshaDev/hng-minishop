import React from "react";
import { LuHeart } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useProducts } from "../../utils/getProducts";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Products({ slice = [0, 8], heading }) {
  const { data: productdata, error, isLoading } = useProducts();
  //console.log("products", productdata);

  if (isLoading) return <p className="flex-center m-auto py-12">Loading Products...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const slicedProducts = productdata?.items?.slice(slice[0], slice[1]);

  return (
    <section className="my-10 px-3">
      <div className="flex-center !justify-between">
        <div className="block">
          <h2 className="text-[22px] sm:text-3xl font-semibold">
            {heading || "Featured Products"}
          </h2>
          <p className="text-sm">Each Crafted To Perfection</p>
        </div>
        <Link to="/products" className="text-secondary font-semibold">
          See all
        </Link>
      </div>

      {/* PRODUCT LISTINGS */}
      <article className="my-6 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 place-items-center text-sm">
        {isLoading
          ? Array.from({ length: slice || 8 }).map((_, index) => (
              <div key={index} className="w-full h-full">
                <Skeleton height={250} />
                <Skeleton height={20} style={{ marginTop: "10px" }} />
                <Skeleton height={20} width={100} />
              </div>
            ))
          : slicedProducts?.length > 0 &&
            slicedProducts.map((item, index) => (
              <div
                key={index}
                className="relative  className border py-3 px-2 rounded-lg shadow-sm transition-transform transform "
              >
                <span className="absolute top-3 right-3 text-lg text-[#303237]">
                  <LuHeart />
                </span>

                <Link
                  to={`/product_details/${item.id}`}
                  className="h-64 relative overflow-hidden group"
                >
                
                </Link>
                <Link to={`/product_details/${item.id}`}>
                  <div className="mt-3">
                    <p className="text-lightGray">-20% BLACK FRIDAY</p>
                    <p className="text-textClr uppercase line-clamp-1 font-semibold uppercase">
                      {item?.name ||
                        "Sterling Silver Diamond adjustable Engagement Wedding Ring"}
                    </p>
                    <p className="text-red-700 flex gap-x-2 font-semibold text-[18px]">
                      ${item?.current_price[0]?.NGN[0]}{" "}
                      <strike className="text-lightGray font-medium text-[15px]">
                        $7.50
                      </strike>
                    </p>
                  </div>
                </Link>
              </div>
            ))}
      </article>
    </section>
  );
}

export default Products;
