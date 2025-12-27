import Image from "next/image";
const Sectionb4 = () => {
  return (
    <div className="xl:flex xl:mt-[100px] pb-[100px] 2xl:px-[100px] xl:px-[80px] max-w-screen-2xl mx-auto gap-15 px-[30px]">
      <div className="xl:w-[50%] w-full">
        <p className="text-xl bg-gradient-to-r from-[#2E8C7A] to-[#0C2621] bg-clip-text text-transparent 2xl:text-[26px] xl:text-[22px] font-bold mb-[20px] text-[30px] xl:text-start text-center ">
          Contact Info
        </p>
        <h1 className="block xl:hidden text-[28px] text-[#000000] font-bold text-center ">
          We are always happy to{" "}
          <span className="text-[#2E8C7A]">assist you </span>
        </h1>
        <h1 className="2xl:text-[54px] xl:text-[50px] font-bold hidden xl:block">
          We are always
        </h1>
        <h1 className="2xl:text-[54px] xl:text-[50px] font-bold hidden xl:block">
          happy to
          <span className="text-[#2E8C7A] 2xl:ml-[10px] xl:ml-[5px] hidden xl:block">
            assist you
          </span>
        </h1>
      </div>
      <div className="xl:w-[50%] xl:flex xl:gap-20 xl:mt-0 mt-[40px]  xl:ml-0  ml-[10px]">
        <div className="">
          <div className="relative inline-block 2xl:text-2xl xl:text-xl font-bold text-[18px]">
            Email Address
            <span className="absolute left-0 bottom-[-20px] 2xl:w-10 xl:w-5 w-5 2xl:h-[3px] xl:h-[2px] h-[3px] bg-black before:content-['']"></span>
          </div>
          <p className="2xl:text-[22px] xl:text-[20px] font-semibold xl:mt-[40px] mt-[40px] xl:mb-0 mb-[15px]">
            Ex@gmail.org
          </p>
          <p className="2xl:text-[20px] xl:text-[18px] font-normal xl:mt-[20px] 2xl:w-[200px]  xl:w-[150px]">
            Assistance hours:
          </p>
          <p>Saturday - Friday 6 am to</p>
          <p>11 pm EST</p>
        </div>
        <div className="">
          <div className="relative inline-block 2xl:text-2xl xl:text-xl text-[18px] font-bold xl:mt-[0] mt-[60px]">
            Number
            <span className="absolute left-0 bottom-[-20px] 2xl:w-10 xl:w-5 w-5 2xl:h-[3px] xl:h-[2px] h-[3px] bg-black before:content-[''] "></span>
          </div>
          <p className="2xl:text-[22px] xl:text-[20px] font-semibold xl:mt-[40px] mt-[40px] xl:mb-0 mb-[15px]">
            +9371234567
          </p>
          <p className="2xl:text-[20px] xl:text-[18px] font-normal xl:mt-[20px] 2xl:w-[200px]  xl:w-[150px]">
            Assistance hours:
          </p>
          <p>Saturday - Friday 6 am to</p>
          <p>11 pm EST</p>
        </div>
      </div>
    </div>
  );
};
export default Sectionb4;
