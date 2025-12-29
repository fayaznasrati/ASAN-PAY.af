import Image from "next/image";

const Section6 = () => {
    return (
        <div className="  xl:flex max-w-screen-2xl mx-auto xl:px-[80px] mt-[100px] px-[15px] xl:mt-[350px] ">

                <div className="xl:w-[50%]">
                    <p className="rounded-full bg-[#F0F0F0] text-[16px] font-bold text-[#28937F] py-[12px] text-center  xl:px-[20px] items-center w-full xl:w-[300px]">Anywher, Anytime with ASAN-PAY</p>
                    <h1 className="pt-[20px] xl:text-[40px] text-[30px] xl:text-start text-center font-bold text-[#383141]">All Transactions Easily on 
Your Mobile</h1>
<p className="text-[16px] mt-[20px] xl:text-start text-center  font-medium text-[#5B5B5B]">Paying for anything is as easy as a tap. With ASAN-PAY, you can effortlessly handle a wide range of transactions, from bill payments and barcode scans to e-commerce</p>
<button className="rounded-full px-[20px] py-[12px] bg-gradient-to-r from-[#2E8C7A] to-[#0C2621] text-[16px] xl:w-[180px] w-full mx-auto text-[#FFFFFF] mt-[30px] cursor-pointer">Download Apps</button>
</div>
<div className="xl:w-[50%] xl:flex items-center justify-center xl:mt-0 mt-[140px]">
    <div className=" relative rounded-full bg-linear-to-b from-[#38BBA2] to-[#10302A] h-[400px] xl:w-[400px] ">
        <div className="w-[480px] absolute top-[-75px] left-[-40px]">
        <Image width={500} height={1000} src="/Rectangle copy 1 1.svg" className="w-full h-full object-cover  " alt="" />
        </div>
        <div className=" absolute rounded-2xl bg-[#FFFFFF] w-[110px] h-[110px] right-[270px] shadow-2xl border-1 border-[#9999]/20 top-[40px] ">
            <div className="rounded-full bg-[#F9F5FE] w-[50px] h-[50px] m-auto p-[8px] mt-[20px]  ">
           <div className="w-[30px] mx-auto">
            <Image
                              src="/Group.svg"
                              width={2200}
                              height={400}
                              alt="homeImage"
                              />
            </div>
            </div>
            <p className="text-[#000000] text-[14px] font-normal  py-[10px] text-center">Top Up</p>
        </div>
             <div className=" absolute rounded-2xl bg-[#FFFFFF] w-[110px] h-[110px] right-[25px] shadow-2xl border-1 border-[#9999]/20 top-[2px] ">
            <div className="rounded-full bg-[#F9F5FE] w-[50px] h-[50px] m-auto p-[8px] mt-[20px]  ">
           <div className="w-[30px] mx-auto">
            <Image
                              src="/Group1.svg"
                              width={2200}
                              height={400}
                              alt="homeImage"
                              />
            </div>
            </div>
            <p className="text-[#000000] text-[14px] font-normal  py-[10px] text-center">Transfer</p>
        </div>
                     <div className=" absolute rounded-2xl bg-[#FFFFFF] w-[110px] h-[110px] right-[80px] shadow-2xl border-1 border-[#9999]/20 top-[250px] ">
            <div className="rounded-full bg-[#F9F5FE] w-[50px] h-[50px] m-auto p-[8px] mt-[20px]  ">
           <div className="w-[30px] mx-auto">
            <Image
                              src="/Vector.svg"
                              width={2200}
                              height={400}
                              alt="homeImage"
                              />
            </div>
            </div>
            <p className="text-[#000000] text-[14px] font-normal  py-[10px] text-center">Exchange</p>
        </div>

    </div>
    
</div>
            </div>
    )
}

export default Section6;