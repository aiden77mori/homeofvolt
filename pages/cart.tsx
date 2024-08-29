import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Banner from "@components/UI/Banner/Banner";
import CartBox from "@modules/Cart/CartBox";
import CartTotal from "@modules/Cart/CartTotal";

const Cart: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center">
        <Banner title="Home > Cart" />
        <CartBox />
        <CartTotal /> 
      </main>
    </>
  );
};

export default Cart;
