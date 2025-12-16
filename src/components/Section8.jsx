"use client"

import Section8Data from "@/app/data/Section8Data";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import { FaStar } from "react-icons/fa";
import Section8Data2 from "@/app/data/Section8Data2";

const Section8 = () => {
    const settings = {
    autoplay: true,
    autoplaySpeed: 0,
    infinite: true,
    cssEase: "linear",
    speed: 5000,
    slidesToShow: 4, 
    slidesToScroll: 1, 
    responsive: [
        {
        breakpoint: 1440, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
         {
        breakpoint: 1280, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
   const settings1 = {
    autoplay: true,
    autoplaySpeed: 0,
    infinite: true,
    cssEase: "linear",
    rtl: true,
    speed: 5000,
    slidesToShow: 4, 
    slidesToScroll: 1, 
    responsive: [
       {
        breakpoint: 1440, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
         {
        breakpoint: 1280, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

    return (
        <div className="w-full py-4 mb-[4rem] mt-[100px] hidden xl:block  max-w-screen-2xl mx-auto select-none">
            <div className="w-full mb-[4rem]">
                <h1 className="text-[42px] font-semibold text-center mb-5">
                    What Our Happy User Says
                </h1>
                <p className="text-[18px] text-center text-[#71717A]">
                    Here’s what people are saying about ASAN-PAY 
                </p>
            </div>
            <div className="relative">
            <div className="absolute top-0 right-0  bottom-0 z-[999] ">
            <Image
            width={600}
            height={600}
            className="w-[300px] h-[400px]"
            alt="qurbanit shawam o bacha"
            src="/fade.png"/>
            </div>
            <div className="absolute top-0 left-0 bottom-0  z-[999] ">
            <Image
            width={600}
            height={600}
            className="w-[300px] h-[400px]"
            alt="qurbanit shawam o bacha"
            src="/fade2.png"/>
            </div>
            <div className="mx-auto  w-full">
        <Slider {...settings}>
          {Section8Data.map((item) => (
            <div key={item.id} className="flex justify-center p-4">
              <div className=" border cursor-grab hover:bg-gray-100 bg-[#09090B33]/10 p-4 border-[#09090B1A] rounded-[12px] ">
                <div className="flex flex-col gap-1    ">
                  <div className="flex  gap-2 flex-row items-center ">
                    <div className=" w-[40px] ">
                      <Image
                        className="object-contain"
                        height={200}
                        width={400}
                        alt="testomonials"
                        src={item.image}
                        loading="lazy"
                      />
                    </div>
                    <div>
                    <h3 className="text-[16px] text-[#383141] font-semibold text-center">
                      {item.title}
                    </h3>
                    <div className="flex gap-1">
                    <FaStar className="text-[#FFA41B] w-[13px]" />
                    <FaStar className="text-[#FFA41B] w-[13px]"/>
                    <FaStar className="text-[#FFA41B] w-[13px]"/>
                    <FaStar className="text-[#FFA41B] w-[13px]"/>
                    <FaStar className="text-[#FFA41B] w-[13px]"/>
                    </div>
                    </div>
                  </div>
                  <p className="text-[14px] font-normal text-[#383141]">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
           <div className="mx-auto  w-full">
        <Slider {...settings1}>
          {Section8Data2.map((item) => (
            <div key={item.id} className="flex justify-center p-4">
              <div className=" border cursor-grab hover:bg-gray-100 bg-[#09090B33]/10 p-4 border-[#09090B1A] rounded-[12px] ">
                <div className="flex flex-col gap-1    ">
                  <div className="flex  gap-2 flex-row items-center ">
                    <div className=" w-[40px] ">
                      <Image
                        className="object-contain"
                        height={200}
                        width={400}
                        alt="testomonials"
                        src={item.image}
                        loading="lazy"
                      />
                    </div>
                    <div>
                    <h3 className="text-[16px] text-[#383141] font-semibold text-center">
                      {item.title}
                    </h3>
                    <div className="flex gap-1">
                    <FaStar className="text-[#FFA41B] w-[13px]" />
                    <FaStar className="text-[#FFA41B] w-[13px]"/>
                    <FaStar className="text-[#FFA41B] w-[13px]"/>
                    <FaStar className="text-[#FFA41B] w-[13px]"/>
                    <FaStar className="text-[#FFA41B] w-[13px]"/>
                    </div>
                    </div>
                  </div>
                  <p className="text-[14px] font-normal text-[#383141]">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
</div>
        </div>
    )
}

export default Section8