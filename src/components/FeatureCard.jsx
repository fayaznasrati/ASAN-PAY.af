import React from "react";
import Image from "next/image";

// const iconMap = {
//   "Global Payments": Globe,
//   "Analytics Dashboard": BarChart3,
//   "Secure Transactions": Shield,
//   "Instant Transfers": Zap,
//   "Multi-Currency": ArrowRightLeft,
//   "Team Management": Users,
//   "Digital Wallet": Wallet,
//   "Smart Cards": CreditCard,
// };

const FeatureCard = ({ id, image2, title, desc, isActive = false }) => {
//   const IconComponent = iconMap[title] || CreditCard;

  return (
    <div
      className={`relative rounded-2xl p-15 transition-all duration-500 ${
        isActive
          ? "bg-[url('/Group9.png')] bg-cover  min-h-[430px] w-[350px]"
          : "bg-[url('/Group9.png')] bg-cover  min-h-[430px] w-[350px] "
      }`}
    >
      <div
        className={` rounded-xl flex items-center justify-center mb-6 ${
          isActive
            ? "bg-primary/10"
            : "bg-muted"
        }`}
      >
        <div
          className={`w-[75px] p-2 h-[75px] mt-[10px] ${
            isActive
? "bg-[url('/Rectangle3(2).png')] bg-cover "
          : "bg-[url('/Rectangle3(2).png')] bg-cover  "
          }`}
        >
            <Image width={100} height={100} src={image2} alt="image" />
            </div>
      </div>

      <h3
        className={`text-[26px] text-[#FFFFFF] font-bold mb-3 text-center ${
          isActive ? "text-[#FFFFFF]" : "text-[#FFFFFF] "
        }`}
      >
        {title}
      </h3>

      <p
        className={`text-sm leading-relaxed mb-6 text-[14px] text-[#FFFFFF]/75 font-bold text-center ${
          isActive ? "text-muted-foreground" : "text-muted-foreground/70"
        }`}
      >
        {desc}
      </p>
      <div className="w-full flex justify-center">
      <button className=" rounded-[10px] px-8 py-2 bg-[#D9D9D9]/15 text-center text-[#FFFFFF] text-[16px]">
        Learn More
      </button></div>
    </div>
  );
};

export default FeatureCard;
