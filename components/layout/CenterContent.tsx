import { Footer } from "./Footer";
const CenterContent = () => {
    return (
        <div className="flex flex-col justify-between gap-2 w-full">
            <div className="debug">Slider princial con foto y texto</div>
             <div className="debug">My Knowledge</div>
             <div className="debug">Education</div>
             <div className="debug">Porfolio</div>
            <div className="justify-items-end"><Footer /></div>
            
        </div>

    );
};

export { CenterContent };