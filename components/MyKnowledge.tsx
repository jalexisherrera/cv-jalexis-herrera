import { CardKnowledge } from "@/components/CardKnowledge";
import { IconBaseProps, IconType } from "react-icons";

interface CardKnowledgeProps {
    knowledgeData: {
      Icon: IconType;
      title: string;
      description: string;
    }[];
  }

const MyKnowledge = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-6">
            <h1 className="lg:text-[48px] md:text-3xl sm:text-lg p-2 tracking-tighter leading-snug font-bold relative whitespace-normal line-clamp">My Knowledge</h1>

            <p className="mt-5 p-description">
                I am a student of Systems Engineering with experience in web
                development. I have worked with CMS platforms such as WordPress,
                Shopify, Magento, and Drupal. I am also proficient in Cpanel and PHP
                development. I am currently expanding my knowledge to front-end
                development using technologies such as Next.js and React.js. I am a
                passionate learner and I am committed to continuous improvement in
                software development.
            </p>
            <div className="grid grid-cols-3 justify-center gri mt-10">
                <CardKnowledge knowledgeData={[]} />
            </div>
        </div>
    );
};

export { MyKnowledge };
