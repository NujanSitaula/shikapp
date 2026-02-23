import Button from "@/components/shared/Button";
import NonErrorLayout from "@/layouts/NonErrorLayout";
import AIIcon from "../../../public/icons/AIIcon";

import { Metadata } from "next";
import Shikshya_Card_Overlay from "../../../public/overlays/Shikshya_Card_Overlay";

export const metadata: Metadata = {
  title: "Shikshya | Features",
};

export default function Page() {
  return (
    <NonErrorLayout>
      <div className="w-full rg:h-[600px] md:h-[500px] h-[400px] gap-4 flex flex-col bg-header-gradient rg:pt-[100px] sm:pt-[0px] rg:pb-12 sm:pb-8 xl:px-[12%] lg:px-[7%] px-[5%] items-start justify-center md:mt-0 mt-12">
        <p className="text-brand-color font-regular rg:text-xs text-xxs">
          Features of Shikshya
        </p>
        <h2 className="text-text-dark font-semibold rg:text-xl md:text-lg text-rg leading-[130%]">
          Features: Shikshya
        </h2>
        <p className="text-text-light rg:text-sm md:text-xs xs:text-xxs md:w-2/3 w-[80%]">
          Welcome to our Help Center! We're here to provide you with the
          information and support you need to make the most of our services.{" "}
        </p>
        <Button
          title={"Explore Our Impact "}
          className={"md:w-[180px]"}
        ></Button>
      </div>
      <div className="flex flex-col gap-8 pt-12 items-center xl:px-[12%] lg:px-[7%] px-[5%] bg-background-color">
        <h2 className="text-text-dark text-lg font-semibold">Automation</h2>
        <p className="sm:text-xs text-xxs text-text-light lg:w-[60%] rg:w-[70%] sm:w-[80%] w-[90%] text-center">
          At Shikshya, we are on a mission to make a positive and lasting impact
          on society. Our core values are the compass that guides our journey
          toward a better world.
        </p>
        <div className="grid rg:grid-cols-2 grid-cols-1 gap-5">
          {Array.from([, , , , , ,]).map((curr, indx) => (
            <div
              className="flex flex-col bg-white gap-4 py-6 pl-6 pr-[60px] rounded-lg relative"
              key={indx}
            >
              <Shikshya_Card_Overlay
                className="absolute right-0 top-0 z-[0]"
                color={"#F15C5C"}
              />
              <div className="flex flex-row items-center gap-4">
                <div className="bg-brand-color-medium p-2 rounded-full">
                  <AIIcon />
                </div>
                <h3 className="font-medium text-sm text-text-dark">AI Integrated</h3>
              </div>
              <p className="sm:text-xs text-xxs text-text-light">
                Experience the future of education with Shikshya's AI
                integration. Our intelligent systems enhance learning, providing
                insights and recommendations to optimize your educational
                journey.We are dedicated to briefly describe your mission.
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-8 pt-12 items-center xl:px-[12%] lg:px-[7%] px-[5%] bg-background-color">
        <h2 className="text-text-dark text-lg font-semibold">Automation</h2>
        <p className="sm:text-xs text-xxs text-text-light lg:w-[60%] rg:w-[70%] sm:w-[80%] w-[90%] text-center">
          At Shikshya, we are on a mission to make a positive and lasting impact
          on society. Our core values are the compass that guides our journey
          toward a better world.
        </p>
        <div className="grid rg:grid-cols-2 grid-cols-1 gap-5">
          {Array.from([, , , , , ,]).map((curr, indx) => (
            <div
              className="flex flex-col bg-white gap-4 py-6 pl-6 pr-[60px] rounded-lg relative"
              key={indx}
            >
              <Shikshya_Card_Overlay
                className="absolute right-0 top-0 z-[0]"
                color={"#5C7DF1"}
              />
              <div className="flex flex-row items-center gap-4">
                <div className="bg-[#5C7DF1] p-2 rounded-full">
                  <AIIcon />
                </div>
                <h3 className="font-medium text-sm text-text-dark">AI Integrated</h3>
              </div>
              <p className="sm:text-xs text-xxs text-text-light">
                Experience the future of education with Shikshya's AI
                integration. Our intelligent systems enhance learning, providing
                insights and recommendations to optimize your educational
                journey.We are dedicated to briefly describe your mission.
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-8 py-12 items-center xl:px-[12%] lg:px-[7%] px-[5%] bg-background-color">
        <h2 className="text-text-dark text-lg font-semibold">Automation</h2>
        <p className="sm:text-xs text-xxs text-text-light lg:w-[60%] rg:w-[70%] sm:w-[80%] w-[90%] text-center">
          At Shikshya, we are on a mission to make a positive and lasting impact
          on society. Our core values are the compass that guides our journey
          toward a better world.
        </p>
        <div className="grid rg:grid-cols-2 grid-cols-1 gap-5">
          {Array.from([, , , , , ,]).map((curr, indx) => (
            <div
              className="flex flex-col bg-white gap-4 py-6 pl-6 pr-[60px] rounded-lg relative"
              key={indx}
            >
              <Shikshya_Card_Overlay
                className="absolute right-0 top-0 z-[0]"
                color={"#B25CF1"}
              />
              <div className="flex flex-row items-center gap-4">
                <div className="bg-[#B25CF1] p-2 rounded-full">
                  <AIIcon />
                </div>
                <h3 className="font-medium text-sm text-text-dark">AI Integrated</h3>
              </div>
              <p className="sm:text-xs text-xxs text-text-light">
                Experience the future of education with Shikshya's AI
                integration. Our intelligent systems enhance learning, providing
                insights and recommendations to optimize your educational
                journey.We are dedicated to briefly describe your mission.
              </p>
            </div>
          ))}
        </div>
      </div>
    </NonErrorLayout>
  );
}
