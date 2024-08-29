import React from "react";
import { DotProps } from "react-multi-carousel";

const CarouselDot = (props: DotProps) => {
  // const dotClass = props.active ? `${className} ${activeClass}` : className;
  return (
    <button
      className="flex w-2 h-2 mr-2 rounded-full bg-[#DBDBDB] hover:bg-blue-500 active:bg-blue-500"
      onClick={() => {
        if (props.onClick) {
          props.onClick();
        }
      }}
    ></button>
  );
};

export default CarouselDot;
