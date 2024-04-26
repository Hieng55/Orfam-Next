import React from "react";
import Head from "next/head";
import { ToastContainer } from "react-toastify";

import type { ReactElement } from "react";

import PublicLayout from "@/components/layouts/publicLayout";
import Banner from "@/components/features/home/banner";
import Introduce from "@/components/features/home/introduce";
import TabsProducts from "@/components/features/home/tabsProducts";

import AboutUs from "@/components/features/home/about";
import SpecialProducts from "@/components/features/home/sliderProducts";
import BlogPost from "@/components/features/home/blogPost";

import homeGraph from "@/image/graph/homeGraph.png";

const Home = () => {
  return (
    <>
      <Head>
        <title>Orfarm - Grocery & Food Store E-commerce.</title>
        <meta
          property="og:description"
          content="Home page specializing in selling vegetables - Shop for fresh, quality vegetables from the farm to your table. Explore now!"
        />
        <meta name="facebook:image:type" content={`${homeGraph}`} />
        <meta name="instagram:image:type" content={`${homeGraph}`} />
        <meta name="linked:image:type" content={`${homeGraph}`} />
        <meta name="og:image" content={`${homeGraph}`} />
      </Head>
      <ToastContainer />
      <Banner />
      <Introduce />
      <TabsProducts />
      <AboutUs />
      <SpecialProducts />
      <BlogPost />
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default Home;
