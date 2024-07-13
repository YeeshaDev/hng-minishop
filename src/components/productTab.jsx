import React, { useState } from "react";

function ProductTab({ productDet }) {
  const [activeTab, setActiveTab] = useState("DESCRIPTION");

  const renderContent = () => {
    switch (activeTab) {
      case "DESCRIPTION":
        return (
          <p className="py-6 text-lightGray">
            {productDet?.description ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed."}
          </p>
        );
      case "ADDITIONAL INFORMATION":
        return (
          <p className="py-6 text-lightGray">
            Additional information will be provided soon.
          </p>
        );
      case "REVIEWS":
        return productDet?.reviews?.length > 0 ? (
          <ul className="py-6 text-lightGray">
            {productDet.reviews.map((review, index) => (
              <li key={index}>{review}</li>
            ))}
          </ul>
        ) : (
          <p className="py-6 text-lightGray">No reviews yet.</p>
        );
      default:
        return null;
    }
  };

  return (
    <div className="my-5 px-3 lg:px-0">
      <div className="flex items-start text-sm sm:text-[1rem] overflow-x-scroll w-full gap-x-5 sm:gap-x-2 justify-between py-5 text-lightGray">
        <p
          onClick={() => setActiveTab("DESCRIPTION")}
          className={`relative after:absolute after:w-full after:h-1 cursor-pointer ${
            activeTab === "DESCRIPTION"
              ? "!text-textClr font-medium after:bg-textClr/80"
              : ""
          } after:-bottom-4 after:left-0`}
        >
          DESCRIPTION
        </p>
        <p
          onClick={() => setActiveTab("ADDITIONAL INFORMATION")}
          className={`relative after:absolute after:w-full after:h-1 cursor-pointer ${
            activeTab === "ADDITIONAL INFORMATION"
              ? "!text-textClr font-medium after:bg-textClr/80"
              : ""
          } after:-bottom-4 after:left-0`}
        >
          ADDITIONAL INFORMATION
        </p>
        <p
          onClick={() => setActiveTab("REVIEWS")}
          className={`relative after:absolute after:w-full after:h-1 cursor-pointer ${
            activeTab === "REVIEWS"
              ? "!text-textClr font-medium after:bg-textClr/80"
              : ""
          } after:-bottom-4 after:left-0`}
        >
          REVIEWS ({productDet?.reviews?.length || 0})
        </p>
      </div>

      {renderContent()}
    </div>
  );
}

export default ProductTab;
