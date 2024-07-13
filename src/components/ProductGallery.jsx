import React, { useState } from "react";

const ProductGallery = ({ productDet }) => {
  const [selectedImage, setSelectedImage] = useState(
    productDet?.photos[0]?.url
  );

  const handleThumbnailClick = (url) => {
    setSelectedImage(url);
  };

  return (
    <div className="flex flex-col md:flex-row-reverse justify-center gap-4 ">
      {/* PRODUCT IMAGES - LARGE IMAGE */}
      <div className="max-w-[700px] max-h-[600px] lg:max-w-[600px] w-full">
        <img
          src={`https://api.timbu.cloud/images/${selectedImage}`}
          className="w-full h-full object-cover transition-all duration-300 ease-in-out"
        />
      </div>
      {/* PRODUCT IMAGES - THUMBNAILS */}
      <div className="flex md:flex-col overflow-x-auto mt-10 md:mt-0 lg:mt-3 gap-3 gap-y-8">
        {productDet?.photos?.length > 0 &&
          productDet?.photos.slice(0,3).map((item, index) => (
            <div
              key={index}
              className="flex md:flex-col sm:mt-3 gap-3 gap-y-8"
              onClick={() => handleThumbnailClick(item.url)}
            >
              <img
                width={120}
                height={110}
                src={`https://api.timbu.cloud/images/${item?.url}`}
                className="border-2 border-textClr cursor-pointer"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductGallery;
