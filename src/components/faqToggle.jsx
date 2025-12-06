'use client';
import { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
const FaqToggle = ({  heading, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    
    <div className={`px-4 py-2 text-gray-800 transition-colors duration-300 mb-4  rounded-[18px] ${isOpen ? 'bg-[#FFFFFF] dark:bg-[#222222] border-[2px] border-[#96C78B]' : 'bg-[#FFFFFF] border-[#E0E0E0] border'}`}>
        
      <div className="flex justify-between items-center cursor-pointer" onClick={handleToggle}>
        <div className="flex items-center gap-4">
          <span className="md:text-[18px] 2xl:text-[20px] sm:text-[14px] dark:text-[#F1FEF7] font-semibold">{heading}</span>
        </div>
        <button className="p-2 transition-transform duration-200">
          {isOpen ? <IoIosArrowUp className="w-6 h-6 p-1 cursor-pointer rounded-[50%] bg-[#FFFFFF]" /> : <IoIosArrowForward className="w-6 h-6 p-1 cursor-pointer rounded-[50%] bg-[#FFFFFF]" />}
        </button>
      </div>
      {isOpen && <div className="mt-4 transition-colors dark:text-[#ABABAB] xl:text-[16px] 2xl:text-[18px] duration-300">{children}</div>}
    </div>
  );
};

export default FaqToggle;