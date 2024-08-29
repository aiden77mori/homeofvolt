import React from "react";
import { useState } from "react";
import Description from "./Description";
import Additional from "./Additional";
import Review from "./Review";

const TabsInfo = () => {
  const [isActive, setActive] = useState<number>(0);

  function handleActive(evt: any) {
    setActive(Number(evt.target.value));
  }

  return (
    <div className="flex flex-col justify-center w-full max-w-8xl md:px-10 px-5 md:mt-12 mt-4">
      <div className="hidden md:block">
        <div className="button-group flex items-center">
          <div
            className={`flex justify-center items-center rounded-tl-md py-2 px-4 hover:cursor-pointer ${
              isActive === 0 ? "bg-cBlue text-white" : "bg-cGray"
            }`}
            onClick={() => setActive(0)}
          >
            Description
          </div>
          <div
            className={`flex justify-center items-center py-2 px-4 hover:cursor-pointer ${
              isActive === 1 ? "bg-cBlue text-white" : "bg-cGray"
            }`}
            onClick={() => setActive(1)}
          >
            Additional information
          </div>
          <div
            className={`flex justify-center items-center rounded-tr-md border-l-2 py-2 px-4 hover:cursor-pointer ${
              isActive === 2 ? "bg-cBlue text-white" : "bg-cGray"
            }`}
            onClick={() => setActive(2)}
          >
            Reviews (1)
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <select
          onChange={handleActive}
          className="w-full border-2 border-gray-300 md:h-12 h-10 px-2"
        >
          <option value={0}>Description</option>
          <option value={1}>Additional information</option>
          <option value={2}>Reviews (1)</option>
        </select>
      </div>
      <div className="md:border-2 flex flex-col w-full py-4 md:px-5">
        <div className={isActive === 0 ? "" : "hidden"}>
          <Description />
        </div>
        <div className={isActive === 1 ? "" : "hidden"}>
          <Additional />
        </div>
        <div className={isActive === 2 ? "" : "hidden"}>
          <Review />
        </div>
      </div>
    </div>
  );
};

export default TabsInfo;
