import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Rating from "react-rating";
import Button from "../Button/Button";

interface ProductCardProps {
  showPrice?: boolean;
  showRating?: boolean;
  showAddCartButton?: boolean;
  showBanner?: boolean;
  showDetail?: boolean;
  bannerTitle?: string;
  addCartButtonVariant?: "outline" | "fill";
  productImgSrc: string;
  productName: string;
  productRating: number;
  productPrice: number;
  productPrevPrice: number;
  className?: string;
}

interface RatingIconProps {
  fill: string;
}

const RatingIcon = (props: RatingIconProps) => {
  return (
    <svg
      width="19"
      height="17"
      viewBox="0 0 19 17"
      fill={props.fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.5 0L12.674 4.63131L18.0595 6.21885L14.6357 10.6687L14.7901 16.2812L9.5 14.4L4.20993 16.2812L4.36429 10.6687L0.940492 6.21885L6.32596 4.63131L9.5 0Z" />
    </svg>
  );
};

const ProductCard = ({
  showPrice = true,
  showRating = true,
  showAddCartButton = true,
  showBanner = false,
  showDetail = false,
  bannerTitle,
  addCartButtonVariant = "fill",
  productImgSrc,
  productName,
  productRating,
  productPrice,
  productPrevPrice,
  className = "",
}: ProductCardProps) => {
  const router = useRouter();

  function goListingPage() {
    router.push("/list");
  }

  return (
    <div
      className={`flex flex-col min-w-fit relative items-center rounded-md border border-borderColor text-textColor ${className}`}
    >
      <div className="w-full rounded-md overflow-hidden">
        <div className="w-full bg-gray-300 rounded-md py-10 px-5">
          <div className="flex justify-center relative border-borderColor">
            <Image
              className="object-contain"
              src={productImgSrc}
              alt={productName}
              width="320px"
              height="290px"
            />
          </div>
        </div>
      </div>
      {showBanner && (
        <div className="absolute left-0 top-4">
          <div className="relative">
            <Image
              src="/assets/imgs/package/banner.svg"
              alt="banner"
              width="70px"
              height="30px"
              className="p-0 m-0"
            />
            <span className="absolute left-3 top-0.5 text-borderColor text-lg">
              {bannerTitle}
            </span>
          </div>
        </div>
      )}
      <div className="flex flex-col items-center p-2.5 bg-white">
        <div className="w-4/5 lg:w-3/4 mb-2 text-lg text-center font-medium">
          {productName}
        </div>

        {/* The rating bit doesn't work... I replaced it with this so it'll deploy */}
        {showRating && (
          <div className="flex flex-row justify-center w-full gap-2">
            {new Array(Math.floor(productRating)).fill("").map((item, i) => (
              <RatingIcon fill="#FBB605" key={i} />
            ))}
          </div>
        )}
        {/* {showRating && (
          <Rating
            initialRating={productRating}
            emptySymbol={<RatingIcon fill="#EEE" />}
            fullSymbol={<RatingIcon fill="#FBB605" />}
            readonly
          />
        )} */}
        {showPrice && (
          <div className="flex items-center mb-2.5">
            <span className="mr-2 text-sm md:text-lg font-medium md:font-bold text-textColor">
              ${productPrice}
            </span>
            {productPrevPrice > 0 && (
              <span className="text-base text-grey line-through">
                ${productPrevPrice}
              </span>
            )}
          </div>
        )}
        {showAddCartButton && (
          <Button
            variant={addCartButtonVariant}
            className="w-full h-10 font-medium duration-150"
            onClickProps={goListingPage}
          >
            Add to Cart
          </Button>
        )}
      </div>
      {showDetail && (
        <div className="p-0.5 w-full">
          <div className="flex justify-between items-center w-full h-16 bg-gray-300 mt-2 rounded-md p-2">
            <p className="w-1/2 text-xs">
              or 4 Interest-Free Payments of $81.25 With
            </p>
            <Image
              src="/assets/imgs/list/afterpay.svg"
              alt="zip"
              width="95px"
              height="24px"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
