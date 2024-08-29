import React from 'react';
import IconButton from './IconButton';

interface CarouselArrowProps {
  direction: 'left' | 'right';
  onClick?: () => void;
  className?: string;
}

const CarouselArrow: React.FC<CarouselArrowProps> = ({
  direction,
  onClick,
  className = '',
}) => {
  const leftArrow = (
    <svg
      width="9"
      height="16"
      viewBox="0 0 9 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 15L1 8L8 1"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  const rightArrow = (
    <svg
      width="9"
      height="16"
      viewBox="0 0 9 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 15L8 8L1 1"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  return (
    <IconButton className={className} onClick={onClick}>
      {direction === 'left' ? leftArrow : rightArrow}
    </IconButton>
  );
};

export default CarouselArrow;
