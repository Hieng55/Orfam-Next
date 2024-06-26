import React from "react";
import PrivateLayout from "@/components/layouts/privateLayout";
import CheckoutInfo from "@/components/features/checkout";
import Head from "next/head";

const Checkout = () => {
  return (
    <>
      <Head>
        <title>Checkout</title>
        <meta
          property="og:description"
          content="Complete the purchase and payment process easily on our website. Guaranteed safety and convenience. Shopping for fresh vegetables has never been easier!"
        />
        <meta property="og:image" content="	https://orfarm-next-js.vercel.app/_next/image?url=…t%2Fstatic%2Fmedia%2Flogo.fdc3a4fd.png&w=128&q=75" />
        <meta property="og:url" content="https://orfam.vercel.app/checkout" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="Checkout">
        <CheckoutInfo />
      </div>
    </>
  );
};

Checkout.getLayout = function getLayout(page: React.ReactElement) {
  return <PrivateLayout>{page}</PrivateLayout>;
};

export default Checkout;
