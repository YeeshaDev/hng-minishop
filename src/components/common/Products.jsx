import React from "react";

function Products() {
  return (
    <section className="my-10">
      <div className="block ">
        <h2 className="text-3xl font-semibold">Featured Products</h2>
        <p>Each Crafted To Perfection</p>
      </div>
      <article className="my-6 grid grid-cols-2  lg:grid-cols-4 gap-5 place-items-center text-sm ">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
          <div key={index} className="">
            <img
              src={`${
                index > 4 ? "/assets/category2.png" : "/assets/category2.png"
              }`}
            />
            <div className="mt-3">
              <p className="text-lightGray">-20% BLACK FRIDAY</p>
              <p className="text-textClr font-semibold uppercase">
                Sterling Silver Diamond adjustable Engagement Wedding Ring
              </p>
              <p className="text-red-600 font-medium">
                4.75$ <strike className="text-lightGray">$7.50</strike>{" "}
              </p>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}

export default Products;
