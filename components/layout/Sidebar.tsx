import { ExtraSkills } from "../ExtraSkills";
import { LanguageSkills } from "../LanguageSkills";
import { PersonalInfo } from "../PersonalInfo";
import { ProgrammingLanguages } from "../ProgrammingLanguages";

const Sidebar = () => {
  return (
    <aside className="w-80 px-3 flex flex-col debug min-h-full justify-evenly">
      <div className="container-card flex flex-col gap-5 px-3 py-4 h-full debug">
        <div className="mx-1">
          <PersonalInfo />
        </div>
      </div>

      <div className="flex flex-col gap-4 px-3 py-4 h-full debug">
        <h2 className="font-bold text-lg">My Skills</h2>
        <div>
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
