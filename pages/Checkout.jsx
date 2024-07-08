import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
function Checkout() {
  return (
    <div className="px-5">
      <h2 className="text-3xl text-center my-7 font-semibold">Checkout</h2>
      <section className="md:flex md:gap-x-20 justify-between  ">
        <article className="w-full md:w-1/2">
          <div>
            <h3 className="text-2xl font-mmedium my-7">Billing Details</h3>
            <form className=" grid grid-cols-2 gap-5">
              <input type="text" placeholder="First Name*" className="input" />
              <input type="text" placeholder="Last Name*" className="input" />

              <input
                type="text"
                placeholder="Street Adress*"
                className="input col-span-2"
              />
              <input type="text" placeholder="Country*" className="input" />
              <input type="text" placeholder="State*" className="input" />
              <input type="text" placeholder="City*" className="input" />
              <input type="text" placeholder="Zip*" className="input" />

              <input
                type="text"
                placeholder="Phone number*"
                className="input"
              />
              <input type="text" placeholder="Email*" className="input" />
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-mmedium  my-7">Shipping Address</h3>
            <div className="flex gap-2 mb-3 text-sm">
              <input type="Checkbox" className="outline-0" />
              <p>Same as billing</p>
            </div>
            <form className="grid grid-cols-2 gap-5">
              <input type="text" placeholder="First Name*" className="input" />
              <input type="text" placeholder="Last Name*" className="input" />

              <input
                type="text"
                placeholder="Street Adress*"
                className="input col-span-2"
              />
              <input type="text" placeholder="Country*" className="input" />
              <input type="text" placeholder="State*" className="input" />
              <input type="text" placeholder="City*" className="input" />
              <input type="text" placeholder="Zip*" className="input" />

              <input
                type="text"
                placeholder="Phone number*"
                className="input"
              />
              <input type="text" placeholder="Email*" className="input" />
            </form>
          </div>
          <div className="mt-7 flex-center gap-x-3">
            <div className="mt-5 w-full leading-tight shadow-md py-6 px-2 sm:px-5 border border-textClr rounded-lg">
              <p className="flex justify-between">
                Home{" "}
                <img
                  alt="check icon"
                  src="https://res.cloudinary.com/debgkcg8v/image/upload/v1720456942/check-circle_qq0f0z.png"
                  className="object-contain w-5 h-5"
                />{" "}
              </p>
              <p className=" text-[13px] sm:text-sm mt-1">
                Takes 3-5 business days
              </p>
            </div>

            <div className="mt-5 max-h-[100px] w-full bg-[#BDBDBD]/30 leading-tight shadow-md py-6 px-2 sm:px-5 border rounded-lg">
              <p className="">Store pickup </p>
              <p className="text-[12px] sm:text-sm mt-1">
                Pickup from store location
              </p>
            </div>
          </div>
        </article>

        <article className="w-full md:w-1/2   mt-3 border border-lightGray/20 mx-auto !item-start pt-5 pb-10 px-5 sm:px-10 shadow-md rounded-md ">
          <div className=" text-Clr">
            <h2 className="text-xl text-center  font-bold">Order Details</h2>
            <div className="flex flex-col gap-6 mt-5">
              <p className="flex justify-between  gap-x-10">
                SUBTOTAL <span className="">$115.80</span>
              </p>
              <hr />
              <p className="flex justify-between  gap-x-10 ">
                TOTAL{" "}
                <span className="text-textClr text-lg font-bold">$117.60</span>
              </p>
              <hr />
              <div className="flex justify-between">
                <div>
                  <p className="flex items-center  gap-x-2 text-sm">
                    <IoMdRadioButtonOn /> <span>Direct Bank transfer</span>
                  </p>
                  <p className="text-lightGray text-[12px]">
                    Pay with your Visa or Master card
                  </p>
                </div>
                <img
                  width={100}
                  height={100}
                  alt="visa"
                  src="https://res.cloudinary.com/debgkcg8v/image/upload/v1720455143/Group_1321314334_x38eix.png"
                  className="object-contain"
                />
              </div>
              <p className="flex items-center  gap-x-2 text-sm">
                <IoMdRadioButtonOff /> <span>Direct Bank transfer</span>
              </p>
              <p className="flex items-center gap-x-2 text-sm">
                <IoMdRadioButtonOff /> <span>Cash on Delivery</span>
              </p>

              <p className="flex justify-between gap-x-10 ">
                TOTAL{" "}
                <span className="text-textClr text-lg font-bold">$117.60</span>
              </p>
              {/** CARD DETAILS FORM */}
              <div className="text-text-clr font-light">
                <h4>Fill in your details</h4>
                <form className="flex flex-col gap-y-5 mt-5">
                  <input
                    type="text"
                    placeholder="Card holder*"
                    className="input"
                  />
                  <input
                    type="text"
                    placeholder="Card number*"
                    className="input"
                  />
                  <input
                    type="text"
                    placeholder="Expiry date*"
                    className="input"
                  />
                  <input
                    type="text"
                    placeholder="Security (CVV)*"
                    className="input"
                  />
                </form>
                <div className="text-[13px] space-y-2 mt-5">
                  <h4 className="text-[17px] !font-medium ">
                    Review and place order
                  </h4>
                  <p>
                    Please review the order details and payment details before
                    proceeding to confirm your order{" "}
                  </p>
                  <p className="flex items-center gap-x-2">
                    <IoMdRadioButtonOff />{" "}
                    <span>
                      I agree to the{" "}
                      <span className="font-semibold">
                        Terms & conditions, Privacy policy & Return policy
                      </span>
                    </span>
                  </p>
                  <p className="flex items-center gap-x-2">
                    <IoMdRadioButtonOff />{" "}
                    <span>Sign me up to the email list</span>
                  </p>
                </div>
              </div>

              <Link
                to="/checkout"
                className="bg-black text-white flex-center uppercase h-14 w-full mt-7"
                onClick={() => {
                  Swal.fire({
                    title: "Order Placed Successfully!",
                    text: "Items purchased will be delivered to you in the next 3-4 days. In case of any queries please reach out to us on 91xxxxxxxx ",
                    icon: "success",
                    confirmButtonColor: "#000000",
                    confirmButtonText: "Continue Shopping",
                  });
                }}
              >
                {" "}
                place order
              </Link>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
export default Checkout;
