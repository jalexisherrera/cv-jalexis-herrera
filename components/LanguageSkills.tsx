import React from "react";

interface LanguageSkill {
  language: string;
  percentage: number;
}

const LanguageSkills: React.FC = () => {
  //define el percentage de cada idioma
  const languageSkills: LanguageSkill[] = [
    {
      language: "English",
      percentage: 90,
    },
    {
      language: "Spanish",
      percentage: 100,
    },
    {
      language: "Frances",
      percentage: 70,
    },
  ];

  return (
    <div className="debug">
      <h3 className="font-semibold">Idioms</h3>
      {languageSkills.map((skill) => (
        <div key={skill.language} className="flex flex-col justify-center mb-4">
          <div className="flex justify-between">
            <h3 className="flex">{skill.language}</h3>
            <span className="flex text-rigth"> {skill.percentage}%</span>
          </div>
          <div className="w-1/1">
            <div className="bg-blue-500 h-2 rounded-full">
              <div
                className="h-2 bg-blue-800 rounded-full"
                style={{ width: `${skill.percentage}%` }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export { LanguageSkills };
