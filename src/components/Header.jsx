"use client"
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    

    return(
        <div className=" max-w-screen-2xl mx-auto z-[9999999] fixed inset-0 w-full xl:h-[10px]  xl:px-[100px] xl:mt-4">
            <div className={`  ${isOpen ? "bg-gradient-to-b md:bg-gradient-to-b  md:from-[#010c0a]/0 md:to-[#f6fa0d]/0 from-[#33B99F] to-[#0F433D] h-[100vh] " : " "}`}>
            <div className={`align-center  xl:bg-gradient-to-b xl:h-[60px]   relative transition-all duration-300 xl:from-[#185146]/80 hover:blur-[20] xl:to-[#1d5c37]/80   flex px-8 py-3 rounded-full justify-between items-center  `}>

            <div className="w-[130px] h-full">
                <img src="/logo.png" className="w-full h-full object-cover"/>
            </div>
            <ul className="text-[16px] hidden md:flex  text-[#FFFFFF] font-medium  gap-4">
                <Link href="/"> 
                <li>
                    Home
                </li> 
                </Link>
                <Link href="/Features">
                <li>
                    Features
                </li>
                </Link>
                   <Link href="/Aboutus"> 
                  <li >
                    About Us
                </li>    </Link>
                <Link href="/Contactus">
                <li>
                    Contact Us
                </li>  </Link>
            </ul>
            <button className="px-5 py-2 md:block hidden bg-gradient-to-r rounded-full cursor-pointer text-[#FFFFFF] from-[#2E8C7A] to-[#0C2621]">
                Log In
            </button>
          <button onClick={()=> setIsOpen(!isOpen)} className="text-[#fff] p-2 bg-gradient-to-b from-[#2EBEA2] to-[#113A32] rounded-full md:hidden  cursor-pointer">{isOpen ?  <X  />  :  <Menu />}</button>
      
              
            </div>
              {isOpen && <div className=" fixed top-[150px] flex xl:hidden   justify-center w-full  flex-col items-center content-center text-center  ">
                
                   <ul className="flex text-[28px] xl:text-[16px] flex-col text-[#FFFFFF] font-medium  gap-4">
                    <Link href="/">
                <li>
                    Home
                </li></Link>
                <Link href="/Features">
                <li>
                    Feature
                </li></Link>
                <Link href="/Aboutus">
                  <li>
                    About Us
                </li></Link>
                <Link href="/Contactus">
                <li>
                    Contact Us
                </li></Link>
            </ul>
            <button className="cursor-pointer rounded-full px-[100px] mt-[20px] text-[20px] text-[#fff] py-4 bg-linear-to-r from-[#27CAAB] to-[#0A2B25]" >Login</button>
                
                </div>}
</div>
        </div>
    )
}


export default Header;