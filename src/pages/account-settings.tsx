import Head from "next/head";
import Layout from "../components/layout";
import Page_header from "../components/layout/page_header";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

const Settings = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Head>
        <title>WeTube</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout></Layout>
    </>
  );
};

export default Settings;
