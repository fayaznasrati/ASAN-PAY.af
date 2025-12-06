import Image from "next/image";
import Sectionb1 from "./Sectionb1";
import Sectionb2 from "./Sectionb2";
import Sectionb3 from "./Sectionb3";
import Sectionb4 from "./Sectionb4";
import Sectionb5 from "./Sectionb5";
import Faq from "../data/faqData";
import FaqToggle from "@/components/faqToggle";
import Section10 from "@/components/Section10";
const ContactUSPage = () => {

return (
    <div>
        <Sectionb1/>
        <Sectionb2/>
        <Sectionb3/>
        <Sectionb4/>
        <Sectionb5/>
        <div className="max-w-screen-2xl pb-[8rem] flex flex-col items-center justify-center px-[80px] pt-[80px] mx-auto  ">
        <div className="rounded-full bg-[#F0F0F0] w-[125px] h-[49px] mb-[18px] items-center content-center pl-[18px] ">
        <p className="text-[18px] font-bold text-[#28937F]">Questions</p>
        </div>
        <h1 className="mb-[120px] text-[35px] font-bold">Frequently Asked Questions</h1>
        <div className="w-[1000px]">
      {Faq.map((faq)=> <FaqToggle heading={faq.title} children={faq.children}  key={faq.id} />)}</div></div>
      <Section10/>
    </div>
)
}
export default ContactUSPage;
