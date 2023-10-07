import { ExtraSkills } from "../ExtraSkills";
import { LanguageSkills } from "../LanguageSkills";
import { PersonalInfo } from "../PersonalInfo";
import { ProgrammingLanguages } from "../ProgrammingLanguages";

const Sidebar = () => {
  return (
    <aside className="w-80 px-3 flex flex-col debug min-h-full justify-evenly bg-black/5 dark:bg-white/25">
      <div className="container-card flex flex-col gap-5 px-3 py-4 h-full debug">
        <div className="mx-1">
          <PersonalInfo />
        </div>
      </div>

      <div className="flex flex-col gap-4  py-4 h-full debug">
        <div className="container">
          <hr className="mx-1 my-1 border-blue-800 dark:border-white" />
        </div>
        <div className="bg-white/70 dark:bg-white/25 rounded-md w-full py-1">
          <LanguageSkills />
        </div>
        <div>
          <ProgrammingLanguages />
        </div>

        <ExtraSkills />
      </div>
    </aside>
  );
};
export { Sidebar };
