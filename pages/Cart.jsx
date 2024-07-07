import React from "react";
import { LuMinus, LuPlus } from "react-icons/lu";

function Cart() {
  return (
    <div>
      <h2 className="text-3xl text-center my-7 font-semibold">Shopping Cart</h2>
      <section className="md:flex md:gap-x-20 justify-between ">
        <article className="w-full md:w-1/2">
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className="flex justify-between border-b !items-start gap-5 p-5"
            >
              <div className="flex-center gap-x-5">
                <img
                  width={120}
                  height={120}
                  src="/assets/category2.png"
                  alt="products"
                />
                <div className="">
                  <p className="text-textClr font-semibold mb-3">
                    Chain Bracelet
                  </p>
                  <p className="text-lightGray">Metal: Silver Sterling </p>
                  <p className="text-red-600 font-medium text-[1rem]">$4.75</p>
                  <button className="border-b-2 mt-2 border-textClr">
                    Remove
                  </button>
                </div>
              </div>
              <div className="border border-[#EEEEEE] px-4 py-3 flex-center gap-x-3 font-medium">
                <button>
                  <LuPlus />
                </button>
                <p>1</p>
                <button>
                  <LuMinus />
                </button>
              </div>
              <hr />
            </div>
          ))}
        </article>
        {/* Checkout */}
        <article className="w-full md:w-1/2 border border-lightGray/20 flex-center !item-start pt-5 pb-10 px-5 sm:px-10 shadow-md rounded-md ">
          <div className="max-w-[450px]">
            <h2 className="text-xl text-center my-7 font-semibold">
              Cart Total
            </h2>
            <p className="flex gap-x-10">
              SUBTOTAL: <span className="text-lightGray">$5.80</span>
            </p>
            <div className="flex gap-x-10 mt-5 ">
              <p>SHIPPING:</p>
              <div className=" ">
                <p className="text-lightGray">
                  Shipping cost s will be calculated once you have provided
                  address.
                </p>
                <p className="mt-10 mb-5">CALCULATE SHIPPING</p>
                <div className="flex flex-col gap-y-4 text-lightGray  text-sm">
                  <p>SELECT A COUNTRY</p>
                  <hr />
                  <p>CITY</p>
                  <hr />
                  <p>POSTCODE / ZIP</p>
                  <hr />
                  <button className="my-5 border border-black h-14 px-5">
                    UPDATE TOTALS
                  </button>
                </div>
              </div>
            </div>
            <hr className="py-5" />
            <p className="font-semibold text-lg">
              {" "}
              TOTAL <span>$10.50</span>
            </p>

            <button className="bg-black text-white uppercase h-14 w-full mt-7">
              {" "}
              proceed to checkout
            </button>
            <button className="border-b-2 mt-3 border-lightGray uppercase flex-center mx-auto ">
              Continue shopping
            </button>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Cart;
