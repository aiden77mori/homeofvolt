import Image from "next/image";
import React, { useState } from "react";
import { NavLink } from "@components/Layout";
import Logo from "./Logo";
import Menubar from "./Menubar";
import ShoppingCart from "./ShoppingCart";
import MobileMenuBar from "./Menubar/MobileMenubar";
import MobileProfile from "./MobileProfile";
import MobileMenuDrawer from "./MobileMenuDrawer";

interface NavbarProps {
  navLinks: NavLink[];
}

const Navbar = (props: NavbarProps) => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  return (
    <div className="flex items-center justify-center h-22">
      <div className="flex items-center justify-between w-full max-w-8xl px-5 sm:px-8 md:px-10">
        <MobileMenuDrawer navLinks={props.navLinks} />
        <Logo isWhite={false} />
        <Menubar navLinks={props.navLinks} />
        <div className="flex sm:divide-x">
          <div className="hidden sm:flex items-center justify-center mr-4">
            <Image
              src="/assets/icons/Search.svg"
              width={18}
              height={18}
              alt="Search Icon"
            ></Image>
          </div>
          <ShoppingCart />
          <MobileProfile />
          {isMobileMenu && <MobileMenuBar />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
