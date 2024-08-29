import Image from 'next/image';
import React from 'react';

const PhoneNumber = () => {
  const phoneNumber = '0422 698 393';
  return (
    <div className="flex">
      <Image
        src="/assets/icons/Phone-Outline.svg"
        alt="Phone"
        width={20}
        height={20}
      />
      <span className="ml-3">{phoneNumber}</span>
    </div>
  );
};

export default PhoneNumber;
