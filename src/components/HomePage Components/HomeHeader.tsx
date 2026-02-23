import Image from "next/image";
import QuotationIcon from "../../../public/elements/QuotationElement";
import Button from "../shared/Button";
import StoreBadge from "../shared/StoreBadge";

import PlayStoreLightLogo from "../../../public/playstore_light_logo.svg";
import AppStoreLightLogo from "../../../public/appstore_light_logo.svg";
import Mockups from "../../../public/Mockups.png";
import { getHeaderData } from "@/actions";

export default async function HomeHeader() {
  let data;
  try {
    data = await getHeaderData();
  } catch (e) {
    data = null;
  }

  // Fallback data if API fails or returns null
  const headerData = data || {
    Subtitle: "Educational Technology Platform",
    Title: "Transform Your School with AI Technology",
    Description:
      "Revolutionize education with our comprehensive AI-powered platform designed for modern schools and institutions.",
    ButtonText: "Get Started",
  };

  return (
    <div className="w-full rg:h-[750px] sm:h-[680px] h-[600px] gap-12 flex flex-row bg-header-gradient rg:pt-[100px] sm:pt-[0px] rg:pb-12 sm:pb-8 xl:px-[12%] lg:px-[7%] px-[5%] items-center justify-between">
      <div className="flex flex-col gap-5 items-start justify-start">
        <p className="text-brand-color font-regular rg:text-xs text-xxs">
          {headerData.Subtitle}
        </p>
        <h2 className="text-text-dark font-semibold rg:text-xl md:text-lg text-rg leading-[130%]">
          {headerData.Title}
        </h2>
        <p className="text-text-light rg:text-sm md:text-xs xs:text-xxs">
          {headerData.Description}
        </p>
        <Button title={headerData.ButtonText} className={"md:w-[180px]"}></Button>
        <div className="flex flex-row  gap-3">
          <StoreBadge
            src={AppStoreLightLogo}
            className={""}
            innerClassName={"sm:w-[100px] w-[90px]"}
            tooltipText="iOS app coming soon!"
            isClickable={false}
          />
          <StoreBadge
            src={PlayStoreLightLogo}
            innerClassName={"sm:w-[100px] w-[90px]"}
            href="https://play.google.com/store/apps/details?id=app.shikshya.student&pcampaignid=web_share"
          />
        </div>
      </div>
      <QuotationIcon
        width="100"
        height="100"
        className="mb-[200px] rg:block hidden"
      />
      <Image
        src={Mockups}
        alt="Shikshya Admin Mockup Image"
        width={1000}
        height={1000}
        className="w-[40%] object-contain rg:block hidden"
      />
    </div>
  );
}
