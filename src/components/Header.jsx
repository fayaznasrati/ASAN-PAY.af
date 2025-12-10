"use client"
import Link from "next/link";
import { useState } from "react";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false)


    return(
        <div className=" max-w-screen-2xl mx-auto z-[9999999] fixed inset-0 w-full h-[10px] px-[10px] xl:px-[100px] mt-4">
            <div className="align-center xl:bg-gradient-to-b h-[60px] relative transition-all duration-300 from-[#185146]/80 hover:blur-[20] to-[#1d5c37]/80   flex px-8 py-3 rounded-full justify-between items-center  ">
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
          <button onClick={()=> setIsOpen(true)} className="text-[#fff] md:hidden  cursor-pointer">{isOpen ? "humberger": "numberger"}</button>
            </div>
              

              {isOpen && <div className="absulote top-1 flex justify-between px-2 bg-amber-400">
                
                   <ul className="flex text-[16px] text-[#FFFFFF] font-medium  gap-4">
                <li>
                    Home
                </li>
                <li>
                    Features
                </li>
                  <li>
                    About Us
                </li>
                <li>
                    Contact Us
                </li>
            </ul>
            <button className="cursor-pointer" onClick={()=> setIsOpen(false)}>close</button>
                
                </div>}
        </div>
    )
}


export default Header;