import NonErrorLayout from "@/layouts/NonErrorLayout";
import Image from "next/image";
import HelpHeader from "../../../public/help_header.svg";
import StillHelp from "../../../public/still_need_help.svg";
import Button from "@/components/shared/Button";
import HelpAccordionSection from "@/components/Help Center Components/HelpAccordionSection";
import SettingIcon from "../../../public/icons/SettingIcon";
import PersonIcon from "../../../public/icons/PersonIcon";
import MobileIcon from "../../../public/icons/MobileIcon";
import SearchIcon from "../../../public/icons/SearchIcon";
import WarningIcon from "../../../public/icons/WarningIcon";
import CsutomerCareIcon from "../../../public/icons/CustomerCareIcon";
import QuestionIcon from "../../../public/icons/QuestionIcon";
import NavigateIcon from "../../../public/icons/NavigateIcon";

export default function Page() {
  const data = [
    {
      icon: <SettingIcon color="#ffffff" width="30" height="30" />,
      title: " Getting Started with Shikshya ",
      description:
        "If you're new to our platform, this section is the perfect place to begin. We'll guide you through the registration process, setting up your profile, and navigating the main features. ",
    },
    {
      icon: <PersonIcon color="#ffffff" width="30" height="30" />,
      title: "Managing Your Account",
      description:
        "Here, you'll find information on updating your profile, changing your password, and ensuring the security of your account.",
    },
    {
      icon: <MobileIcon color="#ffffff" width="30" height="30" />,
      title: "Using Shikshya Apps",
      description:
        "Learn how to download and use our mobile apps, whether you're a student, teacher, or parent. We'll walk you through key features and how to stay connected on the go.",
    },
    {
      icon: <SearchIcon color="#ffffff" width="30" height="30" />,
      title: "Exploring Our Mobile Apps",
      description:
        "Discover the various features and functions of our platform, from class schedules and assignments to communication tools. We'll help you make the most of our services.",
    },
    {
      icon: <WarningIcon color="#ffffff" width="30" height="30" />,
      title: "Troubleshooting Common Issues",
      description:
        "Experience the future of education with Shikshya's AI integration. Our intelligent systems enhance learning, providing insights and recommendations to optimize your educational journey.",
    },
    {
      icon: <CsutomerCareIcon color="#ffffff" width="30" height="30" />,
      title: "Contacting Our Support Team",
      description:
        "Experience the future of education with Shikshya's AI integration. Our intelligent systems enhance learning, providing insights and recommendations to optimize your educational journey.",
    },
    {
      icon: <QuestionIcon color="#ffffff" width="30" height="30" />,
      title: "Frequently Asked Questions",
      description:
        "Experience the future of education with Shikshya's AI integration. Our intelligent systems enhance learning, providing insights and recommendations to optimize your educational journey.",
    },
    {
      icon: <NavigateIcon color="#ffffff" width="30" height="30" />,
      title: "In-Depth User Guides",
      description:
        "Experience the future of education with Shikshya's AI integration. Our intelligent systems enhance learning, providing insights and recommendations to optimize your educational journey.",
    },
  ];

  return (
    <NonErrorLayout>
      <div className="w-full lg:h-[600px] md:h-[500px] sm:h-[300px] h-[250px] gap-12 flex flex-row bg-header-gradient rg:pt-[100px] sm:pt-[0px] md:mt-0 mt-[50px] rg:pb-12 sm:pb-8 xl:px-[12%] lg:px-[7%] px-[5%] items-center justify-between">
        <div className="flex flex-col gap-5 items-start justify-start">
          <p className="text-brand-color font-regular rg:text-xs sm:text-xxs text-xxxs">
            Help Center
          </p>
          <h2 className="text-text-dark font-semibold rg:text-xl md:text-lg sm:text-rg text-md leading-[130%]">
            How Can We Help ?
          </h2>
          <p className="text-text-light rg:text-xs sm:text-xxs text-xxxs">
            Welcome to our Help Center! We're here to provide you with the
            information and support you need to make the most of our services.{" "}
          </p>
        </div>
        <Image
          src={HelpHeader}
          alt="Help Header Image"
          width={1000}
          height={1000}
          className="w-[40%] object-contain rg:block hidden"
        />
      </div>
      <div className="w-full flex flex-col gap-5 xl:px-[12%] lg:px-[7%] px-[5%] py-16 items-center justify-between bg-background-color">
        <div className="w-full grid rg:grid-cols-2 grid-cols-1 gap-5">
          {data.map((curr, indx) => (
            <div
              className="w-full flex sm:flex-row flex-col md:gap-6 gap-3 bg-white group cursor-pointer rounded-md p-5 items-center"
              key={indx}
            >
              <div className="bg-brand-color-medium p-2 rounded-full">
                {curr.icon}
              </div>
              <div className="flex flex-col sm:items-start items-center md:gap-3 gap-2">
                <h3 className="font-medium lg:text-sm md:text-xs text-xxs text-text-dark transition-colors duration-300 ease-in-out group-hover:text-brand-color">
                  {curr.title}
                </h3>
                <p className="text-text-light rg:text-xs sm:text-xxs text-xxxs sm:text-left text-center">
                  {curr.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <HelpAccordionSection />
      <div className="w-full h-full py-10 gap-12 flex flex-row bg-background-color  xl:px-[12%] lg:px-[7%] px-[5%] items-center justify-between">
        <div className="flex flex-col gap-5 items-start justify-start">
          <h2 className="text-text-dark font-semibold rg:text-[35px] md:text-lg sm:text-rg text-sm leading-[130%]">
            Still Have Questions? We're Here to Help!
          </h2>
          <p className="text-text-light rg:text-xs sm:text-xxs text-xxxs">
            If you couldn't find the answers you were looking for, don't worry.
            Our dedicated support team is just a message or call away. Reach out
            with any questions or concerns, and we'll provide the assistance you
            need for a seamless experience.
          </p>
          <Button title="Contact Us" />
        </div>
        <Image
          src={StillHelp}
          alt="Help Header Image"
          width={1000}
          height={1000}
          className="w-[40%] object-contain rg:block hidden"
        />
      </div>
    </NonErrorLayout>
  );
}
