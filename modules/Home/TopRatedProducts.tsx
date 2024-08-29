import React from "react";
import Image from "next/image";
import Carousel, { DotProps } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ButtonGroupProps } from "react-multi-carousel/lib/types";
import ProductCard from "@components/UI/Card/ProductCard";
import CarouselArrow from "@components/UI/Button/CarouselArrow";
import CarouselDot from "@components/UI/Button/CarouselDot";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 4,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 480,
    },
    items: 2,
  },
  mobile: {
    breakpoint: {
      max: 480,
      min: 0,
    },
    items: 1,
  },
};

interface CarouselButtonGroupProps extends ButtonGroupProps {
  className?: string;
}

const ButtonGroup = ({ next, previous }: CarouselButtonGroupProps) => {
  const buttonClass =
    "flex items-center justify-center hover:cursor-pointer w-12 h-12 rounded-full duration-150 border border-borderColor stroke-black hover:bg-blue-500 hover:stroke-white hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500";

  return (
    <div className="absolute hidden sm:flex justify-between items-center w-full">
      <CarouselArrow
        direction="left"
        onClick={() => {
          if (previous) {
            previous();
          }
        }}
        className={buttonClass}
      />
      <CarouselArrow
        direction="right"
        onClick={() => {
          if (next) {
            next();
          }
        }}
        className={buttonClass}
      />
    </div>
  );
};

const TopRatedProducts = () => {
  const topProducts = ["a", "b", "c", "d", "e"];

  return (
    <div className="flex flex-col w-full max-w-8xl items-center px-5 py-8 xl:px-0 xl:py-20">
      <h2 className="font-bold text-xl text-center sm:text-2xl lg:text-3xl xl:text-4xl">
        Top Rated Products
      </h2>
      <span className="mt-2 mb-5">
        <Image
          src="/assets/icons/SectionTitleDecoration.svg"
          alt="Decoration"
          width={96}
          height={15} 
        />
      </span>
      {/* Carousel */}
      <div className="flex items-center justify-center w-full relative pb-8">
        <Carousel
          showDots={false}
          additionalTransfrom={0}
          arrows={false}
          autoPlay={false}
          centerMode={false}
          className="w-full"
          customButtonGroup={<ButtonGroup />}
          draggable
          focusOnSelect={false}
          infinite={true}
          keyBoardControl
          customDot={<CarouselDot />}
          minimumTouchDrag={80}
          renderDotsOutside
          renderButtonGroupOutside
          responsive={responsive}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {topProducts.map((product, index) => (
            <ProductCard
              key={`top-product-${index}`}
              productImgSrc="/assets/imgs/products/ACE Switch Panel.png"
              productName="Ace Nxt-G Triple Flush Plate Volt and 2 X Cig"
              productRating={5}
              productPrevPrice={59.95}
              productPrice={39}
              className="mx-4"
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TopRatedProducts;
