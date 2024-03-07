import Layout from "@/components/layouts/privateLayout";
import { Button } from "@/shared/button";
import { Input } from "@/shared/input";

import type { ReactElement } from "react";

const Home = () => {
  return (
    <>
      <Input />
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
