import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import Banner from "@components/UI/Banner/Banner";
import AccountForm from "@modules/Account/AccountForm";

const Account: NextPage = () => {
  return (
    <>
      <Head>
        <title>My Account</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center">
        <Banner title="Home > My Account" /> 
        <AccountForm />
      </main>
    </>
  );
};

export default Account;
