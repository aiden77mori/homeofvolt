import React from "react";
import Image from "next/image";
import Button from "@components/UI/Button/Button";

const CartBox = () => {
  return (
    <div className="w-full flex flex-col max-w-8xl md:mt-20 mt-5 md:px-10 px-5">
      <h1 className="font-bold text-2xl text-center lg:text-3xl xl:text-4xl">
        Cart
      </h1>

      <div className="relative overflow-x-auto sm:rounded-lg md:border-2 md:mt-8 mt-4">
        <table className="hidden md:block w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Subtotal
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium flex items-center"
              >
                <div className="bg-cGrayBorder py-3 px-1">
                  <Image
                    src="/assets/imgs/cart/battery.png"
                    alt="battery"
                    width="72px"
                    height="60px"
                  />
                </div>
                <span className="ml-10">Apple MacBook Pro 17"</span>
              </th>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4 w-2/12">
                <div className="flex justify-between items-center w-full">
                  <div className="flex justify-center items-center border-2 w-1/3 h-12 bg-gray-300">
                    -
                  </div>
                  <input
                    type="text"
                    value="01"
                    className="border-2 w-1/3 h-12 pl-5"
                  />
                  <div className="flex justify-center items-center border-2 w-1/3 h-12 bg-gray-300">
                    +
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">$618.00</td>
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
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium flex items-center"
              >
                <div className="bg-cGrayBorder py-3 px-1">
                  <Image
                    src="/assets/imgs/cart/battery.png"
                    alt="battery"
                    width="72px"
                    height="60px"
                  />
                </div>
                <span className="ml-10">Apple MacBook Pro 17"</span>
              </th>
              <td className="px-6 py-4">$1999</td>
              <td className="px-6 py-4 w-2/12">
                <div className="flex justify-between items-center w-full">
                  <div className="flex justify-center items-center border-2 w-1/3 h-12 bg-gray-300">
                    -
                  </div>
                  <input
                    type="text"
                    value="01"
                    className="border-2 w-1/3 h-12 pl-5"
                  />
                  <div className="flex justify-center items-center border-2 w-1/3 h-12 bg-gray-300">
                    +
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">$618.00</td>
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
            <tr className="bg-white">
              <th
                scope="row"
                className="px-6 py-4 font-medium flex items-center"
              >
                <div className="bg-cGrayBorder py-3 px-1">
                  <Image
                    src="/assets/imgs/cart/battery.png"
                    alt="battery"
                    width="72px"
                    height="60px"
                    className="hover:cursor-pointer"
                  />
                </div>
                <span className="ml-10">Apple MacBook Pro 17"</span>
              </th>
              <td className="px-6 py-4">$99</td>
              <td className="px-6 py-4 w-2/12">
                <div className="flex justify-between items-center w-full">
                  <div className="flex justify-center items-center border-2 w-1/3 h-12 bg-gray-300">
                    -
                  </div>
                  <input
                    type="text"
                    value="01"
                    className="border-2 w-1/3 h-12 pl-5"
                  />
                  <div className="flex justify-center items-center border-2 w-1/3 h-12 bg-gray-300">
                    +
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">$618.00</td>
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
        <div className="md:hidden flex flex-col">
          <div className="border-2 rounded-md w-full py-2.5 px-4 shadow-lg mb-4">
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
                  src="/assets/imgs/cart/delete.svg"
                  alt="delete"
                  width="35px"
                  height="35px"
                  className="hover:cursor-pointer"
                />
              </div>
            </div>
            <div className="mt-3 flex justify-between items-center w-full h-5">
              <p className="text-sm">$309.00</p>
              <div className="flex justify-between items-center w-4/12">
                <div className="flex justify-center items-center w-5 h-full bg-gray-300">
                  -
                </div>
                <input
                  type="text"
                  value="01"
                  className="border-2 w-6 h-full pl-1 text-xs"
                />
                <div className="flex justify-center items-center w-5 h-full bg-gray-300">
                  +
                </div>
              </div>
            </div>
            <div className="divider devider-horizontal bg-cGrayBorder w-full h-0.5 my-4"></div>
            <p className="w-full text-right">$618.00</p>
          </div>
          <div className="border-2 rounded-md w-full py-2.5 px-4 shadow-lg mb-4">
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
                  src="/assets/imgs/cart/delete.svg"
                  alt="delete"
                  width="35px"
                  height="35px"
                  className="hover:cursor-pointer"
                />
              </div>
            </div>
            <div className="mt-3 flex justify-between items-center w-full h-5">
              <p className="text-sm">$309.00</p>
              <div className="flex justify-between items-center w-4/12">
                <div className="flex justify-center items-center w-5 h-full bg-gray-300">
                  -
                </div>
                <input
                  type="text"
                  value="01"
                  className="border-2 w-6 h-full pl-1 text-xs"
                />
                <div className="flex justify-center items-center w-5 h-full bg-gray-300">
                  +
                </div>
              </div>
            </div>
            <div className="divider devider-horizontal bg-cGrayBorder w-full h-0.5 my-4"></div>
            <p className="w-full text-right">$618.00</p>
          </div>
          <div className="border-2 rounded-md w-full py-2.5 px-4 shadow-lg mb-4">
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
                  src="/assets/imgs/cart/delete.svg"
                  alt="delete"
                  width="35px"
                  height="35px"
                  className="hover:cursor-pointer"
                />
              </div>
            </div>
            <div className="mt-3 flex justify-between items-center w-full h-5">
              <p className="text-sm">$309.00</p>
              <div className="flex justify-between items-center w-4/12">
                <div className="flex justify-center items-center w-5 h-full bg-gray-300">
                  -
                </div>
                <input
                  type="text"
                  value="01"
                  className="border-2 w-6 h-full pl-1 text-xs"
                />
                <div className="flex justify-center items-center w-5 h-full bg-gray-300">
                  +
                </div>
              </div>
            </div>
            <div className="divider devider-horizontal bg-cGrayBorder w-full h-0.5 my-4"></div>
            <p className="w-full text-right">$618.00</p>
          </div>
          <div className="border-2 rounded-md w-full py-2.5 px-4 shadow-lg mb-4">
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
                  src="/assets/imgs/cart/delete.svg"
                  alt="delete"
                  width="35px"
                  height="35px"
                  className="hover:cursor-pointer"
                />
              </div>
            </div>
            <div className="mt-3 flex justify-between items-center w-full h-5">
              <p className="text-sm">$309.00</p>
              <div className="flex justify-between items-center w-4/12">
                <div className="flex justify-center items-center w-5 h-full bg-gray-300">
                  -
                </div>
                <input
                  type="text"
                  value="01"
                  className="border-2 w-6 h-full pl-1 text-xs"
                />
                <div className="flex justify-center items-center w-5 h-full bg-gray-300">
                  +
                </div>
              </div>
            </div>
            <div className="divider devider-horizontal bg-cGrayBorder w-full h-0.5 my-4"></div>
            <p className="w-full text-right">$618.00</p>
          </div>
        </div>
        <div className="md:px-7 py-2 flex md:flex-row flex-col items-center justify-between md:border-t-2">
          <div className="coupon-code flex items-center mb-4 md:mb-0 md:w-6/12 w-full">
            <input
              placeholder="Coupon Code"
              className="px-4 py-3 md:w-96 w-7/12 h-12 bg-cGray"
            />
            <Button variant="fill" className="h-12 md:w-40 w-5/12">
              Apply Coupon
            </Button>
          </div>
          <div className="flex md:flex-row flex-col md:w-5/12 w-full items-center justify-end">
            <Button variant="fill" className="h-12 md:w-52 w-full mb-4 md:mb-0">
              Countinue Shipping
            </Button>
            <Button
              variant="outline"
              className="h-12 md:w-52 w-full md:ml-4 mb-4 md:mb-0"
            >
              Updat Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartBox;
