import React from "react";
import { useRef } from "react";
import Image from "next/image";
import Button from "@components/UI/Button/Button";

const Returns = () => {
  const fileRef = useRef<any>(null);

  function openFile() {
    fileRef.current?.click();
  }
  function onDragDropFile(e: any) {
    console.log(e.target.files[0]);
  }

  return (
    <div className="w-full flex flex-col">
      <h1 className="font-bold text-xl sm:text-xl lg:text-2xl xl:text-3xl md:text-left text-center">
        Request Returns: 12837294
      </h1>

      <div className="relative w-full overflow-x-auto sm:rounded-lg md:border-2 mt-5">
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
              <td className="px-6 py-4">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="mr-2 cursor-pointer w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  />
                  <label className="form-check-label inline-block text-gray-800">
                    100AH Thumper Redback
                  </label>
                </div>
              </td>
              <td className="px-6 py-4 w-2/12">1</td>
              <td className="px-6 py-4">10, Oct 22 12:10 PM</td>
            </tr>
            <tr className="bg-white border-b">
              <td className="px-6 py-4">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="mr-2 cursor-pointer w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  />
                  <label className="form-check-label inline-block text-gray-800">
                    100AH Thumper Redback
                  </label>
                </div>
              </td>
              <td className="px-6 py-4 w-2/12">1</td>
              <td className="px-6 py-4">10, Oct 22 12:10 PM</td>
            </tr>
          </tbody>
        </table>

        <div className="md:hidden">
          <div className="border-2 rounded-md w-full py-2.5 px-4 shadow-lg mb-4">
            <div className="form-check flex items-center">
              <input
                type="checkbox"
                className="mr-2 cursor-pointer w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              />
              <label className="form-check-label inline-block text-gray-800">
                100AH Thumper Redback
              </label>
            </div>
            <div className="mt-3 flex justify-between items-center w-full h-5 text-sm">
              <p className="text-left font-bold">Qty</p>
              <p className="text-right">1</p>
            </div>
            <div className="divider devider-horizontal bg-cGrayBorder w-full h-0.5 my-2.5"></div>
            <div className="mt-2 flex justify-between items-center w-full h-5 text-sm">
              <p className="text-left font-bold">Total</p>
              <p className="text-right">$309.00</p>
            </div>
          </div>
          <div className="border-2 rounded-md w-full py-2.5 px-4 shadow-lg mb-4">
            <div className="form-check flex items-center">
              <input
                type="checkbox"
                className="mr-2 cursor-pointer w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              />
              <label className="form-check-label inline-block text-gray-800">
                100AH Thumper Redback
              </label>
            </div>
            <div className="mt-3 flex justify-between items-center w-full h-5 text-sm">
              <p className="text-left font-bold">Qty</p>
              <p className="text-right">1</p>
            </div>
            <div className="divider devider-horizontal bg-cGrayBorder w-full h-0.5 my-2.5"></div>
            <div className="mt-2 flex justify-between items-center w-full h-5 text-sm">
              <p className="text-left font-bold">Total</p>
              <p className="text-right">$309.00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-x-auto sm:rounded-lg border-2 md:mt-5">
        <div className="header md:py-3 py-2.5 md:px-7 px-4 bg-gray-50 border-b-2">
          <span>Info</span>
        </div>
        <div className="content flex flex-col md:py-5 py-2.5 md:px-7 px-4">
          <div className="flex md:flex-row flex-col w-full justify-between items-center mb-4">
            <div className="flex flex-col md:w-1/2 w-full md:pr-2.5">
              <input
                type="text"
                className="w-full h-12 border-cGrayBorder border-2 px-4"
                placeholder="Id"
              />
              <input
                type="text"
                className="w-full h-12 border-cGrayBorder border-2 px-4 mt-4"
                placeholder="Reason"
              />
            </div>
            <div className="md:w-1/2 w-full mt-4 md:mt-0 md:pl-2.5">
              <div
                className="border-cGrayBorder border-2 h-28 relative flex justify-center items-center cursor-pointer"
                onClick={openFile}
              >
                <div className="absolute m-auto flex md:flex-row flex-col items-center justify-between">
                  <Image
                    src="/assets/imgs/account/drop.svg"
                    alt="drop"
                    width="60px"
                    height="60px"
                  />
                  <span className="ml-5 text-sm md:text-base">
                    Drag and Drop Product Images
                  </span>
                  <input
                    type="file"
                    className="hidden"
                    ref={fileRef}
                    onChange={onDragDropFile}
                  />
                </div>
              </div>
            </div>
          </div>
          <Button variant="fill" className="md:w-32 w-full h-12">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Returns;
