import Image from "next/image";
import { CardStreamScanner } from "@/components/CardStreamScanner";
import Sectionc2 from "./Sectionc2";
import Sectionc3 from "./Sectionc3";
import Sectionc4 from "./Sectionc4";
import Sectionc5 from "./Sectionc5";
import Section10 from "@/components/Section10";
import Section2rf from "./Section2rf";
import Section3rf from "./Section3rf";
import Section5rf from "./Section5rf";
import Section10r from "@/components/Section10r";

const FeaturesPage = () => {
  return (
    <div className="">
      <div className="h-[80px] bg-[#000000]"></div>
      <div className="h-[100vh] bg-[#000000]">
        <CardStreamScanner />
        <h1 className="text-[#FFFFFF] 2xl:text-[35px] xl:text-[30px] text-center text-[22px] ">
          Smart Finance Management
        </h1>
        <p className="text-[#FFFFFF] 2xl:text-[18px] xl:text-[16px] text-center mt-[10px] 2xl:w-[550px] xl:w-[500px] xl:mx-auto px-6  my-auto">
          Take your finances to the next level with ASAN-PAY. Easily pay, send
          money, and manage your funds, putting you in full control.
        </p>
        <div className=" text-center xl:mt-[15px] mt-[35px] ">
          <button className=" cursor-pointer 2xl:text-[18px] xl:text-[16px] text-[#FFFFFF]  bg-linear-to-r from-[#2E8C7A] to-[#0C2621] rounded-full 2xl:w-[180px] xl:w-[150px] w-50 2xl:h-[50px] xl:h-[40px] h-10 ">
            Downloads Apps
          </button>
        </div>
      </div>
      <Sectionc2 />
      <Section2rf
        title="Everything You Need in One Smart Wallet"
        description="Manage payments, top-ups, bills, and transfers instantly — fast,
          secure, and always accessible."
      />
      <div className=" absolute top-150 z-999">
        <div className="relative 2xl:top-[280px] xl:top-[-10px] hidden xl:block">
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
      <Section3rf />
      <Section2rf />
      <Sectionc4 />
      <Sectionc5 />
      <Section5rf />
      <Section10 />
      <Section10r />
    </div>
  );
};
export default FeaturesPage;
