import { IconType } from "react-icons";
import { BsDatabaseGear, BsGear } from "react-icons/bs";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { MdOutlineManageAccounts } from "react-icons/md";
import { SiShopify, SiSpringsecurity, SiWordpress } from "react-icons/si";

interface CardKnowledgeProps {
  knowledgeData: {
    Icon: IconType;
    title: string;
    description: string;
  }[];
}

const CardKnowledge = ({ knowledgeData }: CardKnowledgeProps) => {
    const knowledgeDatas = [
        {
          Icon: LiaLaptopCodeSolid,
          title: "Desarrollo Web",
          description: "Webs, blogs",
        },
        {
          Icon: BsDatabaseGear,
          title: "Gestión de Bases de Datos",
          description: "SQL, NoSQL",
        },
        {
          Icon: BsGear,
          title: "Desarrollo de API",
          description: "Next.js, PHP",
        },
        {
          Icon: SiSpringsecurity,
          title: "Seguridad de Aplicaciones",
          description: "Autenticación, Autorización",
        },
        {
          Icon: SiShopify,
          title: "Ecommerce",
          description: "Shpify, Prestashop, Magento",
        },
        {
            Icon: SiWordpress,
            title: "CMS",
            description: "WordPress, Drupal",
          },
      ];

  return (
    <>
      {knowledgeDatas.map((knowledge) => (
        <div className="shadow-blue-700  rounded-md bg-slate-500 flex flex-col justify-center items-center m-3 shadow-md p-6" key={knowledge.Icon}>
          <knowledge.Icon className="text-8xl text-blue-700 group-hover:text-gradient-primary" />
          <div className="space-y-4 ">
            <h3 className="font-bold mt-3 text-center">{knowledge.title}</h3>
            <p className="flex justify-center ">{knowledge.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};
export { CardKnowledge };