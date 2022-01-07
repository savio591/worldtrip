import type { NextPage } from "next";
import Head from "next/head";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Viajakarai</title>
        <meta name="description" content="Generated by savio rei delas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Banner />
      </main>
    </div>
  );
};

export default Home;
