import Image from "next/image";
const Sectiona7 = () => {
    return(
        <div className=" max-w-screen-2xl mx-auto  pb-[100px] mt-[100px] xl:px-[80px] px-[20px]   ">
            <h1 className="text-[#383141] xl:text-[40px] text-[26px]  font-bold mb-[30px] text-center">ASAN-PAY— Consulting for Fintech Startups</h1>
            <p className="text-[#425466] text-[20px] font-medium xl:w-[800px] m-auto text-center">Our team consists of proven experts in finance, technology, and science. This unique mix allows us to deliver exceptional results for all our clients.</p>
                                   <Image
                                          src="/Component 2.png"
                                          className="w-full  2xl:ml-[22px]  hidden xl:block "
                                          width={2200}
                                          height={400}
                                          alt="homeImage"
                                          />

                                  <Image
                                          src="/Frame 1707481159.png"
                                          className="w-full  2xl:ml-[22px]  mt-[20px] block xl:hidden "
                                          width={2200}
                                          height={400}
                                          alt="homeImage"
                                          />
        </div>
    )
}
export default Sectiona7;
