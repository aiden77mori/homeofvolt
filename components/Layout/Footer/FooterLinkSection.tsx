import { NavLink } from '@components/Layout';
import React from 'react';
import FooterLink from '../../UI/Link/FooterLink';

interface FooterLinkSectionProps {
  title: string;
  links: NavLink[];
}

const FooterLinkSection: React.FC<FooterLinkSectionProps> = (props) => {
  return (
    <div className="flex flex-col py-5 sm:px-10 sm:py-0 border-b sm:border-b-0 sm:border-l border-dashed">
      <h3 className="mb-5 text-lg font-bold">{props.title}</h3>
      <div className="flex flex-col gap-4">
        {props.links.map((link) => (
          <FooterLink key={link.text} link={link} />
        ))}
      </div>
    </div>
  );
};

export default FooterLinkSection;
