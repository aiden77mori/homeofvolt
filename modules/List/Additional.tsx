import React from "react";

const Additional = () => {
  return (
    <div className="py-4">
      <div className="border-2">
        <div className="border-b bg-white flex items-center">
          <span className="md:w-2/12 w-6/12 border-r-2 p-3">Weight</span>
          <span className="p-3">30 Kg</span>
        </div>
        <div className="bg-cGray flex items-center">
          <span className="md:w-2/12 w-6/12 border-r-2 p-3">Dimensions</span>
          <span className="p-3">31 x 18 x 23 cm</span>
        </div>
      </div>
    </div>
  );
};

export default Additional;
