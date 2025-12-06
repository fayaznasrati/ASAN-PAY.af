import Image from "next/image";
import Sectiona1 from "./Sectiona1";
import Sectiona2 from "./Sectiona2";
import Sectiona3 from "./Sectiona3";
import Sectiona4 from "./Sectiona4";
import Sectiona5 from "./Sectiona5";
import Sectiona6 from "./Sectiona6";
import Sectiona7 from "./Sectiona7";

const AboutUsPage = () => {

return (
    <div>
        <Sectiona1/>
        

        <div className=" absolute top-140 z-999">
        <div className="relative 2xl:top-[300px]">
        <Image
                src="/elipse.png"
                width={1920}
                height={400}
                alt="/elipse"
                className=" "
                />
                </div>
                </div>
                <Sectiona2/>
                <Sectiona3/>
                <Sectiona4/>
                <Sectiona5/>
                <Sectiona6/>
                <Sectiona7/>
                
                
    </div>
)

}

export default AboutUsPage;