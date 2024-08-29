import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Banner from "@components/UI/Banner/Banner";
import Cart from "@modules/List/Cart";
import TopRatedProducts from "@modules/Home/TopRatedProducts";
import TabsInfo from "@modules/List/TabsInfo";

const List: NextPage = () => {
  return (
    <>
      <Head>
        <title>Products List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center">
        <Banner title="Home > Batteries > Absorbed Glass Mat > Thumper Redback > 105AH Thumper Redback Extreme" />
        <Cart /> 
        <TabsInfo />
        <TopRatedProducts />
      </main>
    </>
  );
};

export default List;
