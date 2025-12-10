import Section1 from "@/components/Section1";
import Image from "next/image";
import Section2 from "./data/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";
import Section6 from "@/components/Section6";
import Section7 from "@/components/Section7";
import Section8 from "@/components/Section8";
import Faq from "./data/faqData";
import FaqToggle from "@/components/faqToggle";
import Section10 from "@/components/Section10";
import FeatureCard from "@/components/Cardslider";
import FeaturesSection from "@/components/Cardslider";


export default function Home() {
  return (
    <div className=" mx-auto">
      <Section1/>
      <section className="absolute items-center mx-auto top-[540px] z-[999] 2xl:top-[740px] left-0 right-0" >
        <div className="relative items-center mx-auto ">
          <div className="absolute  top-[100px] flex flex-col left-0 right-0 max-w-screen-2xl   justify-center w-full mx-auto align-middle items-center">
            <div className="w-[600px] ">
            <h1 className="text-center mb-[100px] text-[#383141] text-[40px] font-bold w-full ">Simple, Swift, and Secure, 
Why You Should Choose Us</h1></div>
<div className="grid px-5 gap-10 grid-cols-4 pl-[80px] pr-[80px] ">
{Section2.map((sec) => <div key={sec.id}>
  <div className="2xl:w-[70px] 2xl:h-[70px] xl:w-[50px] xl:h-[50px] rounded-full 2xl:p-3 xl:p-2.5 bg-[#F6F2FD] items-center content-center ">
    {sec.icon}
    <Image 
    alt=""
    width={100}
    height={100}
    className="w-full h-full "
    src={sec.image} 
    />
  </div>
  <h1 className="xl:text-[24px] 2xl:text-[26px] mt-4 font-bold h-[80px] text-[#1d1d1d]">{sec.title}</h1>
  <p className="xl:text-[14px] 2xl:text-[16px] mt-4 text-[#5B5B5B] ">{sec.desc}</p>
</div>)}</div> 
          </div>
        <Image
        src="/elipse.png"
        width={1920}
        height={400}
        alt="/elipse"
        /></div>

      </section>
      <Section3/>
      <Section4/>
      <FeaturesSection/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Section8/>
      <div className="max-w-screen-2xl pb-[8rem] mx-auto flex flex-col items-center justify-center px-[80px] pt-[80px]  ">
        <div className="rounded-full bg-[#F0F0F0] w-[125px] h-[49px] mb-[18px] items-center content-center pl-[18px] ">
        <p className="xl:text-[18px] 2xl:text-[20px] font-bold text-[#28937F]">Questions</p>
        </div>
        <h1 className="xl:mb-[120px] 2xl:mb-[80px] 2xl:text-[40px] xl:text-[35px] font-bold">Frequently Asked Questions</h1>
        <div className="2xl:w-[1200px] xl:w-[1000px]">
      {Faq.map((faq)=> <FaqToggle heading={faq.title} children={faq.children}  key={faq.id} />)}</div></div>
      <Section10/>
    </div>
  );
}
