import React from "react";
import Image from "next/image";
import Button from "@components/UI/Button/Button";

const MyDetails = () => {
  return (
    <div className="w-full flex flex-col">
      <h1 className="font-bold text-xl sm:text-xl lg:text-2xl xl:text-3xl md:text-left text-center">
        Contact Infomation
      </h1>

      <div className="relative overflow-x-auto sm:rounded-lg border-2 mt-5">
        <div className="header py-3 px-7 bg-gray-50">
          <span>Contact information</span>
        </div>
        <div className="content flex flex-col py-5 px-7">
          <div className="flex md:flex-row flex-col justify-between items-center mb-4">
            <div className="flex flex-col md:w-1/2 w-full md:pr-2.5">
              <input
                type="text"
                className="w-full h-12 border-cGrayBorder border-2 px-4"
                placeholder="Full Name*"
              />
            </div>
            <div className="flex flex-col md:w-1/2 w-full md:pl-2.5 mt-4 md:mt-0">
              <input
                type="text"
                className="w-full h-12 border-cGrayBorder border-2 px-4"
                placeholder="Last Name*"
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col justify-between items-center mb-4">
            <div className="flex flex-col md:w-1/2 w-full md:pr-2.5">
              <input
                type="text"
                className="w-full h-12 border-cGrayBorder border-2 px-4"
                placeholder="Email Address*"
              />
            </div>
            <div className="flex flex-col md:w-1/2 w-full md:pl-2.5 mt-4 md:mt-0">
              <input
                type="text"
                className="w-full h-12 border-cGrayBorder border-2 px-4"
                placeholder="Phone Number*"
              />
            </div>
          </div>
          <label className="mb-4 hidden md:block">Change Your Password</label>
          <div className="hidden md:block">
            <div className="flex justify-between items-center mb-4">
              <div className="flex flex-col w-1/2 pr-2.5">
                <input
                  type="text"
                  className="w-full h-12 border-cGrayBorder border-2 px-4"
                  placeholder="New Password*"
                />
              </div>
              <div className="flex flex-col w-1/2 pl-2.5">
                <input
                  type="text"
                  className="w-full h-12 border-cGrayBorder border-2 px-4"
                  placeholder="Confirm New Password*"
                />
              </div>
            </div>
          </div>
          <Button variant="fill" className="w-32 h-12 hidden md:block">
            Submit
          </Button>
        </div>

        <div className="md:hidden header py-3 px-7 bg-gray-50">
          <span>Contact information</span>
        </div>
        <div className="md:hidden content flex flex-col py-5 px-7">
          <div className="flex flex-col w-full">
            <input
              type="text"
              className="w-full h-12 border-cGrayBorder border-2 px-4"
              placeholder="New Password*"
            />
          </div>
          <div className="flex flex-col w-full mt-4">
            <input
              type="text"
              className="w-full h-12 border-cGrayBorder border-2 px-4"
              placeholder="Confirm New Password*"
            />
          </div>
          <Button variant="fill" className="w-full h-10 mt-4">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MyDetails;
