/* eslint-disable @next/next/no-document-import-in-page */
import type { NextPage } from "next";
import Head from "next/head";
import CreditCard from "../components/CreditCard/CreditCard";
import Stats from "../components/Stats/Stats";
const Home: NextPage = () => {
  return (
    <div className="mx-auto flex justify-between flex-col align-center dark:bg-black">
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Admin dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex">
        <div className="flex flex-col gap-6">
          <section className="flex gap-6">
            <h1 className="font-bold text-4xl m-0 p-0">Overview</h1>
            <input type="date" className="p-1 rounded-md" />
          </section>
          <section className="flex gap-6 flex-wrap items-center justify-center md:justify-start">
            <CreditCard
              coin="BTC"
              color="red-500"
              money={235.54}
              type="master"
            />
            <CreditCard
              coin="ETH"
              color="purple-500"
              money={124.941}
              type="visa"
            />
            <CreditCard
              coin="ETH"
              color="green-500"
              money={784.941}
              type="visa"
            />
          </section>
          <section className="flex items-center justify-between">
            <Stats title="Income" money={20.569} per={3.6} compare={13369.85} />
            <Stats title="Expenses" money={14.256} per={-10} compare={20.456} />
            <Stats title="Cashback" money={49.236} per={9.56} compare={60.23} />
            <Stats
              title="Investments"
              money={903.25}
              per={113.6}
              compare={80.265}
            />
          </section>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
