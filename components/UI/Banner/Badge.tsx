import React from "react";

interface BadgeProps {
  title: string;
  number: string;
  imageChildren: React.ReactNode;
}

const Badge = ({ title, number, imageChildren }: BadgeProps) => {
  return (
    <div className="flex items-center justify-between md:mr-6 mr-3 w-32 mb-4">
      <div className="flex justify-center items-center bg-gray-100 w-12 h-12 rounded-full">
        {imageChildren}
      </div>
      <div className="flex flex-col ml-5">
        <p>{title}</p>
        <p>{number}</p>
      </div>
    </div>
  );
};

export default Badge;
