import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";
import { Sidebar } from "../components/layout/Sidebar";
import { CenterContent } from "../components/layout/CenterContent";
import { RightMenu } from "../components/layout/RightMenu";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
   <>
      <Head>
        <title>CV Jaime A. Herrer R.</title>
        <meta property="og:title" content="CV Jaime A. Herrer R." key="title" />
      </Head>
      <div className="flex gap-5 bg-gray-300 dark:bg-inherit">
        <Sidebar />
        <CenterContent />
        <RightMenu />
      </div>
      </>
  );
};
export default Home;
