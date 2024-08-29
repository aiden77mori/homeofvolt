import Image from 'next/image';
import React from 'react';

interface ImageButtonProps {
  imgSrc: string;
  width: number;
  height: number;
  className: string;
}

const ImageButton: React.FC<ImageButtonProps> = (props) => {
  return (
    <button className={`flex items-center justify-center ${props.className}`}>
      <Image
        src={props.imgSrc}
        alt="ImageButton"
        width={props.width}
        height={props.height}
      />
    </button>
  );
};

export default ImageButton;
