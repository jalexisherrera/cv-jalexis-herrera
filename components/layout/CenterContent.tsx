import { AboutMe } from "../AboutMe";
import { Footer } from "./Footer";
const CenterContent = () => {
  return (
    <div className="flex flex-col gap-10 w-full justify-stretch min-h-screen">
      <section className="debug">
        <AboutMe />
      </section>
      <div className="debug">My Knowledge</div>
      <div className="debug">Education</div>
      <div className="debug">Porfolio</div>
      <div className="justify-items-end">
        <Footer />
      </div>
    </div>
  );
};

export { CenterContent };
