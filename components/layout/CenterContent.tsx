import { AboutMe } from "../AboutMe";
import { MyKnowledge } from "../MyKnowledge";
import { Footer } from "./Footer";
const CenterContent = () => {
  return (
    <div className="flex flex-col gap-10 w-full justify-stretch min-h-screen">
      <section className="rounded-lg">
        <AboutMe />
      </section>
      <div className="debug">
        <MyKnowledge />
      </div>
      <div className="debug">Education</div>
      <div className="debug">Porfolio</div>
      <div className="justify-items-end">
        <Footer />
      </div>
    </div>
  );
};

export { CenterContent };
