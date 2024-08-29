import ImageLink from "@components/UI/Link/ImageLink";
import React from "react";

const ShoppingCart = () => {
  return (
    <div className="flex relative items-center pl-4">
      <ImageLink
        link="/cart"
        imageSrc="/assets/icons/ShoppingCart.svg"
        imageAlt="Shopping Cart"
        width={18}
        height={18}
      />
      <span className="flex absolute -right-3.5 -top-1.5 sm:relative sm:inset-0 items-center text-white text-xs justify-center w-5 h-5 ml-1 rounded-full bg-blue-500">
        10
      </span>
    </div>
  );
};

export default ShoppingCart;
