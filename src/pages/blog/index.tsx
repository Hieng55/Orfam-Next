import React from "react";
import Head from "next/head";

import BlogContainer from "@/components/features/blog/blogContainer";
import PublicLayout from "@/components/layouts/publicLayout";
import { ToastContainer } from "react-toastify";

const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog - Ways To Choose Fruits & Seafoods Good For Pregnancy.</title>
        <meta
          property="og:description"
          content="Discover the latest and useful articles about fresh vegetables, health and nutrition on our blog. Share knowledge and experience better health!"
        />
        <meta property="og:image" content="https://hieng55.github.io/OpenGraphImage/blog.png" />
        <meta property="og:url" content="https://orfam.vercel.app/blog" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="blog mt-20">
        <ToastContainer />
        <BlogContainer />
      </div>
    </>
  );
};
Blog.getLayout = function getLayout(page: React.ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};
export default Blog;
