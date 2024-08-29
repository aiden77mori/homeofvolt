import React from 'react';

const Welcome = () => {
  return (
    <span className="hidden xl:flex">
      &quot;Purchases under $100 will incur a $12 shipping fee -{' '}
      <span className="font-bold">Thank You</span>&quot;
    </span>
  );
};

export default Welcome;
