import React from "react";
import { LuHeart } from "react-icons/lu";
import { Link } from "react-router-dom";

function Products() {
  return (
    <section className="my-10 px-3">
      <div className="flex-center !justify-between">
        <div className="block ">
          <h2 className="text-[22px] sm:text-3xl font-semibold">
            Featured Products
          </h2>
          <p className="text-sm">Each Crafted To Perfection</p>
        </div>
        <button className="text-secondary font-semibold">See all</button>
      </div>

      {/** PRODUCT LISTINGS */}

      <article className="my-6 grid grid-cols-2  lg:grid-cols-4 gap-3 sm:gap-5 place-items-center text-sm ">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
          <div key={index} className=" relative">
            <span className="absolute top-3 right-3 text-lg text-[#303237]">
              <LuHeart />
            </span>
            <Link to="/product_details">
              <img
                src={`${
                  index > 4
                    ? "https://res.cloudinary.com/debgkcg8v/image/upload/v1720438130/hng/wfld6dwqto7qtcwmtvke.png"
                    : "/assets/category2.png"
                }`}
              />
            </Link>
            <Link to="/product_details">
              <div className="mt-3">
                <p className="text-lightGray">-20% BLACK FRIDAY</p>
                <p className="text-textClr font-semibold uppercase">
                  Sterling Silver Diamond adjustable Engagement Wedding Ring
                </p>
                <p className="text-red-600 font-medium">
                  4.75$ <strike className="text-lightGray">$7.50</strike>{" "}
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
