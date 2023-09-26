import React from "react";

interface ExtraSkills {
  language: string;
  percentage: number;
}

const ExtraSkills: React.FC = () => {
  //define el percentage de cada idioma
  return (
    <div >
      <h2>Extra Skills</h2>
      <div className="flex flex-col">
      <span>icon Bootstrap, materialize</span>
      <span>Stylus, Sass, Less</span>
      <span>Gulp, webpack, grunt</span>
      <span>Git Knowledge</span>
      <span>WordPress, Prestashop</span>
      </div>
      
    </div>
  );
};

export { ExtraSkills };