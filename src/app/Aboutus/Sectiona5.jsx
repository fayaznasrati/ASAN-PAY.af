import Image from "next/image";
const Sectiona5 = () => {
    return(
        <div className=" xl:flex mt-[100px] max-w-screen-2xl mx-auto xl:px-[100px] px-[30px] xl:pb-[100px]  ">
            <div className="xl:w-[50%]"> 
                <h1 className="text-[#383141] 2xl:text-[40px] xl:text-[35px] text-[26px] font-bold xl:mb-[15px] mb-[30px] text-center xl:text-start ">Our mission</h1>
                <p className="text-[#5B5B5B] 2xl:text-[18px] xl:text-[16px] text-[16px] font-normal xl:w-[550px] xl:mb-[40px] text-center xl:text-start ">To offer innovative solutions in digital payments, telecommunications, e-commerce, and financial services that, where individuals and businesses, facilitate seamless transactions, enhance user experiences, Support economic development</p>


                <h1 className="text-[#383141] 2xl:text-[40px] xl:text-[35px] text-[26px] font-bold xl:mb-[15px] mb-[30px] text-center xl:text-start  ">Our Vision</h1>
                <p className="text-[#5B5B5B] 2xl:text-[18px] xl:text-[16px] text-[16px] font-normal xl:w-[550px] xl:mb-[40px] text-center xl:text-start ">To become a leading provider of integrated digital financial and communication services in the region by enhancing customer convenience, promoting financial inclusion, driving digitalization, contributing to the country’s economic growth, and connecting people through state-of-the-art technology.
We are guided by strong core values: customer-centricity, where we prioritize our customers’ needs; integrity, by conducting our business with transparency and honesty to build trust; inclusivity, through our commitment to financial inclusion for all; collaboration, believing in the power of teamwork and partnerships; innovation, by embracing creativity and technology to drive digitalization; and social responsibility, with a dedication to contributing to the sustainable economic growth and development of our country. </p>

            </div>
            <div className="xl:w-[50%]">
<Image
                                                              src="/planet.png"
                                                              width={2200}
                                                              height={400}
                                                              className=" 2xl:w-[650px] xl:w-[550px] 2xl:h-[650px] xl:h-[550px] mb-[80px] xl:mt-0 mt-[80px] "
                                                              alt="homeImage"
                                                              />

            </div>
        </div>
    )
}
export default Sectiona5;