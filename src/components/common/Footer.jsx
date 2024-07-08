//import React from "react";

import { LuFacebook, LuInstagram, LuLinkedin, LuTwitter } from "react-icons/lu";

const footerItems = [
  {
    id: 2,
    header: "Marketplace",
    content1: "Buy Products",
    content2: "Sell Products",
    content3: "Create Products",
  },
  {
    id: 3,
    header: "Resources",
    content1: "About",
    content2: "Events",
    content3: "FAQ",
  },
  {
    id: 4,
    header: "Legal",
    content1: "Terms",
    content2: "Policy",
    content3: "Support",
  },
];
const Footer = () => {
  return (
    <div className="bg-[#EAECF029] mt-10">
      <div>
        <div className="w-10/12 m-auto">
          <div className=" !flex-col sm:!flex-row flex-center  gap-x-10 px-3 py-12">
            <h3 className="text-2xl mb-5 font-medium flex flex-col">
              Get the latest from JERENG <br className="hidden sm:block" />
              <span className="text-lightGray mt-1 font-normal !text-sm">
                Be the first to hear about new arrivals, promotions, style
                inspiration and exclusive sneak peeks.
              </span>
            </h3>
            <form
              action=""
              className="border border-black  h-14  pl-5  flex items-center gap-x-5 justify-between w-full max-w-xl mx-auto"
            >
              <input
                type="text"
                placeholder="Enter your email..."
                className="w-3/4 border-0 outline-0 focus:border-0 bg-inherit"
              />
              <button className="w-[150px] bg-black h-14 text-white">
                Subscribe
              </button>
            </form>
          </div>
          <hr />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 justify-between py-12 gap-8 lg:gap-x-16 ">
            <div className="w-full">
              <h3 className="text-2xl font-bold !font-logo uppercase text-black space-y-1">
                jereng
              </h3>
              <p className="text-gray-500 text-sm mt-3">
                The purpose of a FAQ is generally to provide information on
                frequent questions or concerns.
              </p>
              <div className="flex items-center gap-x-2 mt-3">
                <a className="bg-[#1F232F] w-7 h-7 hover:-translate-y-1.5 hover:transition-all duration-75 cursor-pointer rounded-full text-white flex-center">
                  <LuTwitter />
                </a>
                <a className="bg-[#1F232F] w-7 h-7 hover:-translate-y-1.5 hover:transition-all duration-75 cursor-pointer rounded-full text-white flex-center">
                  <LuLinkedin />
                </a>
                <a className="bg-[#1F232F] w-7 h-7 hover:-translate-y-1.5 hover:transition-all duration-75 cursor-pointer rounded-full text-white flex-center">
                  <LuFacebook />
                </a>
                <a className="bg-[#1F232F] w-7 h-7 hover:-translate-y-1.5 hover:transition-all duration-75 cursor-pointer rounded-full text-white flex-center">
                  <LuInstagram />
                </a>
              </div>
            </div>
            {footerItems.map((item, key) => (
              <div className="text-gray-500 " key={key}>
                <h3 className="text-xl mb-5 font-semibold text-black whitespace-nowrap">
                  {item.header}
                </h3>
                <div className="flex flex-col gap-y-3">
                  <p>{item.content1}</p>
                  <p className=" whitespace-nowrap">{item.content2}</p>
                  <p className=" whitespace-nowrap">{item.content3}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr />
      <div className=" w-full text-sm text-center py-1.5">
        <p>© 2024 yeeshadev, All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
