import React from 'react';
import Image from 'next/image';

export interface IconWithTitleProps {
  iconSrc: string;
  title: string;
}

const IconWithTitle: React.FC<IconWithTitleProps> = (props) => {
  return (
    <span className="flex text-white items-center">
      <span className="flex-none flex items-center justify-center w-10 h-10 p-2.5 lg:w-15 lg:h-15 rounded-full bg-blue-500">
        <Image src={props.iconSrc} alt={props.title} width={32} height={32} />
      </span>
      <span className="ml-4 font-bold text-lg sm:text-md lg:text-xl">
        {props.title}
      </span>
    </span>
  );
};

export default IconWithTitle;
