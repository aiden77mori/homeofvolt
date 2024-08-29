import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export interface NavLink {
  text: string;
  link: string;
  children?: NavLink[];
}

const Layout = (props: LayoutProps) => {
  const navLinks: NavLink[] = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "Products",
      link: "/products",
      children: [
        {
          text: "Thumper",
          link: "/products",
          children: [
            {
              text: "Thumper Lithium Battery Packs",
              link: "#",
            },
            {
              text: "Thumper Elite",
              link: "#",
            },
            {
              text: "Thumper Outback DC-DC",
              link: "#",
            },
            {
              text: "Thumper Standard",
              link: "#",
            },
            {
              text: "Thumper Redback",
              link: "#",
            },
            {
              text: "Thumper Redback Extreme",
              link: "#",
            },
            {
              text: "Thumper Drop In Cell Replacement",
              link: "#",
            },
            {
              text: "Thumper Charge Kit",
              link: "#",
            },
          ],
        },
        {
          text: "Batteries",
          link: "/products/batteries",
          children: [
            {
              text: "Thumper Lithium Battery Packs",
              link: "#",
            },
            {
              text: "Thumper Elite",
              link: "#",
            },
            {
              text: "Thumper Outback DC-DC",
              link: "#",
            },
            {
              text: "Thumper Standard",
              link: "#",
            },
            {
              text: "Thumper Redback",
              link: "#",
            },
            {
              text: "Thumper Redback Extreme",
              link: "#",
            },
            {
              text: "Thumper Drop In Cell Replacement",
              link: "#",
            },
            {
              text: "Thumper Charge Kit",
              link: "#",
            },
          ],
        },
        {
          text: "Battery Boxes",
          link: "/products/batteries",
          children: [
            {
              text: "Thumper Lithium Battery Packs",
              link: "#",
            },
            {
              text: "Thumper Elite",
              link: "#",
            },
            {
              text: "Thumper Outback DC-DC",
              link: "#",
            },
            {
              text: "Thumper Standard",
              link: "#",
            },
            {
              text: "Thumper Redback",
              link: "#",
            },
            {
              text: "Thumper Redback Extreme",
              link: "#",
            },
            {
              text: "Thumper Drop In Cell Replacement",
              link: "#",
            },
            {
              text: "Thumper Charge Kit",
              link: "#",
            },
          ],
        },
        {
          text: "Auxilary Battery Systems",
          link: "/products/batteries",
          children: [
            {
              text: "Thumper Lithium Battery Packs",
              link: "#",
            },
            {
              text: "Thumper Elite",
              link: "#",
            },
            {
              text: "Thumper Outback DC-DC",
              link: "#",
            },
            {
              text: "Thumper Standard",
              link: "#",
            },
            {
              text: "Thumper Redback",
              link: "#",
            },
            {
              text: "Thumper Redback Extreme",
              link: "#",
            },
            {
              text: "Thumper Drop In Cell Replacement",
              link: "#",
            },
            {
              text: "Thumper Charge Kit",
              link: "#",
            },
          ],
        },
        {
          text: "Battery Chargers",
          link: "/products/batteries",
          children: [
            {
              text: "Thumper Lithium Battery Packs",
              link: "#",
            },
            {
              text: "Thumper Elite",
              link: "#",
            },
            {
              text: "Thumper Outback DC-DC",
              link: "#",
            },
            {
              text: "Thumper Standard",
              link: "#",
            },
            {
              text: "Thumper Redback",
              link: "#",
            },
            {
              text: "Thumper Redback Extreme",
              link: "#",
            },
            {
              text: "Thumper Drop In Cell Replacement",
              link: "#",
            },
            {
              text: "Thumper Charge Kit",
              link: "#",
            },
          ],
        },
        {
          text: "DC- DC Battery Chargers",
          link: "/products/batteries",
          children: [
            {
              text: "Thumper Lithium Battery Packs",
              link: "#",
            },
            {
              text: "Thumper Elite",
              link: "#",
            },
            {
              text: "Thumper Outback DC-DC",
              link: "#",
            },
            {
              text: "Thumper Standard",
              link: "#",
            },
            {
              text: "Thumper Redback",
              link: "#",
            },
            {
              text: "Thumper Redback Extreme",
              link: "#",
            },
            {
              text: "Thumper Drop In Cell Replacement",
              link: "#",
            },
            {
              text: "Thumper Charge Kit",
              link: "#",
            },
          ],
        },
        {
          text: "Generators",
          link: "/products/batteries",
          children: [
            {
              text: "Thumper Lithium Battery Packs",
              link: "#",
            },
            {
              text: "Thumper Elite",
              link: "#",
            },
            {
              text: "Thumper Outback DC-DC",
              link: "#",
            },
            {
              text: "Thumper Standard",
              link: "#",
            },
            {
              text: "Thumper Redback",
              link: "#",
            },
            {
              text: "Thumper Redback Extreme",
              link: "#",
            },
            {
              text: "Thumper Drop In Cell Replacement",
              link: "#",
            },
            {
              text: "Thumper Charge Kit",
              link: "#",
            },
          ],
        },
        {
          text: "Volt / Amp Meters and Gauges",
          link: "/products/batteries",
          children: [
            {
              text: "Thumper Lithium Battery Packs",
              link: "#",
            },
            {
              text: "Thumper Elite",
              link: "#",
            },
            {
              text: "Thumper Outback DC-DC",
              link: "#",
            },
            {
              text: "Thumper Standard",
              link: "#",
            },
            {
              text: "Thumper Redback",
              link: "#",
            },
            {
              text: "Thumper Redback Extreme",
              link: "#",
            },
            {
              text: "Thumper Drop In Cell Replacement",
              link: "#",
            },
            {
              text: "Thumper Charge Kit",
              link: "#",
            },
          ],
        },
        {
          text: "Inverters",
          link: "/products/batteries",
          children: [
            {
              text: "Thumper Lithium Battery Packs",
              link: "#",
            },
            {
              text: "Thumper Elite",
              link: "#",
            },
            {
              text: "Thumper Outback DC-DC",
              link: "#",
            },
            {
              text: "Thumper Standard",
              link: "#",
            },
            {
              text: "Thumper Redback",
              link: "#",
            },
            {
              text: "Thumper Redback Extreme",
              link: "#",
            },
            {
              text: "Thumper Drop In Cell Replacement",
              link: "#",
            },
            {
              text: "Thumper Charge Kit",
              link: "#",
            },
          ],
        },
        {
          text: "Satellite Tv Systems",
          link: "/products/batteries",
          children: [
            {
              text: "Thumper Lithium Battery Packs",
              link: "#",
            },
            {
              text: "Thumper Elite",
              link: "#",
            },
            {
              text: "Thumper Outback DC-DC",
              link: "#",
            },
            {
              text: "Thumper Standard",
              link: "#",
            },
            {
              text: "Thumper Redback",
              link: "#",
            },
            {
              text: "Thumper Redback Extreme",
              link: "#",
            },
            {
              text: "Thumper Drop In Cell Replacement",
              link: "#",
            },
            {
              text: "Thumper Charge Kit",
              link: "#",
            },
          ],
        },
        {
          text: "Fridges",
          link: "/products/batteries",
          children: [
            {
              text: "Thumper Lithium Battery Packs",
              link: "#",
            },
            {
              text: "Thumper Elite",
              link: "#",
            },
            {
              text: "Thumper Outback DC-DC",
              link: "#",
            },
            {
              text: "Thumper Standard",
              link: "#",
            },
            {
              text: "Thumper Redback",
              link: "#",
            },
            {
              text: "Thumper Redback Extreme",
              link: "#",
            },
            {
              text: "Thumper Drop In Cell Replacement",
              link: "#",
            },
            {
              text: "Thumper Charge Kit",
              link: "#",
            },
          ],
        },
        {
          text: "Tv Entertainment",
          link: "/products/batteries",
          children: [
            {
              text: "Thumper Lithium Battery Packs",
              link: "#",
            },
            {
              text: "Thumper Elite",
              link: "#",
            },
            {
              text: "Thumper Outback DC-DC",
              link: "#",
            },
            {
              text: "Thumper Standard",
              link: "#",
            },
            {
              text: "Thumper Redback",
              link: "#",
            },
            {
              text: "Thumper Redback Extreme",
              link: "#",
            },
            {
              text: "Thumper Drop In Cell Replacement",
              link: "#",
            },
            {
              text: "Thumper Charge Kit",
              link: "#",
            },
          ],
        },
        {
          text: "Electric Brake Controller",
          link: "/products/batteries",
          children: [
            {
              text: "Thumper Lithium Battery Packs",
              link: "#",
            },
            {
              text: "Thumper Elite",
              link: "#",
            },
            {
              text: "Thumper Outback DC-DC",
              link: "#",
            },
            {
              text: "Thumper Standard",
              link: "#",
            },
            {
              text: "Thumper Redback",
              link: "#",
            },
            {
              text: "Thumper Redback Extreme",
              link: "#",
            },
            {
              text: "Thumper Drop In Cell Replacement",
              link: "#",
            },
            {
              text: "Thumper Charge Kit",
              link: "#",
            },
          ],
        },
        {
          text: "Lights",
          link: "/products/batteries",
          children: [
            {
              text: "Thumper Lithium Battery Packs",
              link: "#",
            },
            {
              text: "Thumper Elite",
              link: "#",
            },
            {
              text: "Thumper Outback DC-DC",
              link: "#",
            },
            {
              text: "Thumper Standard",
              link: "#",
            },
            {
              text: "Thumper Redback",
              link: "#",
            },
            {
              text: "Thumper Redback Extreme",
              link: "#",
            },
            {
              text: "Thumper Drop In Cell Replacement",
              link: "#",
            },
            {
              text: "Thumper Charge Kit",
              link: "#",
            },
          ],
        },
        {
          text: "Uhf Communication",
          link: "/products/batteries",
          children: [
            {
              text: "Thumper Lithium Battery Packs",
              link: "#",
            },
            {
              text: "Thumper Elite",
              link: "#",
            },
            {
              text: "Thumper Outback DC-DC",
              link: "#",
            },
            {
              text: "Thumper Standard",
              link: "#",
            },
            {
              text: "Thumper Redback",
              link: "#",
            },
            {
              text: "Thumper Redback Extreme",
              link: "#",
            },
            {
              text: "Thumper Drop In Cell Replacement",
              link: "#",
            },
            {
              text: "Thumper Charge Kit",
              link: "#",
            },
          ],
        },
        {
          text: "Dual Battery Tray Kits",
          link: "/products/batteries",
          children: [
            {
              text: "Thumper Lithium Battery Packs",
              link: "#",
            },
            {
              text: "Thumper Elite",
              link: "#",
            },
            {
              text: "Thumper Outback DC-DC",
              link: "#",
            },
            {
              text: "Thumper Standard",
              link: "#",
            },
            {
              text: "Thumper Redback",
              link: "#",
            },
            {
              text: "Thumper Redback Extreme",
              link: "#",
            },
            {
              text: "Thumper Drop In Cell Replacement",
              link: "#",
            },
            {
              text: "Thumper Charge Kit",
              link: "#",
            },
          ],
        },
        {
          text: "Solar Panels",
          link: "/products/batteries",
          children: [
            {
              text: "Thumper Lithium Battery Packs",
              link: "#",
            },
            {
              text: "Thumper Elite",
              link: "#",
            },
            {
              text: "Thumper Outback DC-DC",
              link: "#",
            },
            {
              text: "Thumper Standard",
              link: "#",
            },
            {
              text: "Thumper Redback",
              link: "#",
            },
            {
              text: "Thumper Redback Extreme",
              link: "#",
            },
            {
              text: "Thumper Drop In Cell Replacement",
              link: "#",
            },
            {
              text: "Thumper Charge Kit",
              link: "#",
            },
          ],
        },
        {
          text: "Cables & Adaptors",
          link: "/products/batteries",
          children: [
            {
              text: "Thumper Lithium Battery Packs",
              link: "#",
            },
            {
              text: "Thumper Elite",
              link: "#",
            },
            {
              text: "Thumper Outback DC-DC",
              link: "#",
            },
            {
              text: "Thumper Standard",
              link: "#",
            },
            {
              text: "Thumper Redback",
              link: "#",
            },
            {
              text: "Thumper Redback Extreme",
              link: "#",
            },
            {
              text: "Thumper Drop In Cell Replacement",
              link: "#",
            },
            {
              text: "Thumper Charge Kit",
              link: "#",
            },
          ],
        },
      ],
    },
    {
      text: "Package Deals",
      link: "/deals",
    },
    {
      text: "Articles",
      link: "/articles",
    },
    {
      text: "Contact Us",
      link: "/contact",
    },
  ];
  return (
    <div className="min-h-screen flex flex-col">
      <Header navLinks={navLinks} />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
