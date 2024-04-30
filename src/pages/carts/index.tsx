import React from "react";
import { ToastContainer } from "react-toastify";

import ProductCartList from "@/components/features/cart/productCartList";
import Layout from "@/components/layouts/publicLayout";
import Head from "next/head";

const CartListProducts = () => {
  return (
    <>
      <Head>
        <title>Carts - List of products you have selected.</title>
        <meta
          property="og:description"
          content="Check out your cart and proceed to checkout easily on our website. Choose from a variety of fresh vegetables and complete your shopping at your convenience"
        />
        <meta property="og:image" content="	https://orfarm-next-js.vercel.app/_next/image?url=…t%2Fstatic%2Fmedia%2Flogo.fdc3a4fd.png&w=128&q=75" />
        <meta property="og:url" content="https://orfam.vercel.app/carts" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="cart-list-products">
        <ToastContainer />
        <ProductCartList />
      </div>
    </>
  );
};

CartListProducts.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default CartListProducts;
