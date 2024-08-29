import React from "react";
import Link from "next/link";
import { useState } from "react";
import { NavLink } from "@components/Layout";

interface MenuBarProps {
  navLinks: NavLink[];
}

const MobileMenuDrawer = (props: MenuBarProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [showChild, setShowChild] = useState<boolean>(false);
  const [showSubChild, setShowSubChild] = useState<boolean>(false);
  const [curSubTitle, setCurSubTitle] = useState<string>("");

  function onHandleDrawer() {
    setOpen((open) => !open);
  }
  function onHandleArrow(childNav: any) {
    if (childNav?.length > 0) {
      setShowChild((showChild) => !showChild);
    } else {
      setOpen(false);
    }
  }
  function onHandleSubArrow(childNav: any, subTitle: string) {
    if (childNav?.length > 0) {
      setShowSubChild((showSubChild) => !showSubChild);
      setCurSubTitle(subTitle);
    }
  }

  return (
    <>
      <button className="flex sm:hidden" onClick={onHandleDrawer}>
        <svg
          width="25"
          height="17"
          viewBox="0 0 25 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 8.5H23.5"
            stroke="#222222"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 1H23.5"
            stroke="#222222"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 16H23.5"
            stroke="#222222"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 w-full top-20 p-5 bg-white text-black flex flex-col z-20">
          {props.navLinks.map((menu: any, idx: number) => (
            <>
              <div
                key={`mobileMenu_${idx}`}
                className="w-full flex flex-row items-start justify-between"
                onClick={() => onHandleArrow(menu.children)}
              >
                <Link href={menu.link}>
                  <span className="font-bold">{menu.text}</span>
                </Link>
                {menu?.children?.length > 0 && (
                  <span className="font-bold">&#62;</span>
                )}
              </div>
              {showChild &&
                menu.children?.map((submenu: any, subIdx: number) => (
                  <>
                    <div
                      key={`mobileSubmenu_${subIdx}`}
                      className="w-full flex flex-row items-start justify-start ml-2"
                      onClick={() =>
                        onHandleSubArrow(submenu.children, submenu.text)
                      }
                    >
                      {submenu.children?.length > 0 && (
                        <span className="font-bold mr-2">&#62;</span>
                      )}
                      <Link href={submenu.link}>
                        <span className="font-medium">{submenu.text}</span>
                      </Link>
                    </div>
                    {showSubChild &&
                      curSubTitle === submenu.text &&
                      submenu.children?.map(
                        (subSubmenu: any, subSubmenuIdx: number) => (
                          <div
                            key={`mobileSubSubmenu_${subSubmenuIdx}`}
                            className="w-full flex flex-row items-start justify-between ml-2"
                          >
                            <Link href={subSubmenu.link}>
                              <span className="font-medium">
                                {subSubmenu.text}
                              </span>
                            </Link>
                          </div>
                        )
                      )}
                  </>
                ))}
            </>
          ))}
        </div>
      )}
    </>
  );
};

export default MobileMenuDrawer;
