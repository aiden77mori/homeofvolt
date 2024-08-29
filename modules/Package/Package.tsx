import React from "react";
import ProductCard from "@components/UI/Card/ProductCard";

const Package = () => {
  const topProducts = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
  ];

  return (
    <>
      <div className="max-w-8xl w-full float-left px-5 md:mt-20 mt-4">
        <div className="flex justify-between md:items-center px-5">
          <h1 className="md:text-4xl text-2xl w-32 md:w-auto">Package Deals</h1>
          <select
            name=""
            id=""
            className="md:w-60 w-36 border-2 border-gray-300 md:h-12 h-9 px-2"
          >
            <option value="">Default Sorting</option>
          </select>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-between mt-8">
          {topProducts.map((product, index) => (
            <ProductCard
              key={`top-product-${index}`}
              productImgSrc="/assets/imgs/products/ACE Switch Panel.png"
              productName="Ace Nxt-G Triple Flush Plate Volt and 2 X Cig"
              productRating={5}
              productPrevPrice={59.95}
              productPrice={39}
              className="mx-4 w-[22%] mb-8"
              showDetail={true}
              showBanner={true}
              bannerTitle="Sale!"
            />
          ))}
        </div>
        <div className="flex justify-between items-center px-5 md:mb-24 mb-8">
          <p className="text-sm md:text-lg">Showing all 10 Results</p>
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
                <li className="page-item border-gray-300 border-2 mr-3 rounded-full">
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
    </>
  );
};

export default Package;
