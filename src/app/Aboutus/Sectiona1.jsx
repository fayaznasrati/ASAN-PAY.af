import Image from "next/image";
const Sectiona1 = () => {
    return(
        <section className=" relative">
            <Image
                  src="/Web 7.png"
                  className="w-full"
                  width={2200}
                  height={400}
                  alt="homeImage"
                  />
                  <div className=" absolute flex max-w-screen-2xl px-[80px] mx-auto justify-between  top-[170px] items-center left-0 right-0 z-10 justify-between">
                    <div className="2xl:ml-[50px]  xl:ml-[120px] xl:mt-0 2xl:mt-[50px] content-center items-center w-[50%]">
                        <h1 className="2xl:text-[50px] xl:text-[40px] font-bold w-full mb-[-20px] text-[#FFFFFF]">Make your</h1>
                        <h1 className="2xl:text-[50px] xl:text-[40px] xl:mt-0 2xl:mt-4 font-bold w-full text-[#FFFFFF] ">Payments Easier</h1>
                        <p className="2xl:text-[18px] xl:text-[14px] text-[#FFFFFF] font-medium 2xl:w-[600px] xl:w-[400px] mt-[30px]">Manage your money, send and receive payments, and shop online securely with AsanPay — your all-in-one digital wallet. Fast, simple, and made for everyone.</p>
                        <div className="flex">
                        <div className=" flex justify-between gap-[150px] items-center rounded-full  mt-[40px] bg-[#FFFFFF]/16 text-[#FFFFFF] text-[14px]  pl-[20px] ">
                        <p className="py-2.5">
                            A newsletter Log In</p>
                           <button className="  rounded-full py-2.5 px-5 bg-[#FFFFFF] text-[#1A1537] text-[14px] font-medium">Log In </button>
                        </div></div>
                    </div>
                    <div className="w-[50%]">
<Image
                                                          src="/6081536 copy 1.png"
                                                          width={2200}
                                                          height={400}
                                                          className="xl:w-[550px] 2xl:w-[800px] absolute 2xl:top-[150px] xl:top-[25px] left-[450px]"
                                                          alt="homeImage"
                                                          />
<Image
                                                          src="/11677207 copy 2 4.png"
                                                          width={2200}
                                                          height={400}
                                                          className="xl:w-[400px] 2xl:w-[650px] absolute top-[-70px] 2xl:left-[860px] xl:left-[760px]"
                                                          alt="homeImage"
                                                          />
<Image
                                                          src="/Frame 34.png"
                                                          width={2200}
                                                          height={400}
                                                          className="xl:w-[100px] 2xl:w-[150px] absolute 2xl:top-[100px] xl:top-[25px] 2xl:left-[1240px] xl:left-[990px]"
                                                          alt="homeImage"
                                                          />


                    </div>
                  </div>

        </section>
    )
}
export default Sectiona1;