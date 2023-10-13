import {ItemsPortfolio} from "@/components/ItemsPortfolio";


const Portfolio =() => {
    return (

        <div className="flex gap-5 scrollbox">
        <ItemsPortfolio
        img="/portfolio/contandonos.jpg"
        title="Contandonos"
        description="Accounting Advisory and Consulting Company"
        additionalInfo="It is an initiative in professional consulting and advice, in accounting and organizational matters, aimed at generating clear and reliable information for the different users of the information."
        languages={["WordPress", "Avada", "HTML", "CSS", "JavaScript"]}
        link="https://contandonos.com/"
        />
        <ItemsPortfolio
        img="/portfolio/Givelo.jpg"
        title="Givelo CC"
        description="Givelo creates the world's most comfortable Cycling Apparel"
        additionalInfo="Givelo creates the world's most comfortable Cycling Apparel We aim to change the entire industry by creating genuine garments, designed to last for years. Don't Settle!"
        languages={["Shopify", "Liquid", "HTML", "CSS", "JavaScript"]}
        link="https://givelo.cc/"
        />
        <ItemsPortfolio
        img="/portfolio/infinita.jpg"
        title="Infinita"
        description="La marca Infinita lleva acompañando a los colombianos durante muchos años en sus proyectos"
        additionalInfo="We are Infinita SAS Distributor. We have characterized ourselves as a leading company in Colombia in the import and distribution of mass consumption products. Since our foundation, in 2006"
        languages={["WordPress", "Divi", "CSS", "JavaScript"]}
        link="infinita.com.co"
        />
        <ItemsPortfolio
        img="/portfolio/matices.jpg"
        title="Matices"
        description="Matices Corporación Dancística"
        additionalInfo="The Matices Dance Corporation is a non-profit entity that was founded on February 17, 2001 in Medellín, Colombia. The Corporation seeks to resume, reinterpret, recreate and project the Colombian folklore tradition, generating spaces for enjoyment, teaching and learning of national folklore dances."
        languages={["WordPress", "Divi", "CSS", "JavaScript"]}
        link="https://maticescorporacion.org/"
        />
        <ItemsPortfolio
        img="/portfolio/Sitioss.jpg"
        title="Sitioss"
        description="Servicios En la Nube"
        additionalInfo="Sitioss es una empresa proveedora de servicios en la nube, hosting, dominios, VPS, Certificados SSL antivirus y más."
        languages={["WordPress", "Divi", "PHP", "CSS", "JavaScript"]}
        link="https://sitioss.com/"
        />
        </div>
    );
};

export { Portfolio};