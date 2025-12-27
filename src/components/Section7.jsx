import Image from "next/image";

const Section7 = () => {
    return (
        <div className="px-[80px] hidden xl:block max-w-screen-2xl mx-auto py-[100px] mt-[100px]">
            <div className=" relative">
                <Image
                                              src="/Frame 6.png"
                                              width={2200}
                                              height={400}
                                              alt="homeImage"
                                              />
            <div className="flex absolute top-[60px]  px-[60px] gap-20">
                <div className="">
                    <h1 className="xl:text-[35px] 2xl:text-[42px] xl:mt-0 2xl:mt-6 xl:mb-0 2xl:mb-2 font-medium text-[#FFFFFF] 2xl:w-[600px] xl:w-[500px]">Experience Seamless Digital Payments with ASAN-PAY</h1>
                    <p className="2xl:text-[16px] xl:text-[14px] font-medium text-[#F8E9FECC]/80 pt-[10px] 2xl:w-[600px] xl:w-[500px] pb-[50px] ">Send, receive, and make payments instantly with complete security and convenience.  Enjoy fast transfers and exclusive merchant discounts — all in one app.</p>
                <button className=" bg-[#D9D9D926] blur[4] text-[16px] text-[#FFFFFF] font-medium rounded-[8px] w-[140px] h-[40] shadow-2xl border-1 border-[#FFFF]/20 cursor-pointer  ">Get started</button>
                </div>
                <div className="2xl:w-[460px] xl:ml-0 2xl:ml-14 xl:w-[400px] h-full my-[-50px]">
                    <Image
                                              src="/Group 4.png"
                                              width={2200}
                                              height={400}
                                              alt="homeImage"
                                              />
                </div>
            </div>
            </div>
        </div>
    )
}

export default Section7