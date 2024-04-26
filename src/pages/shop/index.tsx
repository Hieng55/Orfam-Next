import React from "react";
import { ToastContainer } from "react-toastify";
import Head from "next/head";

import CardList from "@/components/features/shop/cardList";
import FilterProduct from "@/components/features/shop/filter";
import PublicLayout from "@/components/layouts/publicLayout";

const Shop = () => {
  return (
    <>
      <Head>
        <title>Shop - List of products</title>
        <meta
          property="og:description"
          content="Explore our store to find the freshest and most diverse vegetable products. We are committed to providing the best quality for your dining table!"
        />
      </Head>

      <div className="shop mt-14 py-20 px-10 flex gap-5 relative xl:px-5 lg:block">
        <ToastContainer />
        <FilterProduct />
        <CardList />
      </div>
    </>
  );
};

Shop.getLayout = function getLayout(page: React.ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default Shop;
