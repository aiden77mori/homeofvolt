import Image from "next/image";
import React from "react";

interface LogoProps {
  isWhite: boolean;
}

const Logo = (props: LogoProps) => {
  const logoSrc = props.isWhite ? "/logo-white.svg" : "/logo.svg";
  return (
    <div className="flex justify-center">
      <Image src={logoSrc} alt="Home of 12 Volt logo" width={160} height={60} />
    </div>
  );
};

export default Logo;
