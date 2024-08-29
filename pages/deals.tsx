import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Hero from "@modules/Package/Hero";
import Banner from "@components/UI/Banner/Banner";
import Package from "@modules/Package/Package";

const Deals: NextPage = () => {
  return (
    <>
      <Head>
        <title>Package Deals</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center">
        <Hero />
        <Banner title="Home / Package Deals" />
        <Package />
      </main>
    </>
  );
};

export default Deals;
