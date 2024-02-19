import React from "react";
import imageGallery from "./imageGallery";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const MasonaryImageGallery = () => {
  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 300: 1, 750: 3, 1000: 4 }}
      // columns={{ 320: 1, 480: 2, 800: 3, 1000: 4 }}
      // breakpoints={{ 350: 2, 750: 3, 900: 4 }}
    >
      <Masonry gutter="1rem">
        {imageGallery.map((item, index) => (
          <img
            src={item}
            key={index}
            alt=""
            style={{ width: "100%", display: "block", borderRadius: "10px" }}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonaryImageGallery;
