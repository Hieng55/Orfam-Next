import React from "react";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";

import { useProducts } from "@/hooks/useProducts";

import ProductDetail from "@/components/features/cart/productDetail";
import Layout from "@/components/layouts/publicLayout";
import Head from "next/head";
import { ApiResponseProductBrandAndCategory } from "@/services/type";
import Loading from "@/components/features/loading";

const CartDetail = () => {
  const router = useRouter();
  const { products, isLoading } = useProducts<ApiResponseProductBrandAndCategory[]>({ _expand: ["categories", "brands"], id: router.query.id });
  return (
    <>
      <Head>
        <title>{products && products[0].title}</title>
        <meta
          property="og:description"
          content="Explore our store to find the freshest and most diverse vegetable products. We are committed to providing the best quality for your dining table!"
        />
        <meta property="og:image" content="	https://orfarm-next-js.vercel.app/_next/image?url=…t%2Fstatic%2Fmedia%2Flogo.fdc3a4fd.png&w=128&q=75" />
        <meta property="og:url" content="https://orfam.vercel.app/product" />
        <meta property="og:type" content="website" />
      </Head>

      {<Loading isLoading={isLoading} />}
      <div className="cart-detail mt-24 pt-10 px-4 relative">
        <ToastContainer />
        <ProductDetail />
      </div>
    </>
  );
};

CartDetail.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default CartDetail;
