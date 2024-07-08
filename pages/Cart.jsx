import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import { LuMinus, LuPlus } from "react-icons/lu";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl text-center my-7 font-semibold">
        Shopping Cart
      </h2>
      {/** DESKTOP CART */}
      <section className="hidden md:flex gap-y-8 md:gap-x-20 md:justify-between ">
        <article className="w-full md:w-1/2">
          {[1, 2, 3].map((index) => (
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
        <article className="w-full md:w-1/2 max-h-[400px]  mt-3 border border-lightGray/20 mx-auto !item-start pt-5 pb-10 px-5 sm:px-10 shadow-md rounded-md ">
          <div className=" text-Clr">
            <h2 className="text-xl text-center my-7 font-bold">
              Order Summary
            </h2>
            <div className="flex flex-col gap-6 mt-5">
              <p className="flex justify-between gap-x-10">
                Order Value <span className="">$115.80</span>
              </p>

              <p className="flex justify-between gap-x-10">
                VAR <span>$1.80</span>
              </p>

              <p className="flex justify-between gap-x-10">
                Total before Discount <span>$165.80</span>
              </p>

              <p className="flex justify-between gap-x-10 ">
                TOTAL{" "}
                <span className="text-textClr text-lg font-bold">$117.60</span>
              </p>

              <Link
                to="/checkout"
                className="bg-black text-white flex-center uppercase h-14 w-full mt-7"
              >
                {" "}
                proceed to checkout
              </Link>
            </div>
          </div>
        </article>
      </section>
      {/** MOBILE CART */}
      <section>
        <div className="font-semibold mx-3 mb-5  bg-textClr/10 flex justify-between py-2 px-3">
          <p>SUBTOTAL (3 Items)</p>
          <p>$124.00</p>
        </div>
        <hr className="p-2 mx-2" />
        <article className="w-full md:w-1/2 mt-5">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="flex justify-between border-b text-sm !items-start gap-3 p-3"
            >
              <div className="flex-center gap-x-5">
                <Link to="/product_details">
                  <img
                    width={120}
                    height={120}
                    src="/assets/category2.png"
                    alt="products"
                  />
                </Link>
                <div>
                  <div className=" ml-7">
                    <p className="text-textClr font-semibold mb-1">
                      Chain Bracelet
                    </p>
                    <p className="text-lightGray text-[12px]">
                      Metal: Silver Sterling{" "}
                    </p>
                    <p className="text-red-600 font-medium ">$4.75</p>
                    <button className="border-b-2 mt-1 border-textClr">
                      Remove
                    </button>
                  </div>
                  <div>
                    <button className="border-b-2  !-ml-4 px-1.5 flex text-sm items-center gap-x-2 text-textClr/60 bg-textClr/20">
                      1 <FaAngleDown />
                    </button>
                  </div>
                </div>
              </div>

              <hr />
            </div>
          ))}
          <Link
            to="/checkout"
            className="bg-black text-sm text-white flex-center uppercase h-14 w-[90%] mx-auto mt-7"
          >
            {" "}
            proceed to checkout
          </Link>
          <Link
            to="/"
            className="border-b-2 w-[50%] mt-3 text-sm border-lightGray uppercase flex-center mx-auto "
          >
            Continue shopping
          </Link>
        </article>
      </section>
    </div>
  );
}

export default Cart;
