import { AboutMe } from "@/components/AboutMe";
import { MyEducation } from "@/components/MyEducation";
import { MyKnowledge } from "@/components/MyKnowledge";
import { Footer } from "./Footer";
import { Portfolio } from "@/components/Portfolio";

const CenterContent = () => {
  return (
    <div className="flex flex-col gap-10 w-full justify-stretch min-h-screen">
      <section className="rounded-lg">
        <AboutMe />
      </section>
      <section className="">
        <MyKnowledge />
      </section>
      <section className="bg-slate-500 rounded-lg p-6">
        <MyEducation />
      </section>
      <section className="debug overflow-auto">
        <Portfolio />
      </section>
      <div className="justify-items-end">
        <Footer />
      </div>
    </div>
  );
};

export { CenterContent };
