import React from "react";
import Head from "next/head";

import AboutIntroduction from "@/components/features/about/aboutContainer";
import AboutInfo from "@/components/features/about/aboutInfo";
import AboutVideo from "@/components/features/about/aboutVideo";
import BannerAbout from "@/components/features/about/bannerAbout";
import PublicLayout from "@/components/layouts/publicLayout";

const About = () => {
  return (
    <>
      <Head>
        <title>AboutUs - Learn about us.</title>
        <meta
          property="og:description"
          content="Learn about us and our commitment to quality and service. We accompany you in bringing the freshest vegetable products from your garden to your dining table."
        />
        <meta property="og:image" content="https://hieng55.github.io/OpenGraphImage/aboutUs.png" />
        <meta property="og:url" content="https://orfam.vercel.app/about" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="about mt-8 pb-16">
        <BannerAbout />
        <AboutIntroduction />
        <AboutInfo />
        <AboutVideo />
      </div>
    </>
  );
};

About.getLayout = function getLayout(page: React.ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default About;
