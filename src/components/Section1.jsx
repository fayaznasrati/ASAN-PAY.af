import Image from "next/image";
import { FaApple } from "react-icons/fa";

const Section1 = () => {
    return(
        
            <section className="relative " >
      <Image
      src="/bgHome.png"
      className="cursor-pointer hidden xl:block"
      width={2200}
      height={400}
      alt="homeImage"
      />
         <Image
      src="/mobile-bg.svg"
      className="cursor-pointer xl:hidden"
      width={2200}
      height={400}
      alt="homeImage"
      />

      <div className="absolute top-[100px] xl:top-[150px] items-center left-0 right-0 z-10 ">
        <div className="flex flex-col xl:flex-row mx-auto max-w-screen-2xl px-[10px] xl:px-[100px] justify-between">
        <div className="xl:w-[44%]  ">
            <div className="flex ">
        <div className=" flex  gap-3 px-[20px] 2xl:py-3 py-2 xl:py-2 2xl:mb-[50px] items-center bg-[#FFFFFF]/30 rounded-full mb-[5px]">
        <div className="">
         <Image
                                                                              src="/Star 1.png"
                                                                              width={2200}
                                                                              height={400}
                                                                              className="xl:w-[16px] w-[14px] h-[14px] 2xl:w-[24px] 2xl:h-[24px] xl:h-[16px] text-[#FFFFFF] mr-[]"
                                                                              alt="homeImage"
                                                                              />
        </div>
        <p className=" 2xl:text-[16px] text-[14px] text-[#FFFFFF]  font-bold ">Welcome to a Modern Financial Experience</p>
        </div></div>
        <div className="">
            <h1 className="xl:text-[35px] text-[36px] mt-[20px] xl:mt-0 2xl:text-[42px] font-bold text-[#FFFFFF]">Your Trusted Partner in Digital Payments</h1>

        </div>
          <p className="xl:text-[15px] 2xl:text-[18px] font-medium text-[#FFFFFF] mt-[30px] px-[30px] xl:px-0 xl:w-[500px]" >Manage your money, send and receive payments, and shop online securely with Asan Pay — your all-in-one digital wallet. Fast, simple, and made for everyone.</p>
          <div className="flex  gap-5 xl:px-0 px-[30px] mt-[20px] ">
            <button className="cursor-pointer" >
                <div className="flex gap-1 bg-[#090909] rounded-[9px] cursor-pointer mt-[20px] py-2 px-3 items-center">
                    <Image
                                                                              src="/Logo (1).png"
                                                                              width={2200}
                                                                              height={400}
                                                                              className="w-[28px] text-[#fff]  h-[31px] mr-[8px]"
                                                                              alt="homeImage"
                                                                              />
                    <div  >
                       
                        <p className=" text-[12px] 2xl:text-[14px] text-[#fff] text-left">
                            Get it on
                        </p>
                        <h1 className="text-[#fff] text-[14px] xl:text-[16px] 2xl:text-[18px] ">
                            Google Play
                        </h1>
                    </div>
                </div>
            </button>
                        <button className="cursor-pointer">
                <div className="flex gap-1 bg-[#090909] rounded-[9px] py-2 px-3 items-center mt-[20px]">
                    <FaApple  className="w-[35px] xl:w-[40px] text-[#fff]  h-[40px]" />
                    <div  >
                       
                        <p className="text-[12px] 2xl:text-[14px]  text-[#fff] text-left">
                            Download on the
                        </p>
                        <h1 className="text-[#fff] text-[14px] xl:text-[16px] 2xl:text-[18px]">
                            App Store
                        </h1>
                    </div>
                </div>
            </button>

        </div>
        </div>

        
        <div className="w-[44%] hidden relative xl:flex">
            <div className="xl:w-[230px] 2xl:w-[370px] absolute top-[70px] z-99">
            <img src="Mobile 1.png" className="w-auto  h-auto object-cover " alt="Mobile image 1" /></div>
            <div className="xl:w-[230px] 2xl:w-[370px] ml-[170px] absolute 2xl:bottom-[-210px] xl:bottom-[-90px]"><img src="Mobile 2.png" className="w-full h-full object-cover" alt="" /></div>
        </div></div>
      </div>
   </section>

    )
}
export default Section1;