import type { NextPage } from "next";
import Head from "next/head";
import BrandCarousel from "@modules/Home/BrandCarousel";
import ContactUs from "@modules/Home/ContactUs";
import RangeofProducts from "@modules/Home/RangeofProducts";
import TopRatedProducts from "@modules/Home/TopRatedProducts";
import VideoCourses from "@modules/Home/VideoCourses";
import CompanyService from "@components/Layout/Footer/CompanyService";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center">
        <BrandCarousel />
        <div className="flex w-full justify-start sm:justify-center bg-blue-700 p-5">
          <CompanyService />
        </div>
        <VideoCourses />
        <RangeofProducts />
        <TopRatedProducts />
        <ContactUs />
      </main>
    </div>
  );
};

export default Home;
