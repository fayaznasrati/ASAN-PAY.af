import { FaApple } from "react-icons/fa";
import Image from "next/image";
const Sectionb1 = () => {
  return (
    <section className=" relative max-w-screen-2xl mx-auto">
      <Image
        src="/Header 8 (4).png"
        className="w-full h-full hidden xl:block "
        width={2200}
        height={400}
        alt="homeImage"
      />
      <Image
        src="/Grid 2212.png"
        className="w-full h-full block xl:hidden"
        width={2200}
        height={400}
        alt="homeImage"
      />
      <h1 className="absolute 2xl:text-[350px] xl:text-[250px] xl:top-[10px] xl:left-[150px] font-bold  text-[105px] top-[95px] left-[18px] ">
        Contact{" "}
      </h1>
      <h1
        className="absolute 2xl:text-[350px] xl:text-[250px] 2xl:top-[300px] xl:top-[220px] 2xl:left-[1000px] xl:left-[750px] font-bold z-[99] text-[220px] top-[180px] 
      left-[130px]"
      >
        Us
      </h1>
      <Image
        src="/Rectangle copy 2.png"
        className=" absolute 2xl:w-[320px] xl:w-[220px] 2xl:h-[650px] xl:h-[450px] 2xl:top-[130px] xl:top-[80px] 2xl:left-[750px] xl:left-[580px] hidden xl:block  hidden xl:block"
        width={1000}
        height={400}
        alt="homeImage"
      />
      <Image
        src="/2 photo of recetngle.png"
        className="block xl:hidden mt-[-280px]"
        width={1000}
        height={400}
        alt="homeImage"
      />
      <Image
        src="/be77bf75-5c9a-4bcd-8ef7-3fe7e6603184 copy1 2.png"
        className=" absolute 2xl:w-[1000px] xl:w-[700px] 2xl:h-[750px] xl:h-[500px] 2xl:top-[245px] xl:top-[170px] 2xl:left-[270px] xl:left-[250px] z-[999] hidden xl:block"
        width={1000}
        height={400}
        alt="homeImage"
      />
      <div className=" absolute 2xl:top-[600px] xl:top-[400px] 2xl:left-[190px] xl:left-[160px]  ">
        <p className="2xl:text-[20px] xl:text-[16px] font-medium xl:px-[0] text-[#000000] 2xl:w-[400px] xl:w-[300px] text-[16px] px-[20px] ">
          Manage your money, send and receive payments, and shop online securely
          with Asan Pay — your all-in-one digital wallet. Fast, simple, and made
          for everyone.
        </p>
        <button className="cursor-pointer xl:px-[0] px-[25px]">
          <div className="flex  bg-[#090909] rounded-[9px] cursor-pointer xl:mt-[20px] mt-[40px] py-2 2xl:px-4 xl:px-3 px-5 items-center 2xl:mr-[25px] xl:mr-[10px] mr-[-20] ">
            <Image
              src="/Logo (1).png"
              width={2200}
              height={400}
              className="w-[28px] text-[#fff]  h-[40px] mr-[8px]"
              alt="homeImage"
            />
            <div>
              <p className="text-[12px] text-[#fff] text-left">Get it on</p>
              <h1 className="text-[#fff] ">Google Play</h1>
            </div>
          </div>
        </button>
        <button className=" cursor-pointer xl:px-[0] px-[25px]">
          <div className="flex gap-1 bg-[#090909] rounded-[9px] py-2 2xl:px-4 xl:px-3 px-5 items-center mt-[20px] ">
            <FaApple className="w-[40px] text-[#fff]  h-[40px]" />
            <div>
              <p className="text-[12px] text-[#fff] text-left">
                Download on the
              </p>
              <h1 className="text-[#fff] ">App Store</h1>
            </div>
          </div>
        </button>
      </div>
    </section>
  );
};
export default Sectionb1;
