import React from "react";
import { useState } from "react";
import Image from "next/image";
import Button from "@components/UI/Button/Button";
import Order from "./Order";

const MyOrders = () => {
  const [select, setSelect] = useState<number>(0);

  return (
    <>
      <div className={`w-full flex flex-col ${select !== 0 && "hidden"}`}>
        <h1 className="font-bold text-xl sm:text-xl lg:text-2xl xl:text-3xl md:text-left text-center">
          My Orders
        </h1>

        <div className="relative overflow-x-auto sm:rounded-lg md:border-2 mt-5">
          <table className="md:block hidden w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Date and Time
                </th>
                <th scope="col" className="px-6 py-3">
                  Total
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                className="bg-white border-b hover:cursor-pointer"
                onClick={() => setSelect(1)}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium flex items-center"
                >
                  <div className="bg-cGrayBorder py-2 px-1 w-15 h-15">
                    <Image
                      src="/assets/imgs/cart/battery.png"
                      alt="battery"
                      width="90%"
                      height="80%"
                    />
                  </div>
                </th>
                <td className="px-6 py-4">12837294</td>
                <td className="px-6 py-4 w-2/12">100AH Thumper Redback</td>
                <td className="px-6 py-4">10, Oct 22 12:10 PM</td>
                <td className="px-6 py-4">$618.00</td>
                <td className="px-6 py-4">Dispatched</td>
                <td className="px-6 py-4">
                  <Image
                    src="/assets/imgs/cart/delete.svg"
                    alt="delete"
                    width="35px"
                    height="35px"
                    className="hover:cursor-pointer"
                  />
                </td>
              </tr>
              <tr
                className="bg-white border-b hover:cursor-pointer"
                onClick={() => setSelect(1)}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium flex items-center"
                >
                  <div className="bg-cGrayBorder py-2 px-1 w-15 h-15">
                    <Image
                      src="/assets/imgs/cart/battery.png"
                      alt="battery"
                      width="90%"
                      height="80%"
                    />
                  </div>
                </th>
                <td className="px-6 py-4">12837294</td>
                <td className="px-6 py-4 w-2/12">100AH Thumper Redback</td>
                <td className="px-6 py-4">10, Oct 22 12:10 PM</td>
                <td className="px-6 py-4">$618.00</td>
                <td className="px-6 py-4">Dispatched</td>
                <td className="px-6 py-4">
                  <Image
                    src="/assets/imgs/cart/delete.svg"
                    alt="delete"
                    width="35px"
                    height="35px"
                    className="hover:cursor-pointer"
                  />
                </td>
              </tr>
              <tr
                className="bg-white border-b hover:cursor-pointer"
                onClick={() => setSelect(1)}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium flex items-center"
                >
                  <div className="bg-cGrayBorder py-2 px-1 w-15 h-15">
                    <Image
                      src="/assets/imgs/cart/battery.png"
                      alt="battery"
                      width="90%"
                      height="80%"
                    />
                  </div>
                </th>
                <td className="px-6 py-4">12837294</td>
                <td className="px-6 py-4 w-2/12">100AH Thumper Redback</td>
                <td className="px-6 py-4">10, Oct 22 12:10 PM</td>
                <td className="px-6 py-4">$618.00</td>
                <td className="px-6 py-4">Dispatched</td>
                <td className="px-6 py-4">
                  <Image
                    src="/assets/imgs/cart/delete.svg"
                    alt="delete"
                    width="35px"
                    height="35px"
                    className="hover:cursor-pointer"
                  />
                </td>
              </tr>
              <tr
                className="bg-white hover:cursor-pointer"
                onClick={() => setSelect(1)}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium flex items-center"
                >
                  <div className="bg-cGrayBorder py-2 px-1 w-15 h-15">
                    <Image
                      src="/assets/imgs/cart/battery.png"
                      alt="battery"
                      width="90%"
                      height="80%"
                    />
                  </div>
                </th>
                <td className="px-6 py-4">12837294</td>
                <td className="px-6 py-4 w-2/12">100AH Thumper Redback</td>
                <td className="px-6 py-4">10, Oct 22 12:10 PM</td>
                <td className="px-6 py-4">$618.00</td>
                <td className="px-6 py-4">Dispatched</td>
                <td className="px-6 py-4">
                  <Image
                    src="/assets/imgs/cart/delete.svg"
                    alt="delete"
                    width="35px"
                    height="35px"
                    className="hover:cursor-pointer"
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <div className="md:hidden">
            <div className="border-2 rounded-md w-full py-2.5 px-4 shadow-lg mb-4" onClick={() => setSelect(1)}>
              <div className="flex justify-between items-center ">
                <div className="flex justify-center w-4/12 py-2 px-1 relative bg-cGrayBorder">
                  <Image
                    src="/assets/imgs/cart/battery.png"
                    alt="battery"
                    objectFit="cover"
                    width="56px"
                    height="43px"
                    className="object-contain"
                  />
                </div>
                <div className="flex justify-between items-center w-8/12 ml-2.5">
                  <h2 className="text-base">100AH Thumper Redback</h2>
                  <Image
                    src="/assets/imgs/account/view.svg"
                    alt="delete"
                    width="35px"
                    height="35px"
                    className="hover:cursor-pointer"
                  />
                </div>
              </div>
              <div className="mt-3 flex justify-between items-center w-full h-5 text-sm">
                <p className="text-left font-bold">Date and Time</p>
                <p className="text-right">10, Oct 22 12:10 PM</p>
              </div>
              <div className="mt-2 flex justify-between items-center w-full h-5 text-sm">
                <p className="text-left font-bold">Total</p>
                <p className="text-right">$55.00</p>
              </div>
              <div className="mt-2 flex justify-between items-center w-full h-5 text-sm">
                <p className="text-left font-bold">Status</p>
                <p className="text-right">Dispatched</p>
              </div>
            </div>
            <div className="border-2 rounded-md w-full py-2.5 px-4 shadow-lg mb-4" onClick={() => setSelect(1)}>
              <div className="flex justify-between items-center ">
                <div className="flex justify-center w-4/12 py-2 px-1 relative bg-cGrayBorder">
                  <Image
                    src="/assets/imgs/cart/battery.png"
                    alt="battery"
                    objectFit="cover"
                    width="56px"
                    height="43px"
                    className="object-contain"
                  />
                </div>
                <div className="flex justify-between items-center w-8/12 ml-2.5">
                  <h2 className="text-base">100AH Thumper Redback</h2>
                  <Image
                    src="/assets/imgs/account/view.svg"
                    alt="delete"
                    width="35px"
                    height="35px"
                    className="hover:cursor-pointer"
                  />
                </div>
              </div>
              <div className="mt-3 flex justify-between items-center w-full h-5 text-sm">
                <p className="text-left font-bold">Date and Time</p>
                <p className="text-right">10, Oct 22 12:10 PM</p>
              </div>
              <div className="mt-2 flex justify-between items-center w-full h-5 text-sm">
                <p className="text-left font-bold">Total</p>
                <p className="text-right">$55.00</p>
              </div>
              <div className="mt-2 flex justify-between items-center w-full h-5 text-sm">
                <p className="text-left font-bold">Status</p>
                <p className="text-right">Dispatched</p>
              </div>
            </div>
            <div className="border-2 rounded-md w-full py-2.5 px-4 shadow-lg mb-4" onClick={() => setSelect(1)}>
              <div className="flex justify-between items-center ">
                <div className="flex justify-center w-4/12 py-2 px-1 relative bg-cGrayBorder">
                  <Image
                    src="/assets/imgs/cart/battery.png"
                    alt="battery"
                    objectFit="cover"
                    width="56px"
                    height="43px"
                    className="object-contain"
                  />
                </div>
                <div className="flex justify-between items-center w-8/12 ml-2.5">
                  <h2 className="text-base">100AH Thumper Redback</h2>
                  <Image
                    src="/assets/imgs/account/view.svg"
                    alt="delete"
                    width="35px"
                    height="35px"
                    className="hover:cursor-pointer"
                  />
                </div>
              </div>
              <div className="mt-3 flex justify-between items-center w-full h-5 text-sm">
                <p className="text-left font-bold">Date and Time</p>
                <p className="text-right">10, Oct 22 12:10 PM</p>
              </div>
              <div className="mt-2 flex justify-between items-center w-full h-5 text-sm">
                <p className="text-left font-bold">Total</p>
                <p className="text-right">$55.00</p>
              </div>
              <div className="mt-2 flex justify-between items-center w-full h-5 text-sm">
                <p className="text-left font-bold">Status</p>
                <p className="text-right">Dispatched</p>
              </div>
            </div>
            <div className="border-2 rounded-md w-full py-2.5 px-4 shadow-lg mb-4" onClick={() => setSelect(1)}>
              <div className="flex justify-between items-center ">
                <div className="flex justify-center w-4/12 py-2 px-1 relative bg-cGrayBorder">
                  <Image
                    src="/assets/imgs/cart/battery.png"
                    alt="battery"
                    objectFit="cover"
                    width="56px"
                    height="43px"
                    className="object-contain"
                  />
                </div>
                <div className="flex justify-between items-center w-8/12 ml-2.5">
                  <h2 className="text-base">100AH Thumper Redback</h2>
                  <Image
                    src="/assets/imgs/account/view.svg"
                    alt="delete"
                    width="35px"
                    height="35px"
                    className="hover:cursor-pointer"
                  />
                </div>
              </div>
              <div className="mt-3 flex justify-between items-center w-full h-5 text-sm">
                <p className="text-left font-bold">Date and Time</p>
                <p className="text-right">10, Oct 22 12:10 PM</p>
              </div>
              <div className="mt-2 flex justify-between items-center w-full h-5 text-sm">
                <p className="text-left font-bold">Total</p>
                <p className="text-right">$55.00</p>
              </div>
              <div className="mt-2 flex justify-between items-center w-full h-5 text-sm">
                <p className="text-left font-bold">Status</p>
                <p className="text-right">Dispatched</p>
              </div>
            </div>
            <div className="border-2 rounded-md w-full py-2.5 px-4 shadow-lg mb-4" onClick={() => setSelect(1)}>
              <div className="flex justify-between items-center ">
                <div className="flex justify-center w-4/12 py-2 px-1 relative bg-cGrayBorder">
                  <Image
                    src="/assets/imgs/cart/battery.png"
                    alt="battery"
                    objectFit="cover"
                    width="56px"
                    height="43px"
                    className="object-contain"
                  />
                </div>
                <div className="flex justify-between items-center w-8/12 ml-2.5">
                  <h2 className="text-base">100AH Thumper Redback</h2>
                  <Image
                    src="/assets/imgs/account/view.svg"
                    alt="delete"
                    width="35px"
                    height="35px"
                    className="hover:cursor-pointer"
                  />
                </div>
              </div>
              <div className="mt-3 flex justify-between items-center w-full h-5 text-sm">
                <p className="text-left font-bold">Date and Time</p>
                <p className="text-right">10, Oct 22 12:10 PM</p>
              </div>
              <div className="mt-2 flex justify-between items-center w-full h-5 text-sm">
                <p className="text-left font-bold">Total</p>
                <p className="text-right">$55.00</p>
              </div>
              <div className="mt-2 flex justify-between items-center w-full h-5 text-sm">
                <p className="text-left font-bold">Status</p>
                <p className="text-right">Dispatched</p>
              </div>
            </div>
          </div>

          <div className="md:px-7 py-2 flex items-center justify-between md:border-t-2">
            <p className="text-sm md:text-lg">Showing all 5 Results</p>
            <div className="flex justify-center">
              <nav aria-label="Page navigation example">
                <ul className="flex list-style-none">
                  <li className="page-item disabled border-gray-300 border-2 mr-3 rounded-full">
                    <a
                      className="page-link relative block py-1.5 px-3 border-0 bg-transparent transition-all duration-300 rounded-full text-gray-500 pointer-events-none focus:shadow-none"
                      href="#"
                    >
                      &#60;
                    </a>
                  </li>
                  <li className="page-item border-gray-300 border-2 mr-3 rounded-full">
                    <a
                      className="page-link relative block py-1.5 px-3 border-0 bg-transparent bg-blue-600 transition-all duration-300 rounded-full text-white hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                      href="#"
                    > 
                      1
                    </a>
                  </li>
                  <li className="page-item border-gray-300 border-2 rounded-full">
                    <a
                      className="page-link relative block py-1.5 px-3 border-0 bg-transparent transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                      href="#"
                    >
                      &#62;
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {select !== 0 && <Order />}
    </>
  );
};

export default MyOrders;
