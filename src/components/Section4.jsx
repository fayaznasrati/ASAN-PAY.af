import Image from "next/image";
import Link from "next/link";

const Section4 = () => {
    return (

        <div className=" xl:flex  max-w-screen-2xl xl:px-[80px] mx-auto xl:pt-[300px] pt-[600px] px-[20px] ">
            <div className="xl:w-[55%] items-center content-center"> 
                <h1 className="xl:text-[40px] text-[28px] 2xl:text-[44px] font-bold xl:w-[550px] text-center xl:text-start">The Smarter Way to Spend
and Save.</h1>
<p className="xl:text-[18px] 2xl:text-[20px] font-normal pt-[20px] pb-[50px] text-center xl:text-start text-[16px] ">Empower your finances with ASAN PAY — the E-Wallet and card built for modern life.Instant transfers, real-time insights, and total control at your fingertips.Spend smarter, save better, and experience the future of cashless payments — all with ASAN PAY.</p>
<Link href="/Aboutus"> <button className=" mx-auto w-full xl:w-30 xl:mx-0  xl:px-3 p-3 rounded-full bg-gradient-to-r from-[#2E8C7A] to-[#0C2621] text-[#FFFFFF] 2xl:text-[18px] xl:text-[16px]  font-bold cursor-pointer">Learn More</button> </Link> 
            </div>
            <div className=" xl:w-[45%] xl:mt-0 mt-[60px]">
<Image
                  src="/Section4home.png"
                  width={2200}
                  height={400}
                  alt="homeImage"
                  />
            </div>
        </div>

    )
}

export default Section4;