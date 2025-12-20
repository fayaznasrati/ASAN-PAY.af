import Image from "next/image";
const Sectiona6 = () => {
    return(
        <div className="xl:pb-[100px] max-w-screen-2xl mx-auto mt-[100px] xl:px-[100px] px-[20px]  ">
            <h1 className="xl:text-[35px] 2xl:text-[40px] text-[26px] text-center xl:text-start   text-[#383141] font-bold">What drives Finance Flow?</h1>
            <div className=" xl:grid xl:grid-cols-2 2xl:gap-11 2xl:mt-[35px] xl:mt-[25px] mt-[40px] ">
                <div className=" rounded-[40px] bg-linear-to-r from-[#38BBA2] to-[#10302A] 2xl:w-full xl:w-[500px] 2xl:h-[230px] xl:h-[200px] w-full h-full xl:px-[40px] px-[30px]  xl:py-[50px] py-[40px] flex">
                    <div className="mr-[15px]">
                    <Image
                                                                                  src="/icon (2).png"
                                                                                  width={2200}
                                                                                  height={400}
                                                                                  className=" 2xl:w-[60px] xl:w-[50px] 2xl:h-[60px] xl:h-[50px] w-[180px] h-[60px]  "
                                                                                  alt="homeImage"
                                                                                  />
                    </div>
                    <div>
                    <h1 className="text-[#FFFFFF] 2xl:text-[22px] xl:text-[18px] text-[16px] mb-[5px]">Open Source</h1>
                    <p className="text-[#FFFFFF] 2xl:text-[18px] xl:text-[16px] 2xl:w-[500px] xl:w-[350px] text-[14px]">ASAN-PAY builds on open technologies to stay transparent, secure, and easy to grow with. We innovate through collaboration and openness.</p>
                    </div>
                </div>

                                <div className=" xl:mt-0 mt-[40px] rounded-[40px] bg-linear-to-r to-[#38BBA2] from-[#10302A] 2xl:w-full xl:w-[500px] 2xl:h-[230px] xl:h-[200px] xl:px-[40px] px-[30px] xl:py-[50px] py-[40px] flex">
                    <div className="mr-[15px]">
                    <Image
                                                                                  src="/icon (3).png"
                                                                                  width={2200}
                                                                                  height={400}
                                                                                  className=" 2xl:w-[60px] xl:w-[50px] 2xl:h-[60px] xl:h-[50px] w-[140px] h-[50px]   "
                                                                                  alt="homeImage"
                                                                                  />
                    </div>
                    <div>
                    <h1 className="text-[#FFFFFF] 2xl:text-[22px] xl:text-[18px] text-[16px] mb-[5px]">worldwide</h1>
                    <p className="text-[#FFFFFF] 2xl:text-[18px] xl:text-[16px] xl:w-[350px] text-[14px]">We connect users and businesses globally with fast, safe, and reliable digital payments built for everyone, everywhere.</p>
                    </div>
                </div>

                                                <div className=" rounded-[40px] bg-linear-to-r from-[#38BBA2] 2xl:w-full to-[#10302A] xl:w-[500px] 2xl:h-[230px] xl:h-[200px] px-[30px] xl:px-[40px] xl:py-[50px] py-[40px] flex 2xl:mt-0 xl:mt-[30px] mt-[40px]">
                                    <div className="mr-[15px]">
                                    <Image
                                                                                                  src="/icon (4).png"
                                                                                                  width={2200}
                                                                                                  height={400}
                                                                                                  className=" 2xl:w-[60px] xl:w-[50px] 2xl:h-[60px] xl:h-[50px] w-[140px] h-[50px]   "
                                                                                                  alt="homeImage"
                                                                                                  />
                                    </div>
                                    <div>
                                    <h1 className="text-[#FFFFFF] 2xl:text-[22px] xl:text-[18px] text-[16px] mb-[5px]">Transparent</h1>
                                    <p className="text-[#FFFFFF] 2xl:text-[18px] xl:text-[16px] text-[14px] xl:w-[350px]">Every transaction is clear and traceable. ASAN-PAY ensures full visibility so users can trust every payment they make.</p>
                                    </div>
                                </div>

                                                                                <div className=" rounded-[40px] 2xl:w-full bg-linear-to-r to-[#38BBA2] from-[#10302A] xl:w-[500px] 2xl:h-[230px] xl:h-[200px] xl:px-[40px] px-[30px] xl:py-[50px] py-[40px] flex 2xl:mt-0 xl:mt-[30px] mt-[40px]">
                                    <div className="mr-[15px]">
                                    <Image
                                                                                                  src="/icon (5).png"
                                                                                                  width={2200}
                                                                                                  height={400}
                                                                                                  className=" 2xl:w-[60px] xl:w-[50px] 2xl:h-[60px] xl:h-[50px] w-[140px] h-[50px]    "
                                                                                                  alt="homeImage"
                                                                                                  />
                                    </div>
                                    <div>
                                    <h1 className="text-[#FFFFFF] 2xl:text-[22px] xl:text-[18px] text-[16px] mb-[5px]">Community Driven</h1>
                                    <p className="text-[#FFFFFF] 2xl:text-[18px] xl:text-[16px] text-[14px] xl:w-[350px]">Every transaction is clear and traceable. ASAN-PAY ensures full visibility so users can trust every payment they make.</p>
                                    </div>
                                </div>
                
            </div>
        </div>
    )
}
export default Sectiona6;