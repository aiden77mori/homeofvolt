import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ImageLinkProps {
  link: string;
  imageSrc: string;
  imageAlt: string;
  width: number;
  height: number;
}

const ImageLink: React.FC<ImageLinkProps> = (props) => {
  return (
    <Link href={props.link} passHref>
      <a className="flex items-center justify-center w-fit">
        <Image
          src={props.imageSrc}
          alt={props.imageAlt}
          width={props.width}
          height={props.height}
        />
      </a>
    </Link>
  );
};

export default ImageLink;
