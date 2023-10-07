import React from "react";

interface LanguageSkill {
  language: string;
  percentage: number;
  level: string;
}

const LanguageSkills: React.FC = () => {
  //define el percentage de cada idioma
  const languageSkills: LanguageSkill[] = [
    {
      language: "English",
      level: "90%",
      percentage: 90,
    },
    {
      language: "Spanish",
      level: "Native",
      percentage: 100,
    },
  ];

  return (
    <div className="px-1">
      <h4 className="title-skill mb-2 h-6">Idioms</h4>
      <div className="mt-6">
        {languageSkills.map((skill) => (
          <div
            key={skill.language}
            className="flex flex-col justify-center mb-4"
          >
            <div className="flex justify-between h-6">
              <p className="flex text-sm">{skill.language}</p>
              <span className="flex text-sm"> {skill.level}</span>
            </div>
            <div className="w-1/1">
              <div className="bg-blue-500 h-1 rounded-full">
                <div
                  className="h-1 bg-blue-800 rounded-full"
                  style={{ width: `${skill.percentage}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { LanguageSkills };
