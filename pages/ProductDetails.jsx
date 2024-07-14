import { LuHeart, LuMinus, LuPlus } from "react-icons/lu";
import Banner from "../src/components/common/Banner";
import Products from "../src/components/common/Products";
import { useProductDetails } from "../src/utils/getProducts";
import { MdOutlineStarOutline, MdOutlineStarPurple500 } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity } from "../src/redux/cartSlice";
import { useState } from "react";
import { toast } from "react-toastify";
import ProductGallery from "../src/components/ProductGallery";
import ProductTab from "../src/components/ProductInfoTab";

function ProductDetails() {
  const { id } = useParams();
  const { data: productDet, error, isLoading } = useProductDetails(id);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.data);
  const existingProduct = cart.find((product) => product.id === productDet?.id);
  const [quantity, setQuantity] = useState(
    existingProduct ? existingProduct?.quantity : 1
  );

  if (isLoading)
    return (
      <p className="flex items-center py-10 justify-center m-auto">
        Loading product details...
      </p>
    );
  if (error) return <p>Error: {error.message}</p>;

  const handleAddToCart = () => {
    if (existingProduct) {
      dispatch(updateQuantity({ id: productDet.id, quantity }));
      toast.success("Cart updated successfully!");
    } else {
      dispatch(
        addToCart({
          id: productDet.id,
          name: productDet.name,
          price: productDet.current_price,
          image: `https://api.timbu.cloud/images/${productDet?.photos[0]?.url}`,
          quantity,
          totalPrice: productDet.current_price * quantity,
        })
      );
    }
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  return (
    <main>
      <section className="lg:flex justify-between gap-x-16 mt-8">
        <article className="w-full lg:max-w-[53%] px-3 lg:px-0">
          {/* PRODUCT IMAGES */}
          <ProductGallery productDet={productDet} />
          {/** PRODUCT DESCRIPTION, REVIEWS */}
          <ProductTab productDet={productDet} />
        </article>

        {/** PRODUCT INFORMATION */}
        <article className=" w-full lg:max-w-[45%] px-5  lg:px-0">
          <div className="">
            <h3 className="text-2xl mb-3 font-semibold">{productDet?.name}</h3>
            <p className="text-red-600 font-medium space-x-3">
              ${productDet?.current_price}{" "}
              <strike className="text-lightGray">$7.50</strike>{" "}
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
              <button onClick={incrementQuantity}>
                <LuPlus />
              </button>
              <p>{quantity || 1}</p>
              <button onClick={decrementQuantity}>
                <LuMinus />
              </button>
            </div>

            <button
              className="bg-black text-white w-2/3 py-3 flex-center px-4"
              //to="/cart"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
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
        <Products heading="Similar Products" slice={[4, 8]} />
      </section>

      <section className="flex flex-col sm:flex-row items-center justify-center gap-6 my-8">
        <div className="lg:max-w-[50%]  sm:h-[400px]">
          <img
            src="/assets/whitebanner.png"
            alt="banner"
            className="h-full  object-cover"
          />
        </div>

        <div className="lg:max-w-[50%] sm:mt-0 flex flex-col gap-y-5 px-3  md:text-lg text-textClr">
          <span>ABOUT THE COLLECTION</span>
          <h3 className="!font-noto font-semibold text-3xl">Bhiriani</h3>
          <p className="pb-6 tracking-wider text-sm leading-[2]">
            Lorem ipsum dolor sit amet consectetur. Sed commodo pellentesque
            arcu tristique et morbi. Lorem ipsum dolor sit amet consectetur. Sed
            commodo pellentesque arcu tristique et morbi.
          </p>
          <Link
            to="/"
            className=" text-center  w-[150px] bg-purpleClr py-2 px-4 text-white uppercase font-medium "
          >
            shop now
          </Link>
        </div>
      </section>
    </main>
  );
}
export default ProductDetails;
