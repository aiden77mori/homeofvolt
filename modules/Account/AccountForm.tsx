import React from "react";
import { useState } from "react";
import MyOrders from "./MyOrders";
import Returns from "./Returns";
import ShippingAddress from "./ShippingAddress";
import MyDetails from "./MyDetails";

const AccountForm = () => {
  const [active, setActive] = useState<number>(0);

  function handleActive(evt: any) {
    setActive(Number(evt.target.value));
  }

  return (
    <div className="w-full flex md:flex-row flex-col justify-between items-start max-w-8xl md:my-20 my-5 md:px-10 px-5">
      <div className="left-tabs hidden md:block md:w-3/12 w-full md:pr-4">
        <div className="flex flex-col w-full border-2">
          <div
            className={`py-4 px-7 border-b-2 hover:cursor-pointer ${
              active === 0 && "bg-cBlue text-white"
            }`}
            onClick={() => setActive(0)}
          >
            My Orders
          </div>
          <div
            className={`py-4 px-7 border-b-2 hover:cursor-pointer ${
              active === 1 && "bg-cBlue text-white"
            }`}
            onClick={() => setActive(1)}
          >
            Returns
          </div>
          <div
            className={`py-4 px-7 border-b-2 hover:cursor-pointer ${
              active === 2 && "bg-cBlue text-white"
            }`}
            onClick={() => setActive(2)}
          >
            Shipping Address
          </div>
          <div
            className={`py-4 px-7 border-b-2 hover:cursor-pointer ${
              active === 3 && "bg-cBlue text-white"
            }`}
            onClick={() => setActive(3)}
          >
            My Details
          </div>
          <div
            className={`py-4 px-7 border-b-2 hover:cursor-pointer ${
              active === 4 && "bg-cBlue text-white"
            }`}
            onClick={() => setActive(4)}
          >
            Log out
          </div>
        </div>
      </div>
      <div className="md:hidden w-full">
        <select
          onChange={handleActive}
          className="w-full border-2 border-gray-300 rounded-md h-10 px-2"
        >
          <option value={0}>My Orders </option>
          <option value={1}>Returns</option>
          <option value={2}>Shipping Address</option>
          <option value={3}>My Details</option>
          <option value={4}>Log out</option>
        </select>
      </div>
      <div className="right-contents flex flex-col md:w-9/12 w-full md:pl-4 md:mt-0 mt-4">
        {active === 0 && <MyOrders />}
        {active === 1 && <Returns />}
        {active === 2 && <ShippingAddress />}
        {active === 3 && <MyDetails />}
      </div>
    </div>
  );
};

export default AccountForm;
