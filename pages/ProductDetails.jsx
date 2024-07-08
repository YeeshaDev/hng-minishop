import { LuHeart, LuMinus, LuPlus, LuStar, LuStarOff } from "react-icons/lu";
import Banner from "../src/components/common/Banner";
import { MdOutlineStarOutline, MdOutlineStarPurple500 } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function ProductDetails() {
  return (
    <main>
      <section className="md:flex justify-between gap-x-16 mt-8">
        {/* PRODUCT IMAGES */}
        <article className="w-full md:max-w-[53%] px-3 lg:px-0">
          <div className="flex flex-col lg:flex-row-reverse gap-4 ">
            {/* PRODUCT IMAGES - LARGE IMAGE */}
            <div className="max-w-[600px] w-full">
              <img
                src="/assets/category2.png"
                className="w-full object-cover"
              />
            </div>
            {/* PRODUCT IMAGES - THUMBNAILS */}
            <div className="flex sm:flex-col overflow-x-auto sm:mt-3 gap-3 gap-y-8">
              <img
                width={120}
                height={110}
                src="/assets/category2.png"
                className="border-2 border-textClr"
              />
              <img
                width={120}
                height={110}
                src="/assets/category2.png"
                className="hover:border-2 hover:border-textClr"
              />
              <img
                width={120}
                height={110}
                src="/assets/category2.png"
                className="hover:border-2 hover:border-textClr"
              />
              <img
                width={120}
                height={110}
                src="/assets/category2.png"
                className="hover:border-2 hover:border-textClr"
              />
            </div>
          </div>
          {/** PODUCT DESCRIPTION, REVIEWS */}
          <div className="my-5 px-3 md:px-0">
            <div className="flex items-start text-sm sm:text-[1rem] overflow-x-scroll w-full gap-x-5 sm:gap-x-2 justify-between py-5 text-lightGray ">
              <p className="relative after:absolute after:w-full   after:h-1  after:bg-textClr/70  after:-bottom-5 after:left-0 ">
                DESCRIPTION
              </p>
              <p className="whitespace-nowrap">ADDITIONAL INFORMATON</p>
              <p className="whitespace-nowrap">REVIEWS (0)</p>
            </div>

            <p className="py-6 text-lightGray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              placerat, augue a volutpat hendrerit, sapien tortor faucibus
              augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu
              facilisis consequat sed eu felis. Nunc sed porta augue. Morbi
              porta tempor odio, in molestie diam bibendum sed.
            </p>
          </div>
        </article>

        {/** PRODUCT INFORMATION */}
        <article className=" w-full lg:max-w-[45%] px-5  md:px-0">
          <div className="">
            <h3 className="text-2xl mb-3 font-semibold">Chain Bracelet</h3>
            <p className="text-red-600 font-medium space-x-3">
              4.75$ <strike className="text-lightGray">$7.50</strike>{" "}
              <span className="bg-red-600 text-sm font-medium text-white rounded-xl px-2 py-1">
                Save Now
              </span>
              <div className="flex  gap-2 mt-5 mb-7">
                <span className="text-textClr px-0 -ml-4 flex gap-x-1 text-xl">
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarOutline />
                </span>
                <p className="text-lightGray text-sm font-light">4.0</p>
                <p className="text-lightGray text-sm font-light">(56)</p>
                <p className=" ml-2 sm:ml-4 text-lightGray text-sm font-light">
                  WRITE A REVIEW
                </p>
              </div>
            </p>
          </div>
          <hr className="mt-4" />

          <div>
            <h3 className="text-2xl  font-semibold mt-8">Select Size</h3>
            <div className=" flex-wrap flex items-center gap-2 text-sm mt-5">
              <span className="border bg-textClr text-white border-textClr py-1 px-2">
                5.9 in
              </span>
              <span className="border bg-text-Clr py-2 px-3 hover:text-white hover:bg-textClr">
                6.0 in
              </span>
              <span className="border bg-text-Clr py-2 px-3 hover:text-white hover:bg-textClr">
                6.2 in
              </span>
              <span className="border bg-text-Clr py-2 px-3 hover:text-white hover:bg-textClr">
                6.4 in
              </span>
              <span className="border bg-text-Clr py-2 px-3 hover:text-white hover:bg-textClr">
                6.5 in
              </span>
              <span className="border bg-text-Clr py-2 px-3 hover:text-white hover:bg-textClr">
                7.2 in
              </span>
              <span className="border bg-text-Clr py-2 px-3 hover:text-white hover:bg-textClr">
                7.5 in
              </span>
              <span className="border bg-text-Clr py-2 px-3 hover:text-white hover:bg-textClr">
                7.9 in
              </span>
            </div>
          </div>

          <div className="py-7">
            <h3 className="text-2xl font-semibold mt-4">
              {" "}
              Metal: Silver Sterling{" "}
            </h3>
            <div className="flex items-center gap-x-4 mt-3">
              <div className=" w-10 h-10 flex-center  rounded-full border-2 border-textClr/50 ">
                <span className=" w-8 h-8 rounded-full bg-yellow "></span>
              </div>
              <div className="w-9 h-9 rounded-full bg-gray"></div>
            </div>
          </div>

          <div className="flex items-center gap-x-5">
            <div className="border border-[#EEEEEE] px-4 py-3 flex-center gap-x-3 font-medium">
              <button>
                <LuPlus />
              </button>
              <p>1</p>
              <button>
                <LuMinus />
              </button>
            </div>

            <Link
              className="bg-black text-white w-2/3 py-3 flex-center px-4"
              to="/cart"
            >
              Add to cart
            </Link>
          </div>
          <div>
            <button className="flex items-center    mt-8 gap-x-3">
              <LuHeart className="text-lg" />
              <span className="border-b-2 border-b-lightGray text-light text-sm text-lightGray">
                Save to wishlist
              </span>
            </button>
            <div className="flex items-center gap-x-3 gap-y-1 mb-2 mt-7  text-textClr">
              <img src="https://res.cloudinary.com/debgkcg8v/image/upload/v1720447016/roadmap-timeline_cbbq6s.svg" />
              <span className="font-semibold pr-1"> Estimated Delivery:</span>{" "}
              Jul 30 - Aug 2024
            </div>
            <div className="flex items-center gap-x-3">
              <IoCartOutline />
              <span className="font-semibold pr-1">
                {" "}
                Free Shipping & Returns:{" "}
              </span>{" "}
              On all orders over $75
            </div>
          </div>
          <div className="bg-[#F8F8F8] mt-8 mb-6 space-y-3 py-3 px-5 mx-auto flex flex-col items-center justify-cnter ">
            <img
              width={200}
              height={200}
              src="https://res.cloudinary.com/debgkcg8v/image/upload/v1720447008/trustbag.png_ofcasd.png"
              alt="Payment gateways"
            />
            <p>Guarantee safe & secure checkout</p>
          </div>
        </article>
      </section>
      <Banner />
      <section className="my-10 px-4">
        <div className="flex-center !justify-between">
          <div className="block ">
            <h2 className="text-[22px] sm:text-3xl font-semibold">
              Similar Products
            </h2>
            <p className="text-sm first-letter:">Each Crafted To Perfection</p>
          </div>
          <button className=" text-secondary font-semibold">See all</button>
        </div>
        <article className="my-6 grid grid-cols-2   lg:grid-cols-4 gap-3 sm:gap-5 place-items-center text-sm ">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className=" relative">
              <span className="absolute top-3 right-3 text-lg text-[#303237]">
                <LuHeart />
              </span>
              <Link to="product_details">
                <img src="/assets/category2.png" alt="similar products" />
              </Link>
              <Link to="product_details">
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

      <section className="flex flex-col sm:flex-row items-center justify-center gap-6 my-10">
        <div className="lg:max-w-[50%]  sm:h-[400px]">
          <img
            src="/assets/whitebanner.png"
            alt="banner"
            className="h-full  object-cover"
          />
        </div>

        <div className="lg:max-w-[50%] mt-3 sm:mt-0 space-y-3 px-3  md:text-lg text-textClr">
          <span>ABOUT THE COLLECTION</span>
          <h3 className="!font-noto font-semibold text-3xl">Bhiriani</h3>
          <p classNmae="pb-6 tracking-wider text-sm leading-[3]">
            Lorem ipsum dolor sit amet consectetur. Sed commodo pellentesque
            arcu tristique et morbi. Lorem ipsum dolor sit amet consectetur. Sed
            commodo pellentesque arcu tristique et morbi.
          </p>
          <button className=" text-center !mt-6 bg-purpleClr py-2 px-4 text-white uppercase font-medium ">
            shop now
          </button>
        </div>
      </section>
    </main>
  );
}
export default ProductDetails;
//https://res.cloudinary.com/debgkcg8v/image/upload/v1720438566/Group_82_2_ehoqa2.png
