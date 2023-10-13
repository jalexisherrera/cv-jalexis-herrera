import { AboutMe } from "@/components/AboutMe";
import { MyEducation } from "@/components/MyEducation";
import { MyKnowledge } from "@/components/MyKnowledge";
import { Footer } from "./Footer";
import { Portfolio } from "@/components/Portfolio";

const CenterContent = () => {
  return (
    <div className="flex flex-col gap-10 w-full">
      <section className="rounded-lg">
        <AboutMe />
      </section>
      <section className="bg-transparent">
        <MyKnowledge />
      </section>
      <section className="bg-blue-800/30 rounded-lg p-6">
        <MyEducation />
      </section>
      <section className="">
        <div className="overflow-x-auto">
          <Portfolio />
        </div>
      </section>
      <div className="justify-items-end">
        <Footer />
      </div>
    </div>
  );
};

export { CenterContent };
