import Image from "next/image";
import Link from "next/link";
import Button from "./shared/Button";

import ShikshyaLogoDark from "../../public/shikshya_logo_dark.svg";
import FOOTER_LINKS from "@/constants/FooterLink";
import FaceBookIcon from "../../public/icons/FacebookIcon.svg";
import GoogleIcon from "../../public/icons/GoogleIcon.svg";
import AppleIcon from "../../public/icons/AppleIcon.svg";
import InstagramIcon from "../../public/icons/InstagramIcon.svg";

export default function Footer() {
  return (
    <div className="flex flex-col md:items-center items-start gap-2  py-10 xl:px-[12%] lg:px-[7%] px-[5%] w-full bg-white">
      <h2 className="text-text-dark lg:text-lg md:text-rg sm:text-md text-sm  font-bold">
        Ready to transform your school with AI Technology?
      </h2>
      <p className="md:text-xs sm:text-xxs text-xxxs text-text-light xl:w-[45%] lg:w-[50%] md:w-[60%] w-full md:text-center text-start">
        Let us help you take you from zero to serious business and beyond.
        <br />
        Our no-strings attached free trial lets you test our product today.
      </p>
      <Link href="/contact">
        <Button title="Request Demo" className={"py-[10px] md:my-5 my-3"} />
      </Link>
      <hr className="w-full h-[1px] bg-gray-400  rg:my-10 my-5" />
      <div className="flex rg:flex-row flex-col items-center w-full gap-[15%] justify-between">
        <div className="rg:w-1/2 w-full">
          <Image
            src={ShikshyaLogoDark}
            alt="Shikshya Admin Mockup Image"
            width={200}
            height={200}
            className="sm:w-[190px] w-[150px] object-contain"
          />
          <p className="md:text-xs text-xxs text-text-light pt-5 font-medium text-left">
            Design outstanding interfaces with advanced Figma features in a
            matter of minutes.
          </p>
        </div>
        <div className="w-full md:flex hidden flex-row  justify-between">
          {FOOTER_LINKS.map((curr, index) => (
            <div className="flex flex-col gap-2" key={index}>
              <h2 className="font-medium text-text-dark text-xs mb-1">
                {curr.title}
              </h2>
              {curr.links.map((link, linkIndex) => (
                <h2
                  className="font-regular text-xxs text-text-light"
                  key={linkIndex}
                >
                  {link}
                </h2>
              ))}
            </div>
          ))}
        </div>
        <div className="md:hidden mt-5 grid grid-cols-2 gap-4">
          {FOOTER_LINKS.map((curr, index) => (
            <div className="flex flex-col gap-[2px]" key={index}>
              <h2 className="font-medium text-text-dark text-xxs mb-[3px]">
                {curr.title}
              </h2>
              {curr.links.map((link, linkIndex) => (
                <h2
                  className="font-regular text-xxxs text-text-light"
                  key={linkIndex}
                >
                  {link}
                </h2>
              ))}
            </div>
          ))}
        </div>
      </div>
      <hr className="w-full h-[1px] bg-gray-400 my-5" />
      <div className="flex md:flex-row flex-col gap-3 w-full items-center justify-between">
        <h2 className="font-regular text-xxs text-text-light">
          © 2023 Shikshya. All Rights Reserved.
        </h2>
        <div className="flex items-center gap-4">
          <Image
            src={FaceBookIcon}
            alt="facebook icon"
            width={18}
            height={18}
          />
          <Image src={GoogleIcon} alt="google icon" width={18} height={18} />
          <Image src={AppleIcon} alt="apple icon" width={18} height={18} />
          <Image
            src={InstagramIcon}
            alt="instagram icon"
            width={18}
            height={18}
          />
        </div>
      </div>
    </div>
  );
}
