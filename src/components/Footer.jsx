import Link from "next/link";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
return(
 <div className="bg-[url('/Footer(1).png')] bg-cover bg-center   h-[700px]   ">
    <div className="max-w-screen-2xl mx-auto px-[100px]">
<div className="flex w-full">
 <div className="w-[50%]">
                                  <Image
                                                              src="/logo.png"
                                                              width={2200}
                                                              height={400}
                                                              className=" w-[200px] h-[60px] mt-[80px] "
                                                              alt="homeImage"
                                                              />
 </div>
 <div className="w-[50%] flex justify-end">
    <p className="mt-[80px] w-[480px] text-[14px] text-[#FFFFFF] ">ASAN-PAY is an e-wallet app that allows you to store money, make payments, and perform other financial transactions electronically through your mobile device.</p>
 </div>
 </div>
 <div className="border-1 border-[#FFFFFF]/50   mt-[50px] "></div>

 <div className="flex mx-auto  mt-[50px] ">
    
<div className="w-[17%]">
<h1 className="text-[#FFFFFF] text-[18px] font-bold">COMPANY</h1>
<p className="text-[#FFFFFF] text-[16px] mt-[40px]">About Us</p>
<p className="text-[#FFFFFF] text-[16px] mt-[20px]">Our Team</p>
<p className="text-[#FFFFFF] text-[16px] mt-[20px]">Career</p>
<p className="text-[#FFFFFF] text-[16px] mt-[20px]">Contact Us</p>
<p className="text-[#FFFFFF] text-[16px] mt-[20px]">blog</p>
</div>
<div className="w-[17%]">
<h1 className="text-[#FFFFFF] text-[18px] font-bold">SUPPORT</h1>
<p className="text-[#FFFFFF] text-[16px] mt-[40px]">Getting Started</p>
<p className="text-[#FFFFFF] text-[16px] mt-[20px]">Help Center</p>
<p className="text-[#FFFFFF] text-[16px] mt-[20px]">Server Status</p>
<p className="text-[#FFFFFF] text-[16px] mt-[20px]">Report a Bug</p>
<p className="text-[#FFFFFF] text-[16px] mt-[20px]">Chat Support</p>
</div>
<div className="w-[17%]">
<h1 className="text-[#FFFFFF] text-[18px] font-bold">PRODUCTS</h1>
<p className="text-[#FFFFFF] text-[16px] mt-[40px]">Features</p>
<p className="text-[#FFFFFF] text-[16px] mt-[20px]">Review</p>
<p className="text-[#FFFFFF] text-[16px] mt-[20px]">Update</p>
</div>
<div className="w-[17%]">
<h1 className="text-[#FFFFFF] text-[18px] font-bold">DOWNLOADS</h1>
<p className="text-[#FFFFFF] text-[16px] mt-[40px]">iOS</p>
<p className="text-[#FFFFFF] text-[16px] mt-[20px]">Android</p>
</div>
<div className="w-[32%] ">
<h1 className="text-[18px] text-[#FFFFFF] font-bold">SUBSCRIBE TO OUR NEWSLETTER</h1>
<p className="text-[16px] text-[#FFFFFF]/80 w-[350px] mt-[40px]">Subscribe today to receive the latest updates, exclusive content, and valuable insights delivered right to your inbox.</p>
<div className="rounded-full py-3 px-3 w-[340px] bg-[#FFFFFF]/20 mt-[20px] text-[14px] font-bold text-[#FFFFFF]">Enter your email</div>
<button className="bg-[#FFFFFF] rounded-full mx-auto px-6 py-3 text-[14px] text-[#2E8C7A] mt-[20px]">Subscribe</button>
</div>
 </div>
  <div className="border-1 border-[#FFFFFF]/50  mt-[50px] "></div>
  <div className="flex   mt-[50px]">
    <div className="w-[70%] ">
<p className="text-[16px] font-normal text-[#FFFFFF]">Copyright © 2025 ASAN-PAY | All Rights Reserved </p>
    </div>
    <div className="w-[30%] ml-[500px] justify-end flex gap-4">
<FaFacebookF className="text-[#FFFFFF]" />
<FaTwitter className="text-[#FFFFFF]" />
<RiInstagramFill className="text-[#FFFFFF]" />
<FaLinkedinIn className="text-[#FFFFFF]" />
<FaYoutube className="text-[#FFFFFF]" />
    </div>
  </div>
</div>
  </div>


)
}
export default Footer;
