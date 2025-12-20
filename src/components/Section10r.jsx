import Image from "next/image";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
const Section10r = () => {
    return (
<div className="mx-[10px] xl:hidden block mt-[100px] px-[15px] ">
            <h1 className="text-[30px] font-medium text-center text-[#151515]">Enhance your business 
potential by partnering 
with us. </h1>
            <p className="text-[14px] mt-[20px] font-medium text-center text-[#424242]">Register today and access a wide range of fantastic features, including easy transactions, quick payments, and efficient financial management.</p>

                <div className="flex pt-[25px] gap-3">
   
<button className=" cursor-pointer bg-[#D9D9D9] border-[#FFFFFF80] gap-2 blur-[4] border rounded-[8px] flex h-[60px] items-center w-[200px] justify-center "><BiLogoPlayStore  className="w-[40px] text-[#2B2B2B]  h-[40px]" />
<p className="text-[12px] flex flex-col justify-items-start items-baseline text-[#2B2B2B]">
    Get it on <span className="text-[14px]">Google play</span>
</p>
</button>
<button className=" cursor-pointer bg-[#D9D9D9] border-[#FFFFFF80] gap-2 blur-[4] border rounded-[8px] flex h-[60px] items-center w-[200px] justify-center "><FaApple  className="w-[40px] text-[#2B2B2B]  h-[40px]" />
<p className="text-[12px] flex flex-col justify-items-start items-baseline text-[#2B2B2B]">
    Get it on <span className="text-[14px]">App store</span>
</p>
</button>

</div>
<div className="mt-[60px]">
    <Image
                                                              src="/Frame 1707481217.png"
                                                              width={2200}
                                                              height={400}
                                                              alt="homeImage"
                                                              />
</div>
</div>
    )
}
export default Section10r;
