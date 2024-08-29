import React from "react";
import Button from "@components/UI/Button/Button";

const Order = () => {
  return (
    <div className="w-full flex flex-col">
      <h1 className="font-bold text-xl sm:text-xl lg:text-2xl xl:text-3xl md:text-left text-center">
        Order: 12837294
      </h1>

      <div className="relative overflow-x-auto sm:rounded-lg border-2 mt-5">
        <table className="hidden md:block w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Qty
              </th>
              <th scope="col" className="px-6 py-3">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b">
              <td className="px-6 py-4">12837294</td>
              <td className="px-6 py-4 w-2/12">2</td>
              <td className="px-6 py-4">10, Oct 22 12:10 PM</td>
            </tr>
            <tr className="bg-white border-b">
              <td className="px-6 py-4">12837294</td>
              <td className="px-6 py-4 w-2/12"></td>
              <td className="px-6 py-4">10, Oct 22 12:10 PM</td>
            </tr>
            <tr className="bg-white border-b">
              <td className="px-6 py-4">12837294</td>
              <td className="px-6 py-4 w-2/12"></td>
              <td className="px-6 py-4">10, Oct 22 12:10 PM</td>
            </tr>
            <tr className="bg-white border-b">
              <td className="px-6 py-4">12837294</td>
              <td className="px-6 py-4 w-2/12"></td>
              <td className="px-6 py-4">10, Oct 22 12:10 PM</td>
            </tr>
            <tr className="bg-white">
              <td className="px-6 py-4 font-bold">Total</td>
              <td className="px-6 py-4 w-2/12"></td>
              <td className="px-6 py-4 font-bold">$618.00</td>
            </tr>
          </tbody>
        </table>

        <div className="md:hidden py-4 px-3">
          <h2 className="text-sm font-bold">100AH Thumper Redback</h2>
          <div className="flex w-full border-b-2 py-2.5 text-sm">
            <p className="w-1/2 text-left">Qty</p>
            <p className="w-1/2 text-left font-bold">2</p>
          </div>
          <div className="flex w-full border-b-2 py-2.5 text-sm">
            <p className="w-1/2 text-left">Subtotal</p>
            <p className="w-1/2 text-left font-bold">$618.00</p>
          </div>
          <div className="flex w-full border-b-2 py-2.5 text-sm">
            <p className="w-1/2 text-left">Shipping</p>
            <p className="w-1/2 text-left font-bold">Free Shipping</p>
          </div>
          <div className="flex w-full border-b-2 py-2.5 text-sm">
            <p className="w-1/2 text-left">Payment Method</p>
            <p className="w-1/2 text-left font-bold">Direct with humm</p>
          </div>
          <div className="flex w-full pt-2.5 text-sm">
            <p className="w-1/2 text-left font-bold">Total</p>
            <p className="w-1/2 text-left font-bold">$618.00</p>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col w-full mt-7">
        <Button variant="fill" className="md:w-48 h-12">
          Re Order
        </Button>
        <Button variant="outline" className="md:w-48 h-12 md:ml-4 mt-4 md:mt-0">
          Request Returns
        </Button>
      </div>
    </div>
  );
};

export default Order;
