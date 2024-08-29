import React from "react";
import Topbar from "./Header/Topbar";
import Navbar from "./Header/Navbar";
import { NavLink } from "@components/Layout/index";

interface HeaderProps {
  navLinks: NavLink[];
}

const Header = (props: HeaderProps) => {
  return (
    <div className="flex flex-col">
      <Topbar />
      <Navbar navLinks={props.navLinks} />
    </div>
  );
};

export default Header;
