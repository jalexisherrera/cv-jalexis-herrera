import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

interface PortfolioProps {
  img: string;
  title: string;
  description: string;
  additionalInfo: string;
  languages: string[];
  link: string;
}

const ItemsPortfolio = ({
  title,
  description,
  additionalInfo,
  languages,
  img,
  link,
}: PortfolioProps) => {
  
  return (
    <div className="flex flex-col cursor-pointer hover:scale-95 hover:dark:bg-slate-900 hover:bg-blue-800/30 hover:rounded-md hover:p-2 min-w-full gap-2">
      <Image
        className="rounded-lg transition-all duration-300 ease-in shadow-md hover:shadow-blue-500"
        src={img}
        alt="Portfolio Image"
        width={380}
        height={380}
      />
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-md">{description}</p>
      {/* <p className="text-sm">{additionalInfo}</p> */}
      <p className="text-xs font-bold">{languages.join(", ")}</p>
      <Button 
          className="bg-blue-700 p-2 mt-2 text-white bg-gradient-to-b from-gradient-primary group to-[#0052d6]">
        <Link
          role="button"
          aria-haspopup="true"
          href={link}
        />
        More Info
        <BsArrowRightShort className="arrows ml-1 text-2xl" />
      </Button>
    </div>
  );
};

export { ItemsPortfolio };
