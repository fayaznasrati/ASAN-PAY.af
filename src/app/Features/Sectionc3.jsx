import Image from "next/image";

const Sectionc3 = () => {
  return (
    <div className="mt-[100px] px-[80px] pb-[100px] max-w-screen-2xl mx-auto hidden xl:block ">
      <Image
        src="/Frame 1171277468.png"
        className="mt-[20px] w-full h-[400px] "
        width={2200}
        height={400}
        alt="homeImage"
      />

      <div className=" flex ">
        <div className="w-[50%]">
          <Image
            src="/Mockup_Questions 2 (4).png"
            className=" absolute mt-[20px] w-[350px]  h-[350px] 2xl:top-[3128px] xl:top-[2457px] 2xl:left-[280px] xl:left-[100px] z-[99] "
            width={2200}
            height={400}
            alt="homeImage"
          />
          <Image
            src="/iPhone 15 Pro Black Titanium Mockup Portrait (3).png"
            className=" absolute mt-[20px] w-[350px] h-[350px] 2xl:top-[3178px] xl:top-[2507px] 2xl:left-[455px] xl:left-[275px] "
            width={2200}
            height={400}
            alt="homeImage"
          />
        </div>
        <div className="w-[50%] ">
          <h1 className="absolute 2xl:text-[52px] xl:text-[50px] w-[500px] text-[#FFFFFF] font-semibold 2xl:top-[3230px] xl:top-[2560px] 2xl:left-[950px] xl:left-[680] leading-[1] ">
            Send your money with one click!
          </h1>
          <p className="absolute 2xl:text-[16px] xl:text-[14px] 2xl:w-[450px] xl:w-[400px] text-[#FFFFFF] font-semibold 2xl:top-[3370px] xl:top-[2685px] 2xl:left-[950px] xl:left-[680]">
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed.
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="w-[40%] mt-[10px]">
          <Image
            src="/Frame 1707481116.png"
            className="w-full h-[400px]"
            width={2200}
            height={400}
            alt="homeImage"
          />
          <div>
            <Image
              src="/Frame 1000011464.png"
              className=" absolute 2xl:w-[300px] xl:w-[280px] 2xl:h-[250px] xl:h-[230px] 2xl:top-[3565px] xl:top-[2895px] 2xl:left-[385px] xl:left-[155px] "
              width={2200}
              height={400}
              alt="homeImage"
            />
            <h1 className="absolute  w-[300px] 2xl:text-[32px] xl:text-[30px] 2xl:top-[3820px]  xl:top-[3140px] 2xl:left-[380px] xl:left-[145px] text-center font-semibold text-[#FFFFFF] leading-[1]">
              Invest Smartly And reap Rewards..
            </h1>
            <p className="absolute  w-[400px] 2xl:text-[16px] xl:text-[14px] 2xl:top-[3900px] xl:top-[3210px] 2xl:left-[330px] xl:left-[100px] text-center font-semibold text-[#FFFFFF]">
              our financial advisors are here to listen, analyze, and provide
              strategic recommendations.
            </p>
          </div>
        </div>
        <div className="w-[60%] mt-[10px]">
          <Image
            src="/Frame 1707481117.png"
            className="w-full h-[400px]"
            width={2200}
            height={400}
            alt="homeImage"
          />
          <div>
            <Image
              src="/Mockup_Questions 2 (2).png"
              className=" absolute 2xl:w-[370px] xl:w-[350px] 2xl:h-[250px] xl:h-[230px] 2xl:top-[3558px] xl:top-[2886px] 2xl:left-[1030px] xl:left-[680px] "
              width={2200}
              height={400}
              alt="homeImage"
            />
            <h1 className="absolute  w-[300px] 2xl:text-[32px] xl:text-[30px] 2xl:top-[3810px] xl:top-[3140px] 2xl:left-[1060px] xl:left-[700px] text-center font-semibold text-[#FFFFFF] leading-[1]">
              Pay Bills Easily From Your Phone
            </h1>
            <p className="absolute 2xl:w-[500px] xl:w-[450px] 2xl:text-[16px] xl:text-[14px] 2xl:top-[3900px] xl:top-[3210px] 2xl:left-[950px] xl:left-[630px] text-center font-semibold text-[#FFFFFF]">
              Pay your electricity, internet, water, and mobile services
              directly from your phone in seconds—fast, simple, and secure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sectionc3;
