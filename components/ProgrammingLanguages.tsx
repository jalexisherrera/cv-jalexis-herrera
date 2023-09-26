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
      language: "PHP",
      percentage: 100,
    },
    {
      language: "python",
      percentage: 70,
    },
    {
        language: "javascript",
        percentage: 70,
    },
    {
        language: "css",
        percentage: 85,
    },
    {
        language: "Java",
        percentage: 70,
    }
  ];

  return (
    <div>
      <h2>Programming Languages</h2>
      {programmingLangua.map((skill) => (
        <div key={skill.language} className="flex items-center mb-4">
          <h3 className="w-1/3">{skill.language}</h3>
          <div className="w-1/3">
            <div className="bg-blue-500 h-2 rounded-full">
              <div
                className="h-2 bg-blue-800 rounded-full"
                style={{ width: `${skill.percentage}%` }}
              />
            </div>
          </div>
          <span className="w-1/3 text-rigth"> {skill.percentage}%</span>
        </div>
      ))}
    </div>
  );
};

export { ProgrammingLanguages };
