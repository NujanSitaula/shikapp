"use client";

import { useState, useCallback, useRef } from "react";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Button from "@/components/shared/Button";

export default function PlanSection() {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const sliderRef = useRef<Slider>(null);

  const changeIndex = useCallback((i: number) => {
    setTabIndex(i);
    if (sliderRef.current) {
      sliderRef.current?.slickGoTo(i);
    }
  }, []);

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    pauseOnHover: false,
    draggable: true,
    arrows: true,
    beforeChange: (_: number, newIndex: number) => {
      setTabIndex(newIndex);
    },
  };

  const data = [
    {
      level: "Basic",
      price: "Free",
      isFree: false,
      
    },
  ];

  return (
    <div className="w-full bg-background-color flex flex-col gap-14 items-start xl:px-[12%] lg:px-[7%] px-[5%] rg:py-14 py-6">
      <div className="flex flex-col rg:w-[60%] w-[100%] gap-3">
        <p className="text-brand-color font-regular rg:text-xs sm:text-xxs text-xxxs">
          Product Insight
        </p>
        <h3 className="text-text-dark font-semibold rg:text-[32px] md:text-rg sm:text-md text-sm leading-[130%]">
          Flexible Pricing for Every Educational Need
        </h3>
        <p className="text-text-light rg:text-sm md:text-xs sm:text-xxs text-xxxs">
          Choose a plan that aligns with your institution's size and
          requirements.
        </p>
      </div>
      <div className="flex flex-row mx-auto p-2 gap-2 bg-white shadow-lg rounded-full mt-1">
        <button
          className={`${
            tabIndex === 0
              ? "bg-brand-color text-white"
              : "bg-white text-text-medium hover:bg-[rgb(223,43,39,0.3)] ease-in-out duration-500"
          } py-1 px-5 rounded-full lg:text-xs md:text-xxs text-xxxs font-regular `}
          onClick={() => {
            changeIndex(0);
          }}
        >
          Monthly
        </button>
        <button
          className={`${
            tabIndex === 1
              ? "bg-brand-color text-white"
              : "bg-white text-text-medium hover:bg-[rgb(223,43,39,0.3)] ease-in-out duration-500"
          } py-1 px-5 rounded-full lg:text-xs md:text-xxs text-xxxs font-regular `}
          onClick={() => {
            changeIndex(1);
          }}
        >
          Yearly{" "}
          <span
            className={`text-xxxs ${
              tabIndex != 1 ? "text-[#009A29]" : "text-white"
            }`}
          >
            30%
          </span>
        </button>
      </div>
      <div className="overflow-clip w-full overflow-x-hidden flex flex-row relative">
        <Slider {...settings} className="overflow-hidden" ref={sliderRef}>
          <div key={0}>
            <div className="grid grid-cols-4 w-full">
              {Array.from([, , , ,]).map((_, indx) => (
                <div
                  className="flex flex-col items-center bg-white px-4 py-6 rounded-md gap-4"
                  key={indx}
                >
                  <h4 className="font-medium text-lg">Basic</h4>
                  <h1 className="font-semibold text-[30px]">20,000 / month</h1>
                  <p className="w-[90%] text-center text-text-medium rg:text-xxs text-xxxs">
                    Ideal for small schools or individual educators.
                  </p>
                  <Button
                    title="Get Started"
                    vairant="outline"
                    className={"w-2/3"}
                  />
                </div>
              ))}
            </div>
          </div>
          <div key={1}>
            <h1>Hello 1</h1>
          </div>
        </Slider>
      </div>
    </div>
  );
}
