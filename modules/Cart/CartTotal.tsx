import React from "react";
import Image from "next/image";
import Button from "@components/UI/Button/Button";

const CartTotal = () => {
  return (
    <div className="w-full max-w-8xl mt-8 md:mb-20 mb-7 md:px-10 px-5 flex justify-end">
      <div className="md:w-2/5 w-full border-2">
        <h2 className="border-b-2 md:px-7 px-4 py-3">Cart Total</h2>
        <div className="content md:px-7 px-4 flex flex-col bg-cGray">
          <div className="flex items-center justify-between border-b-2 py-4">
            <span>Subtotal</span>
            <span>$930.00</span>
          </div>
          <div className="flex items-center justify-between border-b-2 py-4">
            <span>Shipping</span>
            <span className="text-grey">Calculate Shipping</span>
          </div>
          <div className="flex items-center justify-between border-b-2 py-4">
            <span className="font-bold">Total</span>
            <span className="text-cBlue">$930.00</span>
          </div>
          <div className="bg-white w-full border-2 rounded flex md:flex-row flex-col justify-between items-center px-4 py-3 my-4">
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
          <div className="flex md:flex-row flex-col items-center justify-between">
            <Button
              variant="fill"
              className="md:w-5/12 w-full bg-cPink border-cPink h-12"
            >
              Check Out With humm
            </Button>
            <Button
              variant="fill"
              className="md:w-5/12 w-full md:mt-0 mt-4 h-12"
            >
              Check Out With humm
            </Button>
          </div>
          <div className="bg-white w-full border-2 rounded flex md:flex-row flex-col justify-between items-center px-4 py-3 my-4">
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
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
