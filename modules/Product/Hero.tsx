import React from "react";

const Hero = () => {
  return (
    <div className="w-full bg-mobileProductHero md:bg-productHero h-contactMobileHeroHeight md:h-contactHeroHeight bg-cover bg-center">
      <div className="relative max-w-8xl flex m-auto px-10 h-full items-end md:items-center justify-center md:justify-start md:pb-0 pb-8">
        <p className="text-3xl text-center md:text-left md:text-5xl text-white w-96">
          Thumper Powerful Battery
        </p>
      </div>
    </div>
  );
};

export default Hero;
