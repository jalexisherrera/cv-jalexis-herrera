import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";
import { Sidebar } from "../components/layout/Sidebar";
import { CenterContent } from "../components/layout/CenterContent";
import { RightMenu } from "../components/layout/RightMenu";
import { BackgroundVideo } from "@/components/BgVideo";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <>
      <Head>
        <title>CV Jaime A. Herrer R.</title>
        <meta property="og:title" content="CV Jaime A. Herrer R." key="title" />
      </Head>
      
      <div className="relative bg-gray-300/70 dark:bg-inherit">
        <BackgroundVideo />
        <div className="flex gap-5">
          <Sidebar />
          <div className="scrollable-container"> {/* Aplica scroll solo a este contenedor */}
            <CenterContent />
          </div>
          <RightMenu />
        </div>
      </div>
    </>
  );
};
export default Home;
