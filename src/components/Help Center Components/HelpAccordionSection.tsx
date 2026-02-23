"use client";

import { useState } from "react";
import AddIcon from "../../../public/icons/AddIcon";
import RemoveIcon from "../../../public/icons/RemoveIcon";

export default function HelpAccordionSection() {
  const [accordionIndex, setAccordionIndex] = useState<null | number>(null);

  const data = [
    {
      title: "How do I register for a Shikshya account?",
      detail:
        "Contact your school admin to get login credentials. For new schools, request a demo from our website and our team will set up your account and guide you through onboarding.",
    },
    {
      title: "What are the key features of the Shikshya platform?",
      detail:
        "Shikshya covers attendance, exams & gradebook, fee management, timetable, homework, parent-teacher communication, SMS & in-app notifications, HR & payroll, transport, and library. Everything runs in one place with role-based access for admins, teachers, students, and parents.",
    },
    {
      title: "Is Shikshya available as a mobile app?",
      detail:
        "Yes. We have dedicated mobile apps for students, teachers, and parents so you can check attendance, homework, fees, and announcements on the go. The student app is on the Play Store; iOS apps are coming soon.",
    },
    {
      title: "How can I reset my password if I forget it?",
      detail:
        "On the login screen, click “Forgot password,” enter your registered email or phone, and follow the link or OTP sent to you to set a new password. If you don’t receive it, contact your school admin or our support team.",
    },
    {
      title: "How do I add or edit my personal information in Shikshya?",
      detail:
        "After logging in, go to your profile or account settings. You can update contact details, photo, and preferences there. Some fields may be locked by your school admin; in that case, request changes through the admin or office.",
    },
    {
      title:
        "Can I receive notifications for important school events and announcements?",
      detail:
        "Yes. Shikshya sends alerts via SMS, in-app notifications, and email for events, holidays, exam schedules, fee reminders, and announcements. You can manage notification preferences in your account settings.",
    },
    {
      title:
        "What do I do if I encounter technical issues with the Shikshya platform?",
      detail:
        "Try refreshing the page or reinstalling the app. If the issue continues, contact your school’s Shikshya admin or email our support team with a short description and screenshot. We typically respond within 24 hours on working days.",
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
                indx == accordionIndex ? "md:h-[220px] sm:h-[200px] h-[180px] overflow-y-auto" : "h-0"
              }`}
            >
              <p className="text-text-medium rg:text-xs sm:text-xxs text-xxxs mt-10">
                {curr.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
