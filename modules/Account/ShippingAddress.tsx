import React from "react";
import Button from "@components/UI/Button/Button";

const ShippingAddress = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex md:justify-between justify-center items-center">
        <h1 className="font-bold text-xl sm:text-xl lg:text-2xl xl:text-3xl md:text-left text-center">
          Shipping Address
        </h1>
        <Button variant="fill" className="w-40 h-12 hidden md:block">
          Add Address
        </Button>
      </div>

      <div className="relative md:border-2 mt-5 md:p-7">
        <div className="flex md:flex-row flex-col items-center w-full">
          <div className="md:w-1/2 w-full md:pr-4">
            <div className="flex flex-col border-2 bg-cGray">
              <div className="header py-3 px-7 flex justify-between items-center border-b-gray-300 border-b-2">
                <h3>Default Billing Address</h3>
                <input
                  type="checkbox"
                  className="cursor-pointer w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                />
              </div>
              <div className="content px-7 flex flex-col py-4">
                <p className="py-2">ABC Location,</p>
                <p className="py-2">Opp. XYZ Mall,</p>
                <p className="py-2">Some text goes here</p>
                <p className="py-2">email: info@saggaf.com</p>
                <Button variant="outline" className="w-full h-12 mt-2">
                  Edit Address
                </Button>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full md:pl-4 mt-4 md:mt-0">
            <div className="flex flex-col border-2 bg-cGray">
              <div className="header py-3 px-7 flex justify-between items-center border-b-gray-300 border-b-2">
                <h3>Other Billing Address</h3>
                <input
                  type="checkbox"
                  className="cursor-pointer w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                />
              </div>
              <div className="content px-7 flex flex-col py-4">
                <p className="py-2">ABC Location,</p>
                <p className="py-2">Opp. XYZ Mall,</p>
                <p className="py-2">Some text goes here</p>
                <p className="py-2">email: info@saggaf.com</p>
                <Button variant="outline" className="w-full h-12 mt-2">
                  Edit Address
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Button variant="fill" className="w-full h-10 mt-4 md:hidden">
          Add Address
        </Button>
      </div>
    </div>
  );
};

export default ShippingAddress;
