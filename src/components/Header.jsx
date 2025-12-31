"use client"
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
  

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    const NavBarLink = ({ title, isActive, href }) => {
    const activeClass = isActive
      ? "font-medium  xl:text-[16px] text-[28px] border-b-2  text-[#FFFFFF]"
      : "font-normal  xl:text-[16px] text-[28px]  text-[#FFFFFF] ";
    return (
      <Link
        href={href}
        className={`block text-[14.5px] ${activeClass} hover:opacity-80`}
      >
        {title}
      </Link>
    );
  };
    return(
        <div className=" max-w-screen-2xl mx-auto z-[9999999] fixed  2xl:translate-x-42 w-full xl:h-[10px]  xl:px-[100px] xl:mt-4" >
            <div className={`  ${isOpen ? "bg-gradient-to-b md:bg-gradient-to-b  md:from-[#010c0a]/0 md:to-[#f6fa0d]/0 from-[#33B99F] to-[#0F433D] h-[100vh] " : " "}`}>
            <div className={`align-center  xl:bg-gradient-to-b xl:h-[60px] ${isOpen ? "bg-gradient-to-b from-[#185146]/0 hover:blur-[20] to-[#1d5c37]/0 " : "bg-gradient-to-b from-[#185146] hover:blur-[20] to-[#1d5c37]"}  relative transition-all duration-300 xl:from-[#185146]/80 hover:blur-[20] xl:to-[#1d5c37]/80   flex px-8 py-3  xl:rounded-full justify-between items-center  `}>

            <div className="w-[130px] h-full  ">
                <Link href= "/">
                <img src="/logo.png" className="w-full h-full object-cover cursor-pointer"/>
                </Link>
            </div>
            <ul className="text-[16px]  hidden md:flex  text-[#FFFFFF]   font-medium  gap-4">
                <NavBarLink title={"Home"} isActive={pathname.endsWith("/")} href={"/"}/>
               
                <Link href="/Features">
                <NavBarLink title={"Features"} isActive={pathname.endsWith("/Features")} href={"/Features"}/>
                </Link>
                   <Link href="/Aboutus"> 
               <NavBarLink title={"About Us"} isActive={pathname.endsWith("/Aboutus")} href={"/Aboutus"}/>
    </Link>
                <Link href="/Contactus">
               <NavBarLink title={"Contact Us"} isActive={pathname.endsWith("/Contactus")} href={"/Contactus"}/>
                 </Link>
            </ul>
            <button className="px-5 py-2 md:block hidden bg-gradient-to-r rounded-full cursor-pointer text-[#FFFFFF] from-[#2E8C7A] to-[#0C2621]">
                Log In
            </button>
          <button onClick={()=> setIsOpen(!isOpen)} className="text-[#fff] p-2 bg-gradient-to-b from-[#2EBEA2] to-[#113A32] rounded-full md:hidden  cursor-pointer">{isOpen ?  <X  />  :  <Menu />}</button>
      
              
            </div>
              {isOpen && <div className=" fixed top-[150px] flex xl:hidden   justify-center w-full  flex-col items-center content-center text-center  ">
                
                   <ul className="flex text-[28px] xl:text-[16px] flex-col text-[#FFFFFF] font-medium  gap-4">
                    <Link href="/" onClick={()=> setIsOpen(false)}>
                <NavBarLink title={"Home"} isActive={pathname.endsWith("/")} href={"/"}/>
                </Link>
                <Link href="/Features" onClick={()=> setIsOpen(false)} >
                <NavBarLink title={"Features"} isActive={pathname.endsWith("/Features")} href={"/Features"}/>
                </Link>
                <Link href="/Aboutus" onClick={()=> setIsOpen(false)}>
                  <NavBarLink title={"About us"} isActive={pathname.endsWith("/Aboutus")} href={"/Aboutus"}/>
                </Link>
                <Link href="/Contactus" onClick={()=> setIsOpen(false)}>
                <NavBarLink title={"Contact us"} isActive={pathname.endsWith("/Contactus")} href={"/Contactus"}/>
                </Link>
            </ul>
            <button className="cursor-pointer rounded-full px-[100px] mt-[20px] text-[20px] text-[#fff] py-4 bg-linear-to-r from-[#27CAAB] to-[#0A2B25]" >Login</button>
                
                </div>}
</div>
        </div>
    )
}


export default Header;