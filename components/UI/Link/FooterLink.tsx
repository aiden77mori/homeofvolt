import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NavLink } from '@components/Layout';

interface FooterLinkProps {
  link: NavLink;
}

const FooterLink: React.FC<FooterLinkProps> = ({ link }) => {
  return (
    <span className="flex gap-2.5">
      <Image
        src="/assets/icons/ArrowRight.svg"
        alt="Arrow Right"
        width={5}
        height={10}
      />
      <Link href={link.link}>{link.text}</Link>
    </span>
  );
};

export default FooterLink;
