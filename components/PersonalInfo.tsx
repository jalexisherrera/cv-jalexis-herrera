import Image from "next/image";
import React from "react";
import Tooltip from "@mui/material/Tooltip";

const PersonalInfo: React.FC = () => {
  return (
    <div className="flex items-center flex-col mx-auto">
      <div className="relative flex flex-col h-fit mx-3 mt-auto text-center items-center">
        <Tooltip title="Disponible para trabajar" placement="right">
          <div className="h-4 w-4 bg-green-500 rounded-full absolute bottom-20 right-4 border-1 border-white dark:border-gray-800"></div>
        </Tooltip>
        <Image
          className="rounded-full"
          src="/img/profile.jpg"
          alt="Perfil photo Jaime A. Herrera R."
          width={100}
          height={100}
        />
        <div className="flex flex-col gap-auto">
          <h3 className="text-md font-[550] mt-1">Alexis Herrera</h3>
          <p className="text-sm leading-6 text-text-secondary whitespace-nowrap">
            Systems Engineer Student
          </p>
        </div>
      </div>
      {/*--------*/}
      <div className="container">
        <hr className="mx-1 my-3" />
      </div>

      <div className="flex flex-col gap-2 min-w-full leading-none">
        <div className="flex justify-between items-center">
          <h4>Tel:</h4>
          <p className="textSkills flex">+57 3176721091</p>
        </div>
        <div className="flex justify-between items-center">
          <h4>Email:</h4>
          <p className="flex textSkills">alexizher@gmail.com</p>
        </div>
        <div className="flex justify-between items-center">
          <h4>Freelance:</h4>
          <p className="flex textSkills text-[#1b6446]">Available</p>
        </div>
        {/*<div className="flex justify-between">
          <h4>Address:</h4>
          <h4>Medellin, Ant</h4>
  </div>*/}
      </div>
    </div>
  );
};

export { PersonalInfo };
