"use client";

import { useState } from "react";
import AddIcon from "../../../public/icons/AddIcon";
import RemoveIcon from "../../../public/icons/RemoveIcon";

export default function HelpAccordionSection() {
  const [accordionIndex, setAccordionIndex] = useState<null | number>(null);

  const data = [
    {
      title: "How do I register for a Shikshya account?",
      detail: `To register for a Shikshya account, click on the "Register" or
        "Sign Up" button on the login page. Follow the on-screen
        instructions to provide the required information and complete the
        registration process`,
    },
    {
      title: "What are the key features of the Shikshya platform? ",
      detail: `To register for a Shikshya account, click on the "Register" or
          "Sign Up" button on the login page. Follow the on-screen
          instructions to provide the required information and complete the
          registration process`,
    },
    {
      title: "Is Shikshya available as a mobile app?",
      detail: `To register for a Shikshya account, click on the "Register" or
          "Sign Up" button on the login page. Follow the on-screen
          instructions to provide the required information and complete the
          registration process`,
    },
    {
      title: "How can I reset my password if I forget it?",
      detail: `To register for a Shikshya account, click on the "Register" or
          "Sign Up" button on the login page. Follow the on-screen
          instructions to provide the required information and complete the
          registration process`,
    },
    {
      title: "How do I add or edit my personal information in Shikshya?",
      detail: `To register for a Shikshya account, click on the "Register" or
          "Sign Up" button on the login page. Follow the on-screen
          instructions to provide the required information and complete the
          registration process`,
    },
    {
      title:
        "Can I receive notifications for important school events and announcements? ",
      detail: `To register for a Shikshya account, click on the "Register" or
          "Sign Up" button on the login page. Follow the on-screen
          instructions to provide the required information and complete the
          registration process`,
    },
    {
      title:
        "What do I do if I encounter technical issues with the Shikshya platform?",
      detail: `To register for a Shikshya account, click on the "Register" or
            "Sign Up" button on the login page. Follow the on-screen
            instructions to provide the required information and complete the
            registration process`,
    },
  ];

  return (
    <div className="w-full flex flex-col md:gap-5 gap-3 xl:px-[12%] lg:px-[7%] px-[5%] py-14 items-center justify-between">
      <p className="text-brand-color font-regular rg:text-xs sm:text-xxs text-xxxs">
        FAQs: Your Instant Knowledge Base
      </p>
      <h2 className="text-white font-semibold rg:text-[32px] md:text-lg sm:text-rg text-sm text-center">
        Frequently Asked Questions
      </h2>
      <p className="text-text-light rg:text-xs text-center rg:w-1/2 w-3/2 sm:text-xxs text-xxxs">
        Browse through our collection of frequently asked questions to find
        quick answers to common queries.
      </p>
      <div className="flex flex-col rg:w-[82%] w-full gap-5 mt-5">
        {data.map((curr, indx) => (
          <div
            className="flex flex-col px-5 py-6 bg-background-color w-full group cursor-pointer"
            key={indx}
            onClick={() => {
              if (indx != accordionIndex) {
                setAccordionIndex(indx);
              } else {
                setAccordionIndex(null);
              }
            }}
          >
            <div className="flex flex-row w-full justify-between">
              <h3 className="font-medium lg:text-sm md:text-xs text-xxs text-text-dark transition-colors duration-300 ease-in-out group-hover:text-brand-color">
                {curr.title}
              </h3>

              {indx == accordionIndex ? <RemoveIcon /> : <AddIcon />}
            </div>
            <div
              className={`w-full overflow-clip accordion-tab ${
                indx == accordionIndex ? "md:h-[100px] sm:h-[120px] h-[130px]" : "h-0"
              }`}
            >
              <p className="text-text-medium rg:text-xs sm:text-xxs text-xxxs mt-10">
                To register for a Shikshya account, click on the "Register" or
                "Sign Up" button on the login page. Follow the on-screen
                instructions to provide the required information and complete
                the registration process
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
