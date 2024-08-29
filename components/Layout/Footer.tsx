import React from 'react';
import Copyright from './Footer/Copyright';
import CompanyService from '@components/Layout/Footer/CompanyService';
import CompanySocial from './Footer/CompanySocial';
import FooterLinkSection from '@components/Layout/Footer/FooterLinkSection';
import { NavLink } from '@components/Layout/index';
import DeliveryDetail from './Footer/DeliveryDetail';
import Subscribe from './Footer/Subscribe';

const Footer = () => {
  const footerQuickLinks: NavLink[] = [
    {
      link: '/',
      text: 'Home',
    },
    {
      link: '/products',
      text: 'Products',
    },
    {
      link: '/deals',
      text: 'Package Deals',
    },
    {
      link: '/articles',
      text: 'Articles',
    },
    {
      link: '/contact',
      text: 'Contact us',
    },
  ];
  const footerServiceLinks: NavLink[] = [
    {
      link: '/help',
      text: 'Help Desk',
    },
    {
      link: '/refund',
      text: 'Returns and Refunds',
    },
    {
      link: '/contact',
      text: 'Contact us / Trading Hours',
    },
    {
      link: '/articles',
      text: 'Articles',
    },
  ];
  return (
    <footer className="flex flex-col">
      <div className="flex flex-col justify-center items-center w-full p-2.5 sm:p-5 bg-blue-700 text-white">
        <div className="w-full max-w-8xl py-2 sm:py-5 lg:py-10 border-trans-white border-b">
          <CompanyService />
        </div>
        <div className="flex w-full max-w-8xl sm:py-5 lg:py-10">
          <CompanySocial />
          <div className="flex flex-col w-full sm:flex-row">
            <FooterLinkSection title="Quick Links" links={footerQuickLinks} />
            <FooterLinkSection
              title="Customer Service"
              links={footerServiceLinks}
            />
            <DeliveryDetail />
            <Subscribe />
          </div>
        </div>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
