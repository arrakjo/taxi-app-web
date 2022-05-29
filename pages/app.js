import Head from "next/head";
import WebApp from "../components/AppScreen/App";
import Layout from "../components/AppScreen/Layout";

function AppScreen() {
  return (
    <div>
      <Head>
        <title>Ridi Desktop</title>
        <meta name="description" content="Fast rides at the right price" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <WebApp />
      </Layout>
    </div>
  );
}

export default AppScreen;
