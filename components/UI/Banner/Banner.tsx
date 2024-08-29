import React from "react";

interface BannerProps {
  title: string;
}

const Banner = ({ title }: BannerProps) => {
  return (
    <div className="hidden md:block w-full items-center bg-gray-300">
      <div className="max-w-8xl w-full px-5 m-auto">
        <p className="px-5 pt-3 pb-3">{title}</p>
      </div>
    </div>
  );
};

export default Banner;
