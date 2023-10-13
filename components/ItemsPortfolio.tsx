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
    <div className="flex flex-col w-96 gap-2 ">
      <Image
        className="rounded-lg group-hover:scale-105 transition-all duration-300 ease-in  shadow-md group-hover:shadow-blue-500"
        src={img}
        alt="Portfolio Image"
        width={380}
        height={380}
      />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{additionalInfo}</p>
      <p>{languages}</p>
      <Button 
          className="bg-blue-700 w-[50%] p-2 mt-2 text-white bg-gradient-to-b from-gradient-primary group to-[#0052d6]">
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
