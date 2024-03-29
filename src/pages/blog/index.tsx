import BlogContainer from "@/components/features/blog/blogContainer";
import PublicLayout from "@/components/layouts/publicLayout";
import React from "react";

const Blog = () => {
  return (
    <div className="blog mt-20">
      <BlogContainer />
    </div>
  );
};
Blog.getLayout = function getLayout(page: React.ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};
export default Blog;
