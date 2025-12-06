import Image from "next/image";
const Sectionb3 = () => {
    return(
        <div className="px-[100px] mt-[200px] text-center pb-[100px] max-w-screen-2xl mx-auto ">
            <h1 className="2xl:text-[30px] xl:text-[25px] font-semibold">Be the first to experience<span className="text-[#15AF92] ml-[5px]">ASAN-PAY!</span></h1>
            <p className="2xl:text-[16px] xl:text-[14px] text-[#000000]/60 w-[530px] mx-auto 2xl:mt-[15px] xl:mt-[10px]">Get faster, smarter, and more secure digital payments — all in one wallet designed 
for your everyday financial needs. </p>
            <Image
                  src="/Frame 164.png"
                  className="2xl:mt-[30px] xl:mt-[20px]"
                  width={2200}
                  height={400}
                  alt="homeImage"
                  />
        </div>
    )
}
export default Sectionb3;