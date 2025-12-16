"use client";

import { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Section2 from "@/app/data/Section2";


export default function ServiceSlider() {
 

  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [loadedImages, setLoadedImages] = useState(
    Array(8).fill(false)
  );



  const settings = {
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: true,
    pauseOnHover: true,
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
   
  };

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  return (
    <section className="w-full xl:hidden py-4 mb-[1rem] px-[1rem] md:px-[8rem] max-w-screen-2xl mx-auto select-none">
      <div className="mx-auto w-full">
        <Slider {...settings}>
          {Section2.map((item, index) => (
            <div key={item.id} className="flex justify-center p-1 md:p-2">
              <div className="flex items-center justify-center">
                
                <div
                  className="items-center md:p-4  w-full hover:text-white p-7 shadow-md hover:bg-[#e9e9e9] gap-1  border-[#E0E0E0] cursor-pointer justify-center flex flex-col border-[1px] rounded-[1rem]"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(-1)}
                >
                          <div className="w-[80px] h-[80px] p-5 rounded-full bg-[#F6F2FD]">
                    <Image
                      width={200}
                      height={200}
                      alt="service"
                      className="w-full h-full object-cover"
                      src={item.image}
                      onLoad={() => handleImageLoad(index)}
                      
                    /></div>
                  <h3 className={`text-center min-h-[80px] py-3 text-[22px] text-[#000000] md:font-medium`}>
                    {item.title}
                  </h3>
                  <p className="text-[14px]  flex-1 mx-0 text-[#5B5B5B]">{item.desc}</p>
                  <div className="w-[40px] md:w-[60px] relative">
                    {!loadedImages[index] && (
                      <div className="skeleton w-full h-full absolute top-0 left-0 rounded-md z-10"></div>
                    )}
            
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}