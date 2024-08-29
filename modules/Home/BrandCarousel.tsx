import React from "react";
import Carousel, { DotProps } from "react-multi-carousel";
import { ButtonGroupProps } from "react-multi-carousel/lib/types";
import CarouselArrow from "@components/UI/Button/CarouselArrow";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 1,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 480,
    },
    items: 1,
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
    <div className="absolute hidden sm:flex justify-between items-center w-full top-[50%] transform -translate-y-[50%] px-10">
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

const BrandCarousel = () => {
  const images = ["a", "b", "c"];

  return (
    <div className="w-full relative">
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
        minimumTouchDrag={80}
        renderDotsOutside
        renderButtonGroupOutside
        responsive={responsive}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {images.map((product, idx) => (
          <>
            <div
              key={"hero_" + idx}
              className="hidden sm:block w-full h-carouHeroHeight relative"
            >
              <Image
                src="/assets/imgs/a.png"
                alt="hero"
                objectFit="cover"
                layout="fill"
                className="bg-cover bg-center"
              />
            </div>
            <div
              key={"hero_2_" + idx}
              className="sm:hidden w-full h-carouMobileHeroHeight relative"
            >
              <Image
                src="/assets/imgs/aMobile.png"
                alt="hero"
                objectFit="cover"
                layout="fill"
                className="bg-cover bg-center"
              />
            </div>
          </>
        ))}
      </Carousel>
    </div>
  );
};

export default BrandCarousel;
