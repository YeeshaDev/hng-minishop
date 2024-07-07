import React from "react";

function Categories() {
  return (
    <section>
      <div className="text-textClr flex justify-between mt-10">
        <div className="block">
          <h2 className="text-3xl font-semibold">Shop by category</h2>
          <p>Each Crafted To Perfection</p>
        </div>
        <button>SEE ALL</button>
      </div>

      {/* CATEGORIES LIST */}

      <article className="my-6 grid grid-cols-2  lg:grid-cols-4 gap-5 place-items-center text-center ">
        <div>
          <img src="/assets/category2.png" />
          <button className="border-b-2 mt-2 border-textClr uppercase font-medium ">
            Bracelet
          </button>
        </div>

        <div>
          <img src="/assets/category1.png" />
          <button className="border-b-2 mt-2 text-center border-textClr uppercase font-medium ">
            Rings
          </button>
        </div>

        <div>
          <img src="/assets/category3.png" />
          <button className="border-b-2 mt-2 text-center border-textClr uppercase font-medium ">
            Necklace
          </button>
        </div>

        <div>
          <img src="/assets/category4.png" />
          <button className="border-b-2 mt-2 text-center border-textClr uppercase font-medium ">
            Engangement
          </button>
        </div>
      </article>
    </section>
  );
}

export default Categories;
