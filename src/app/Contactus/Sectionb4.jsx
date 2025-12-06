import Image from "next/image";
const Sectionb4 = () => {
    return(
        <div className="flex mt-[100px] pb-[100px] 2xl:px-[100px] xl:px-[80px] max-w-screen-2xl mx-auto gap-15 ">
            <div className="w-[50%]">
                <p className="text-xl bg-gradient-to-r from-[#2E8C7A] to-[#0C2621] bg-clip-text text-transparent 2xl:text-[26px] xl:text-[22px] font-bold mb-[20px] ">Contact Info</p>
                <h1 className="2xl:text-[54px] xl:text-[50px] font-bold">We are always</h1>
                <h1 className="2xl:text-[54px] xl:text-[50px] font-bold">happy to<span className="text-[#2E8C7A] 2xl:ml-[10px] xl:ml-[5px]">assist you</span></h1>
            </div>
            <div className="w-[50%] flex gap-20">
                <div className="">
                    <div className="relative inline-block 2xl:text-2xl xl:text-xl font-bold">
  Email Address
  <span className="absolute left-0 bottom-[-20px] 2xl:w-10 xl:w-5 2xl:h-[3px] xl:h-[2px] bg-black before:content-[''] "></span>
</div>
                    <p className="2xl:text-[22px] xl:text-[20px] font-semibold mt-[40px]">Ex@gmail.org</p>
                    <p className="2xl:text-[20px] xl:text-[18px] font-normal mt-[20px] 2xl:w-[200px]  xl:w-[150px]">Assistance hours: 
 </p>
 <p>Saturday - Friday 6 am to</p>
 <p>11 pm EST</p>

                </div>
                <div className="">
                    <div className="relative inline-block 2xl:text-2xl xl:text-xl font-bold">
  Number
  <span className="absolute left-0 bottom-[-20px] 2xl:w-10 xl:w-5 2xl:h-[3px] xl:h-[2px] bg-black before:content-[''] "></span>
</div>
                    <p className="2xl:text-[22px] xl:text-[20px] font-semibold mt-[40px]">+9371234567</p>
                    <p className="2xl:text-[20px] xl:text-[18px] font-normal mt-[20px] 2xl:w-[200px]  xl:w-[150px]">Assistance hours: 
 </p>
 <p>Saturday - Friday 6 am to</p>
 <p>11 pm EST</p>

                </div>
            </div>
        </div>
    )
}
export default Sectionb4;