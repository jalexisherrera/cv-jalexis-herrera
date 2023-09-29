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
      <h3 className="font-semibold">Programming Languages</h3>
      {programmingLangua.map((skill) => (
        <div key={skill.language} className="flex flex-col justify-center mb-4">
          <div className="flex justify-between w-full">
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

export { ProgrammingLanguages };
