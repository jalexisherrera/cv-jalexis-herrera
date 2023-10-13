import { Tooltip } from "@mui/material";
import Image from "next/image";
import { HireMeDialog } from "./dialogs/HireMeDialog";

const AboutMe = () => {
  return (
    <div className="h-full p-2 lg:flex md:flex items-center bg-blue-800/30 dark:bg-slate-900 rounded-lg">
      <div className="">
        <Image
          src="/img/Alexis-about-me.png"
          alt="hero"
          width={430}
          height={500}
        />
      </div>
      <div className="flex flex-col justify-end lg:w-[70%] lg:mr-8 md:mr-5 sm:mr-2 w-full ">
        <h1 className="about-me-title flex flex-col">I am Alexis Herrera <span className="leading-snug">A
          <Tooltip title="Expert in: Reactjs, Nextjs, Angular," placement="right">
            <i className="text-blue-800 "> Front-end</i>
          </Tooltip> Developer</span></h1>
        <p className="about-me-description">
          I am a Systems Engineering student, with knowledge and experience in CMS handling, computer equipment maintenance, data network configuration, and web development. I am a responsible and committed person to my work.
          I have the ability to learn and adapt to new environments. I am looking for a job opportunity where I can apply my knowledge and skills.
        </p>
        <HireMeDialog />
      </div>

    </div>

  );
};

export { AboutMe };
