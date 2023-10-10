import React from "react";

interface ProgrammingLanguages {
  language: string;
  percentage: number;
}

const ProgrammingLanguages: React.FC = () => {
  //define el percentage de cada idioma
  const programmingLangua: ProgrammingLanguages[] = [
    {
      language: "Html",
      percentage: 90,
    },
    {
      language: "javascript",
      percentage: 70,
    },
    {
      language: "css",
      percentage: 85,
    },
  ];

  return (
    <div className="px-1">
      <h3 className="title-skill">Programming Languages</h3>
      <div className="mt-3">
        {programmingLangua.map((skill) => (
          <div
            key={skill.language}
            className="flex flex-col justify-center my-2 h-4"
          >
            <div className="flex justify-between">
              <p className="flex textSkills">{skill.language}</p>
              <span className="flex textSkills"> {skill.percentage}%</span>
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

export { ProgrammingLanguages };
