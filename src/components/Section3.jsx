import Image from "next/image";

const Section3 = () => {
    return (

        <div className="xl:pt-[350px] pt-[1300px] 2xl:pt-[250px] 2xl:pb-[1000px] xl:pb-[800px] h-[100vh] mt-[100px] items-center content-center text-center m-auto">
            <div className="w-full xl:w-[700px] m-auto">
        <h1 className=" w-full xl:text-[40px] text-[22px] 2xl:text-[42px] font-bold">Empowering Every Transaction In One Connected Ecosystem</h1>
        <p className="w-full 2xl:text-[24px] text-[16px] xl:text-[20px] font-medium pt-[32px]">One smart wallet for all your needs — banking, travel, Shopping, and more. Simplify life with ASAN PAY.</p>
            </div>
            <div className="px-[20px] xl:px-[80px] py-[100px] 2xl:w-[1300px] xl:w-[1000px] h-[850px] m-auto" >
            <Image
                  src="/Section3home.png"
                  className=""
                  width={2200}
                  height={400}
                  alt="homeImage"
                  />
            </div>
            <div>

            </div>
        </div>

    )
}

export default Section3;