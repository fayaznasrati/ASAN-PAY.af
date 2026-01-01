import Image from "next/image";

const Section3rf = () => {
  return (
    <div>
      <h1 className="text-[#000000] font-semibold mt-[100px] text-[28px] w-full text-center block xl:hidden  px-[30px]">
        Send your money with <br></br>one click!
      </h1>
      <p className="text-[#000000] mt-[30px] text-[16px]  w-full text-center  px-1 mb-[60px] block xl:hidden px-[30px] ">
        The point of using Lorem Ipsum is that it has a more-or-less normal
        distribution of letters, as opposed.
      </p>
      <Image
        src="/Frame 3rf.png"
        width={2200}
        height={400}
        className="w-[366px] text-[#fff]  h-[243px] ml-[30px] block xl:hidden"
        alt="homeImage"
      />
      <h1 className="text-[#000000] font-semibold mt-[100px] text-[28px] w-full text-center block xl:hidden px-[30px] ">
        Invest smartly and reap rewards.
      </h1>
      <p className="text-[#000000] mt-[30px] text-[16px]  w-full text-center  px-1 mb-[60px] block xl:hidden px-[30px] ">
        our financial advisors are here to listen, analyze, and provide
        strategic recommendations.
      </p>
      <Image
        src="/Frame 3rf2.png"
        width={2200}
        height={400}
        className="w-[366px] text-[#fff]  h-[342px] ml-[30px] block xl:hidden"
        alt="homeImage"
      />
      <h1 className="text-[#000000] font-semibold mt-[100px] text-[28px] w-full text-center block xl:hidden  px-[30px]">
        Pay Bills Easily From Your Phone
      </h1>
      <p className="text-[#000000] mt-[30px] text-[16px]  w-full text-center  px-1 mb-[60px] block xl:hidden  ">
        Pay your electricity, internet, water, and mobile services directly from
        your phone in seconds—fast, simple, and secure.
      </p>
      <Image
        src="/Frame 3rf3.png"
        width={2200}
        height={400}
        className="w-[366px] text-[#fff]  h-[243px] ml-[30px] block xl:hidden mb-[100px]"
        alt="homeImage"
      />
    </div>
  );
};

export default Section3rf;
