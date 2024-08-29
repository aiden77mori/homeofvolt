import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Hero from "@modules/Product/Hero";
import Banner from "@components/UI/Banner/Banner";
import Thumper from "@modules/Product/Thumper";

const Products: NextPage = () => {
  return (
    <>
      <Head>
        <title>Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center">
        <Hero />
        <Banner title="Home / Thumper" />
        <Thumper />
      </main>
    </>
  );
};

export default Products;
