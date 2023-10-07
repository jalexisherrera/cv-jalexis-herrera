import React from "react";
import { TbLayersIntersect } from "react-icons/tb";

interface ExtraSkill {
  skill: string;
}

const ExtraSkills: React.FC = () => {
  const extraSkills: ExtraSkill[] = [
    {
      skill: "Bootstrap, Tailwind",
    },
    {
      skill: "Wordpress, Prestashop",
    },
    {
      skill: "Shopify, Magento",
    },
  ];
  //define el percentage de cada idioma
  return (
    <div className="px-1">
      <h4 className="title-skill">Extra Skills</h4>
      <div className="mt-3">
        {extraSkills.map((skill) => (
          <div key={skill.skill} className="flex">
            <TbLayersIntersect className="text-blue-800 text-xl scale-x-[-1] mr-2" />
            <p className="flex textSkills">{skill.skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export { ExtraSkills };
