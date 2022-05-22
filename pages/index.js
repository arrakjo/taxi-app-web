import Head from "next/head";
import Image from "next/image";
import Footer from "../components/HomeScreen/Footer";
import Landing from "../components/HomeScreen/Landing";
import Navbar from "../components/HomeScreen/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ridi | Fast rides at the right price</title>
        <meta name="description" content="Fast rides at the right price" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Landing />
      <Footer />
    </div>
  );
}
