import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";
import { Sidebar } from "../components/layout/Sidebar";
import { CenterContent } from "../components/layout/CenterContent";
import { RightMenu } from "../components/layout/RightMenu";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <div>
      <Head>
        <title>CV Jaime A. Herrer R.</title>
        <meta property="og:title" content="CV Jaime A. Herrer R." key="title" />
      </Head>
      <div className="min-h-screen flex debug">
        <Sidebar />
        <CenterContent />
        <RightMenu />
      </div>
    </div>
  );
};
export default Home;
