import React from "react";
import Image from "next/image";
import Badge from "@components/UI/Banner/Badge";
import Button from "@components/UI/Button/Button";

const Cart = () => {
  const badgetList = [
    {
      src: "/assets/imgs/list/weight.svg",
      title: "Weight",
      number: "29.5Kg",
    },
    {
      src: "/assets/imgs/list/length.svg",
      title: "Length",
      number: "305mm",
    },
    {
      src: "/assets/imgs/list/height.svg",
      title: "Height",
      number: "220mm",
    },
    {
      src: "/assets/imgs/list/width.svg",
      title: "Width",
      number: "175mmKg",
    },
    {
      src: "/assets/imgs/list/warranty.svg",
      title: "Warranty",
      number: "2 Year",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row md:justify-between justify-center md:items-start items-center w-full max-w-8xl md:px-10 px-5 md:mt-20 mt-5">
      <div className="rounded-sm w-full min-w-cartMobileImageWidth md:max-w-cartImageWidth md:w-6/12 h-cartMobileImageHeight md:min-h-cartImageHeight bg-gray-300 md:py-24 py-10 md:px-8 px-3.5">
        <div className="relative flex justify-center w-full h-full md:min-h-cartInnerImageHeight">
          <Image
            src="/assets/imgs/products/ACE Switch Panel.png"
            alt="product"
            layout="fill"
            className="bg-cover bg-center"
          />
        </div>
      </div>

      <div className="flex flex-col w-full md:w-6/12 md:pl-14 mt-5 md:mt-0">
        <p className="text-2xl md:text-4xl md:leading-10 md:w-96 w-56 mb-2 font-bold">
          105AH Thumper Redback Extreme
        </p>
        <div className="flex items-center mb-4">
          <span className="mr-2 text-sm md:text-lg font-medium md:font-bold text-cBlue">
            $325.00
          </span>
          <span className="text-base text-grey line-through">$325.00</span>
        </div>
        <div className="md:hidden mb-4">
          <div className="flex justify-between items-center w-52">
            <div className="flex justify-center items-center border-2 w-12 h-12 bg-gray-300">
              -
            </div>
            <input type="text" value="01" className="border-2 w-20 h-12 pl-5" />
            <div className="flex justify-center items-center border-2 w-12 h-12 bg-gray-300">
              +
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="w-full border-2 rounded flex md:flex-row flex-col justify-between items-center px-4 py-3 mb-4">
            <span className="hidden md:block">
              Or Interest Free For Up To 6 Months With
            </span>
            <div className="flex justify-between items-start md:hidden">
              <span className="md:hidden">
                Or Interest Free For Up To 6 Months With
              </span>
              <svg
                className="w-6 h-6 ml-4 md:hidden"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div className="flex md:items-center items-start w-full md:w-auto">
              <Image
                src="/assets/imgs/list/zip.svg"
                alt="zip"
                width="65px"
                height="24px"
              />
              <svg
                className="w-6 h-6 ml-4 hidden md:block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="w-full border-2 rounded flex md:flex-row flex-col justify-between items-center px-4 py-3 mb-4">
            <span className="hidden md:block">
              Or Interest Free For Up To 6 Months With
            </span>
            <div className="flex justify-between items-start md:hidden">
              <span className="md:hidden">
                Or Interest Free For Up To 6 Months With
              </span>
              <span className="ml-4">More Info</span>
            </div>
            <div className="flex md:items-center items-start w-full md:w-auto">
              <Image
                src="/assets/imgs/list/humm.svg"
                alt="zip"
                width="120px"
                height="24px"
              />
              <span className="ml-4 hidden md:block">More Info</span>
            </div>
          </div>
          <div className="w-full border-2 rounded flex md:flex-row flex-col justify-between items-center px-4 py-3 mb-4">
            <span className="hidden md:block">
              Or Interest Free For Up To $81.25 With
            </span>
            <div className="flex justify-between items-start md:hidden">
              <span className="md:hidden">
                Or Interest Free For Up To $81.25 With
              </span>
              <svg
                className="w-6 h-6 ml-4 md:hidden"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div className="flex md:items-center items-start w-full md:w-auto">
              <Image
                src="/assets/imgs/list/afterpay.svg"
                alt="zip"
                width="65px"
                height="24px"
              />
              <svg
                className="w-6 h-6 ml-4 hidden md:block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between md:justify-start max-w-lg">
          {badgetList.map((res, idx) => (
            <Badge
              key={"product-badge-" + idx}
              title={res.title}
              number={res.number}
              imageChildren={
                <Image src={res.src} alt="kg" width="28px" height="30px" />
              }
            />
          ))}
        </div>
        <div className="flex justify-between items-center md:border-t-2 pt-5">
          <div className="hidden md:block">
            <div className="flex justify-between items-center w-52">
              <div className="flex justify-center items-center border-2 w-12 h-12 bg-gray-300">
                -
              </div>
              <input
                type="text"
                value="01"
                className="border-2 w-20 h-12 pl-5"
              />
              <div className="flex justify-center items-center border-2 w-12 h-12 bg-gray-300">
                +
              </div>
            </div>
          </div>
          <Button
            variant="fill"
            className="h-12 md:w-3/5 w-full font-medium duration-150"
          >
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
