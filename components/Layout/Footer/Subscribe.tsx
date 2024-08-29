import React from 'react';
import ImageButton from '@components/UI/Button/ImageButton';

const Subscribe: React.FC = () => {
  return (
    <div className="flex sm:hidden lg:flex flex-col py-5 sm:py-0 sm:pl-5 lg:pl-10 sm:border-b-0 sm:border-l border-dashed">
      <h3 className="mb-5 text-lg font-bold">Subscribe to Our Newslatter</h3>
      <div className="flex relative rounded bg-trans-white text-white p-4 mb-3">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            width="23"
            height="18"
            viewBox="0 0 23 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.65796 1H19.658C20.758 1 21.658 1.9 21.658 3V15C21.658 16.1 20.758 17 19.658 17H3.65796C2.55796 17 1.65796 16.1 1.65796 15V3C1.65796 1.9 2.55796 1 3.65796 1Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.658 3L11.658 10L1.65796 3"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <input
          type="text"
          name="email"
          id="email"
          className="bg-transparent placeholder-white focus:ring-0 border-gray-100 block w-full pl-8 sm:text-sm"
          placeholder="Your email here"
        />
        <button type="button" className="pl-4 border-l font-medium">
          Subscribe
        </button>
      </div>
      <div className="grid grid-cols-4 grid-rows-2 gap-2.5 md:gap-4">
        <ImageButton
          imgSrc="/assets/imgs/zip.png"
          width={82}
          height={35}
          className="col-span-2 bg-white rounded"
        />
        <ImageButton
          imgSrc="/assets/imgs/humm.png"
          width={134}
          height={38}
          className="col-span-2 bg-white rounded"
        />
        <ImageButton
          imgSrc="/assets/imgs/afterpay.png"
          width={109}
          height={27}
          className="col-span-2 col-start-2 sm:col-start-1 bg-[#B2FCE4] rounded"
        />
      </div>
    </div>
  );
};

export default Subscribe;
