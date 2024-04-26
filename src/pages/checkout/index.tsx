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
        <meta name="facebook:image:type" content="image/png" />
        <meta name="instagram:image:type" content="image/png" />
        <meta name="linked:image:type" content="image/png" />
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
