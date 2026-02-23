import Image from "next/image";
import StoreBadge from "../shared/StoreBadge";

import AppStoreDarkLogo from "../../../public/appstore_dark_logo.svg";
import PlayStoreDarkLogo from "../../../public/playstore_dark_logo.svg";
import FakeSchoolLogos from "../../../public/schools_fake_logo.svg";
import ShikshyaLogoDark from "../../../public/shikshya_logo_dark.svg";
import Mockups from "../../../public/mockups/laptop_tablet_mobile_mockup.svg";

export default function ClientSection() {
  return (
    <>
      <div className="flex flex-col items-center gap-2 md:py-[100px] py-[70px] w-full bg-brand-blue-light">
        <h4 className="text-brand-color sm:text-xs text-xxs">Our Clients</h4>
        <h2 className="text-text-dark md:text-lg text-rg font-semibold">
          Join Our Growing Family
        </h2>
        <p className="md:text-xs sm:text-xxs text-xxxs text-text-light lg:w-[60%] rg:w-[70%] sm:w-[80%] w-[90%] text-center">
          Experience a sense of belonging, connection, and shared success.
          Together, we build a community where your presence enriches and shapes
          our collective story. Join us and be a part of something extraordinary
        </p>
        <div className="flex flex-col w-full gap-10 items-center overflow-hidden pt-10">
          <div className="sm:w-[80%] w-[90%] flex flex-row justify-between ">
            <Image
              src={FakeSchoolLogos}
              alt="Fake School Logo"
              className="lg:w-[120px] rg:w-[100px] sm:w-[80px] w-[60px] md:block hidden"
            />
            <Image
              src={FakeSchoolLogos}
              alt="Fake School Logo"
              className="lg:w-[120px] rg:w-[100px] sm:w-[80px] w-[60px]"
            />
            <Image
              src={ShikshyaLogoDark}
              alt="Shikshya Dark Logo"
              width={500}
              height={500}
              className="lg:w-[300px] md:w-[230px] sm:w-[200px] w-[180px]"
            />
            <Image
              src={FakeSchoolLogos}
              alt="Fake School Logo"
              className="lg:w-[120px] rg:w-[100px] sm:w-[80px] w-[60px]"
            />
            <Image
              src={FakeSchoolLogos}
              alt="Fake School Logo"
              className="lg:w-[120px] rg:w-[100px] sm:w-[80px] w-[60px] md:block hidden"
            />
          </div>
          <div className="flex flex-row justify-between sm:w-[65%] w-[80%] mx-auto">
            <Image
              src={FakeSchoolLogos}
              alt="Fake School Logo"
              className="lg:w-[120px] rg:w-[100px] sm:w-[80px] w-[60px] md:block hidden"
            />
            <Image
              src={FakeSchoolLogos}
              alt="Fake School Logo"
              className="lg:w-[120px] rg:w-[100px] sm:w-[80px] w-[60px]"
            />
            <Image
              src={FakeSchoolLogos}
              alt="Fake School Logo"
              className="lg:w-[120px] rg:w-[100px] sm:w-[80px] w-[60px]"
            />
            <Image
              src={FakeSchoolLogos}
              alt="Fake School Logo"
              className="lg:w-[120px] rg:w-[100px] sm:w-[80px] w-[60px]"
            />
            <Image
              src={FakeSchoolLogos}
              alt="Fake School Logo"
              className="lg:w-[120px] rg:w-[100px] sm:w-[80px] w-[60px]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 py-10 w-full bg-white">
        <h4 className="text-brand-color sm:text-xs text-xxs">Our Clients</h4>
        <h2 className="text-text-dark md:text-lg text-rg font-semibold">
          Begin Your Journey Now
        </h2>
        <p className="md:text-xs sm:text-xxs text-xxxs text-text-light lg:w-[60%] rg:w-[70%] sm:w-[80%] w-[90%] text-center">
          Empower your entire educational community with dedicated applications
          for students, teachers, and parents. Streamline communication, enhance
          learning, and stay connected effortlessly.
        </p>
        <div className="flex flex-row lg:w-[70%] rg:w-[80%] w-[90%] sm:py-8 py-4 mx-auto justify-between items-center">
          <Image
            src={Mockups}
            alt="Shikshya Admin Mockup Image"
            width={2000}
            height={2000}
            className="w-[65%] object-contain md:block hidden"
          />
          <div className="flex w-full flex-col gap-5 items-center justify-center">
            <StoreBadge
              src={AppStoreDarkLogo}
              isDark
              className="px-[60px]"
              width={115}
              tooltipText="iOS app coming soon!"
              isClickable={false}
            />
            <StoreBadge
              src={PlayStoreDarkLogo}
              isDark
              className="px-[60px]"
              width={115}
              href="https://play.google.com/store/apps/details?id=app.shikshya.student&pcampaignid=web_share"
            />
          </div>
        </div>
      </div>
    </>
  );
}
