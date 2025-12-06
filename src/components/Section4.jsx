import Image from "next/image";

const Section4 = () => {
    return (

        <div className=" flex max-w-screen-2xl px-[80px] mx-auto pt-[300px] px-[80px]  ">
            <div className="w-[55%] items-center content-center"> 
                <h1 className="xl:text-[40px] 2xl:text-[44px] font-bold w-[550px]">The Smarter Way to Spend
and Save.</h1>
<p className="xl:text-[18px] 2xl:text-[20px] font-normal pt-[20px] pb-[50px] ">Empower your finances with ASAN PAY — the E-Wallet and card built for modern life.Instant transfers, real-time insights, and total control at your fingertips.Spend smarter, save better, and experience the future of cashless payments — all with ASAN PAY.</p>
<button className=" p-3 rounded-full bg-gradient-to-r from-[#2E8C7A] to-[#0C2621] text-[#FFFFFF] 2xl:text-[18px] xl:text-[16px] font-bold cursor-pointer">Learn More</button>
            </div>
            <div className=" w-[45%]">
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