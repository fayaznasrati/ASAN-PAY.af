import Image from "next/image";
import Sectionb1 from "./Sectionb1";
import Sectionb2 from "./Sectionb2";
import Sectionb3 from "./Sectionb3";
import Sectionb4 from "./Sectionb4";
import Sectionb5 from "./Sectionb5";
import Faq from "../data/faqData";
import FaqToggle from "@/components/faqToggle";
import Section10 from "@/components/Section10";
import Section10r from "@/components/Section10r";
const ContactUSPage = () => {
  return (
    <div>
      <Sectionb1 />
      <Sectionb2 />
      <Sectionb3 />
      <Sectionb4 />
      <Sectionb5 />

      <div className="max-w-screen-2xl xl:pb-[8rem] mx-auto  xl:flex flex-col items-center justify-center xl:px-[80px] pt-[80px] px-[40px]  ">
        <div className="rounded-full bg-[#F0F0F0] w-[125px] h-[49px] xl:mb-[18px] mb-[30px] items-center content-center pl-[18px] mx-auto ">
          <p className="xl:text-[18px] 2xl:text-[20px] font-bold text-[#28937F]">
            Questions
          </p>
        </div>
        <h1 className="xl:mb-[120px] 2xl:mb-[80px] xl:mb-[50px] 2xl:text-[40px] xl:text-[35px] text-[30px] text-center xl:text-start font-bold">
          Frequently Asked Questions
        </h1>
        <div className="2xl:w-[1200px] xl:w-[1000px]">
          {Faq.map((faq) => (
            <FaqToggle
              heading={faq.title}
              children={faq.children}
              key={faq.id}
            />
          ))}
        </div>
      </div>
      <Section10 />
      <Section10r />
    </div>
  );
};
export default ContactUSPage;
