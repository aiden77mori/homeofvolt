import React from "react";
import { useState } from "react";
import { NavLink } from "@components/Layout";
import Link from "next/link";

interface MenuBarProps {
  navLinks: NavLink[];
}

const MenuBar = (props: MenuBarProps) => {
  const [open, setOpen] = useState<boolean>(false);

  function handleSubmenu(link: string) {
    console.log(link);
    if (link === "/products") {
      setOpen((open) => !open);
    } else {
      setOpen(false);
    }
  }

  return (
    <div className="hidden md:flex">
      {props.navLinks.map((link, idx) => (
        <div key={`menu_${idx}`}>
          <span
            key={link.text}
            className="sm:mx-2 xl:mx-6 text-center hover:font-bold text-lg md:text-base lg:text-lg text-black hover:text-blue-500 focus:text-blue-500"
            onClick={() => handleSubmenu(link.link)}
          >
            <Link href={link.link}>{link.text}</Link>
          </span> 
          {open && link.children && (
            <div className="absolute top-28 left-1/2 transform -translate-x-1/2 shadow-lg w-11/12 py-9 px-7 bg-white text-black z-20">
              <div className="flex justify-between flex-wrap">
                {link.children?.map((subLink, index) => (
                  <div key={`submenu_${index}`} className="flex flex-col">
                    <span className="font-bold">{subLink.text}</span>
                    <div className="flex flex-col">
                      {subLink.children?.map((subSubLink, subIdx) => (
                        <div
                          key={`sub_submenu-${subIdx}`}
                          className="flex py-1 cursor-pointer"
                        >
                          <span className="mr-2">&#62;</span>
                          <Link href={subSubLink.link}>
                            {subSubLink.text}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MenuBar;
