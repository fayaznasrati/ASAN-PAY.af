"use client"
import React, { useState, useEffect, useCallback } from "react";

import featurescard from "@/app/data/featurescard";
import FeatureCard from "./FeatureCard";


const FeaturesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const getVisibleCards = () => {
    const prev = (activeIndex - 1 + featurescard.length) % featurescard.length;
    const next = (activeIndex + 1) % featurescard.length;
    return [prev, activeIndex, next];
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % featurescard.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + featurescard.length) % featurescard.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [handleNext]);

  const visibleIndices = getVisibleCards();

  return (
    <section className="pb-[100px] hidden xl:block px-[80px] bg-background mt-[100px] ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need in One Smart Wallet
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Manage payments, top-ups, bills, and transfers instantly — fast, 
secure, and always accessible.
          </p>
        </div>

        <div className="relative flex justify-center items-center min-h-[420px] overflow-hidden">
          {visibleIndices.map((cardIndex, position) => {
            const card = featurescard[cardIndex];
            const isCenter = position === 1;
            const isLeft = position === 0;

            return (
              <div
                key={card.id}
                className={`absolute transition-all duration-500 ease-in-out cursor-pointer ${
                  isCenter
                    ? "z-30 scale-100 translate-x-0"
                    : isLeft
                    ? "z-20 scale-90 -translate-x-[75%] "
                    : "z-20 scale-90 translate-x-[75%] "
                }`}
                onClick={() => {
                  if (!isCenter) {
                    isLeft ? handlePrev() : handleNext();
                  }
                }}
              >
                <FeatureCard
                  id={card.id}
                  image2={card.image2}
                  title={card.title}
                  desc={card.desc}
                  isActive={isCenter}
                />
              </div>
            );
          })}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {featurescard.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3  h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-[#2E8C7A] w-7 scale-125"
                  : "bg-[#162E4B] hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
