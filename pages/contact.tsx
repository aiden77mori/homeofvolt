import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Hero from "@modules/Contact/Hero";
import Banner from "@components/UI/Banner/Banner";
import ContactBox from "@modules/Contact/ContactBox";
import ContactForm from "@modules/Contact/ContactForm";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center">
        <Hero /> 
        <Banner title="Home / Contact Us" />
        <ContactBox />
        <ContactForm />
      </main>
    </>
  );
};

export default Contact;
