import Image from "next/image";
import { CardStreamScanner } from "@/components/CardStreamScanner";
import Sectionc2 from "./Sectionc2";
import Sectionc3 from "./Sectionc3";
import Sectionc4 from "./Sectionc4";
import Sectionc5 from "./Sectionc5";
import Section10 from "@/components/Section10";

const FeaturesPage = () => {
  return (
    <div className="">
      <div className="h-[80px] bg-[#000000]"></div>
      <div className="h-[100vh] bg-[#000000]">
        <CardStreamScanner />
        <h1 className="text-[#FFFFFF] 2xl:text-[35px] xl:text-[30px] text-center">
          Smart Finance Management
        </h1>
        <p className="text-[#FFFFFF] 2xl:text-[18px] xl:text-[16px] text-center mt-[10px] 2xl:w-[550px] xl:w-[500px] mx-auto">
          Take your finances to the next level with ASAN-PAY. Easily pay, send
          money, and manage your funds, putting you in full control.
        </p>
        <div className=" text-center mt-[15px] ">
          <button className=" cursor-pointer 2xl:text-[18px] xl:text-[16px] text-[#FFFFFF] bg-linear-to-r from-[#2E8C7A] to-[#0C2621] rounded-full 2xl:w-[180px] xl:w-[150px] 2xl:h-[50px] xl:h-[40px]  ">
            Downloads Apps
          </button>
        </div>
      </div>
      <Sectionc2 />
      <div className=" absolute top-150 z-999">
        <div className="relative 2xl:top-[280px] xl:top-[-10px]">
          <Image
            src="/elipse.png"
            width={1920}
            height={400}
            alt="/elipse"
            className=" "
          />
        </div>
      </div>

      <Sectionc3 />
      <Sectionc4 />
      <Sectionc5 />
      <Section10 />
    </div>
  );
};
export default FeaturesPage;
