import Image from "next/image";
import React from "react";

const PersonalInfo: React.FC = () => {
  return (
    <div className="w-[150px] flex items-center flex-col mx-auto debug">
    <div className="relative flex flex-col h-fit mx-3 mt-[50px] text-center items-center">
       <div className="h-4 w-4 bg-green-500 rounded-full absolute bottom-28 right-4 border-1 border-white dark:border-gray-800"></div>
      <Image
        className="rounded-full"
        src="/img/profile.jpg"
        alt="Perfil photo"
        width={150}
        height={150}
      />
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-[550] mt-8">Alexis Herrera</h3>
        <p className="text-[15px] leading-6 text-text-secondary whitespace-nowrap">
        Systems engineer student
        </p>
      </div>
    </div>
    {/*--------*/}
    <div className="container">
        <hr className="mx-1 my-10" />
      </div>

      <div className="flex flex-col gap-2 min-w-full text-[15px]">
        <div className="flex justify-between">
          <h4>Age:</h4>
          <h4>35</h4>
        </div>
        <div className="flex justify-between">
          <h4>Residence:</h4>
          <h4>CO</h4>
        </div>
        <div className="flex justify-between">
          <h4>Freelance:</h4>
          <h4 className="text-[#7EB942]">Available</h4>
        </div>
        <div className="flex justify-between">
          <h4>Address:</h4>
          <h4>Medellin, Ant</h4>
        </div>
      </div>
      </div>
  );
};

export { PersonalInfo };
