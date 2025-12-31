import Link from "next/link";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Footerr = () => {
return(
    <div className="bg-[url('/footermobile.svg')] bg-cover bg-center h-[1050px] xl:hidden block">
        <div className="pt-[30px] px-[40px]">
        <div className=" w-full flex justify-center ">
        <div>
             <Image
                                                                          src="/Frame 1686553254 2.svg"
                                                                          width={800}
                                                                          height={400}
                                                                          className="w-[150px]"
                                                                          alt="homeImage"
                                                                          />
    <div className="flex justify-between mt-[20px] ">
<FaFacebookF className="text-[#FFFFFF] text-[20px]" />
<FaTwitter className="text-[#FFFFFF] text-[20px]" />
<RiInstagramFill className="text-[#FFFFFF] text-[20px]" />
<FaLinkedinIn className="text-[#FFFFFF] text-[20px]" />
<FaYoutube className="text-[#FFFFFF] text-[20px]" />
    </div>
            
        </div>

        </div>
        <div    className="mt-[35px]">
<h1 className="text-[18px] text-[#FFFFFF] font-bold">COMPANY</h1>
<div className=" border-b-1 text-[#FFFFFF] pb-[12px]"></div>
<p className=" text-[14px] text-[#FFFFFF] font-medium mt-[15px]">ABOUT US</p>
<p className=" text-[14px] text-[#FFFFFF] font-medium mt-[15px]">CONTACT US</p>
        </div>
                <div    className="mt-[40px]">
<h1 className="text-[18px] text-[#FFFFFF] font-bold">SUPPORT</h1>
<div className=" border-b-1 text-[#FFFFFF] pb-[12px]"></div>
<p className=" text-[14px] text-[#FFFFFF] font-medium mt-[15px]">GETTING STARTED</p>
<p className=" text-[14px] text-[#FFFFFF] font-medium mt-[15px]">HELP CENTER</p>
        </div>
                        <div    className="mt-[40px]">
<h1 className="text-[18px] text-[#FFFFFF] font-bold">PRODUCTS</h1>
<div className=" border-b-1 text-[#FFFFFF] pb-[12px]"></div>
<p className=" text-[14px] text-[#FFFFFF] font-medium mt-[15px]">FEATURES</p>
<p className=" text-[14px] text-[#FFFFFF] font-medium mt-[15px]">UPDATE</p>
        </div>
        <div    className="mt-[40px]">
<h1 className="text-[18px] text-[#FFFFFF] font-bold">PRODUCTS</h1>
<div className=" border-b-1 text-[#FFFFFF] pb-[12px]"></div>
<p className=" text-[14px] text-[#FFFFFF] font-medium mt-[15px]">IOS</p>
<p className=" text-[14px] text-[#FFFFFF] font-medium mt-[15px]">ANDROID</p>
        </div>
<div className="mt-[50px]">
    <h1 className="text-[16px] font-bold text-[#FFFFFF] text-center">SUBSCRIBE TO OUR NEWSLETTER</h1>
    <div className="rounded-full bg-[#FFFFFF]/20 px-4 py-3 mt-[20px]">
        <p className="text-[#FFFFFF] text-[14px]">Enter your email</p>
    </div>
    <div className="rounded-full bg-[#FFFFFF] w-[280px] py-3 mt-[20px] mx-auto">
        <p className="text-[#2E8C7A] text-[14px] text-center">Subscribe</p>
    </div>
</div>
<div className=" border-b-1 text-[#FFFFFF]/40 mt-[60px]"></div>
<h1 className="text-[14px] text-[#FFFFFF] mt-[15px] text-center">Copyright © 2025 ASAN-PAY | All Rights Reserved </h1>
        </div>
    </div>
)
}
export default Footerr;
