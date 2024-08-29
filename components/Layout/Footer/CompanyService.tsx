import React from 'react';
import IconWithTitle, { IconWithTitleProps } from '../../Shared/IconWithTitle';

const CompanyService: React.FC = () => {
  const companyServices = [
    {
      iconSrc: 'BuyNowService',
      title: 'Buy Now Pay Later',
    },
    {
      iconSrc: 'DeliveryService',
      title: 'Free Delivery',
    },
    {
      iconSrc: 'SavingService',
      title: 'Big Saving',
    },
    {
      iconSrc: 'FestivalService',
      title: 'Festival Offers',
    },
  ];
  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:justify-between w-full max-w-8xl">
      {companyServices.map((service) => (
        <IconWithTitle
          key={service.title}
          title={service.title}
          iconSrc={`/assets/icons/${service.iconSrc}.svg`}
        />
      ))}
    </div>
  );
};

export default CompanyService;
