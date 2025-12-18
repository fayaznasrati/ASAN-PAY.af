import Image from "next/image";
const Sectiona1 = () => {
    return(
        <section className=" relative">
            <Image
                  src="/Web 7.png"
                  className="w-full hidden xl:block"
                  width={2200}
                  height={400}
                  alt="homeImage"
                  />
            <Image
                  src="/bg-jumbotron (3).png"
                  className="w-full  xl:hidden"
                  width={2200}
                  height={400}
                  alt="homeImage"
                  />
                  <div className=" absolute xl:flex max-w-screen-2xl xl:px-[80px] px-[20px] mx-auto top-[100px]  xl:top-[170px] items-center left-0 right-0 z-10 xl:justify-between">
                            <div className=" flex xl:hidden block   gap-3 px-[10px]  py-3 items-center bg-[#FFFFFF]/30 rounded-full mb-[5px]">
                            <div className="">
                             <Image
                                                                                                  src="/Star 1.png"
                                                                                                  width={2200}
                                                                                                  height={400}
                                                                                                  className=" w-[22px] h-[22px]  text-[#FFFFFF] mr-[]"
                                                                                                  alt="homeImage"
                                                                                                  />
                            </div>
                            <p className="  text-[16px] text-[#FFFFFF]  font-bold w-full ">Welcome to a Modern Financial Experience</p>
                            </div>
                    <div className="2xl:ml-[50px]  xl:ml-[120px] mt-[30px] xl:mt-0 2xl:mt-[50px] content-center items-center xl:w-[50%]">
                        <h1 className="2xl:text-[50px] xl:text-[40px] text-[45px] font-bold w-full mb-[-20px] text-[#FFFFFF]">Make your</h1>
                        <h1 className="2xl:text-[50px] xl:text-[40px] text-[45px] xl:mt-0 2xl:mt-4 font-bold w-full   text-[#FFFFFF] ">Payments Easier</h1>
                        <p className="2xl:text-[18px] xl:text-[14px] text-[1]  text-[#FFFFFF] font-medium 2xl:w-[600px] xl:w-[400px] mt-[30px]">Manage your money, send and receive payments, and shop online securely with AsanPay — your all-in-one digital wallet. Fast, simple, and made for everyone.</p>
                        <div className="flex">
                        <div className=" flex justify-between gap-[80px] xl:gap-[100px] items-center rounded-full mt-[60px] xl:mt-[40px] bg-[#FFFFFF]/16 text-[#FFFFFF] text-[14px]  pl-[20px] ">
                        <p className="py-2.5">
                            Subscribe to our newsletter</p>
                           <button className="  rounded-full py-2.5 px-5 bg-[#FFFFFF] text-[#1A1537] text-[14px] font-medium">Subscribe </button>
                        </div></div>
                    </div>
                    <div className="w-[50%]">
<Image
                                                          src="/6081536 copy 1.png"
                                                          width={2200}
                                                          height={400}
                                                          className="xl:w-[550px] 2xl:w-[800px] absolute 2xl:top-[150px] xl:top-[25px] left-[450px] hidden xl:block"
                                                          alt="homeImage"
                                                          />
<Image
                                                          src="/11677207 copy 2 4.png"
                                                          width={2200}
                                                          height={400}
                                                          className="xl:w-[400px] 2xl:w-[650px] absolute top-[-70px] 2xl:left-[860px] xl:left-[760px] hidden xl:block"
                                                          alt="homeImage"
                                                          />
<Image
                                                          src="/Frame 34.png"
                                                          width={2200}
                                                          height={400}
                                                          className="xl:w-[100px] 2xl:w-[150px] absolute 2xl:top-[100px] xl:top-[25px] 2xl:left-[1240px] xl:left-[990px] hidden xl:block"
                                                          alt="homeImage"
                                                          />


                    </div>
                  </div>

        </section>
    )
}
export default Sectiona1;