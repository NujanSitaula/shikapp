import Button from "@/components/shared/Button";
import NonErrorLayout from "@/layouts/NonErrorLayout";
import { Metadata } from "next";
import Shikshya_Card_Overlay from "../../../public/overlays/Shikshya_Card_Overlay";
import ContactFeature from "@/components/Contact Components/ContactFeature";
import FakeSchoolLogos from "../../../public/schools_fake_logo.svg";
import ShikshyaLogoDark from "../../../public/shikshya_logo_dark.svg";
import GraphImage from "../../../public/mockups/graph_mockups.png";
import SettingIcon from "../../../public/icons/SettingIcon";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Shikshya | Impacts",
};

export default function Page() {
  return (
    <NonErrorLayout>
      <div className="w-full rg:h-[600px] md:h-[500px] h-[400px] gap-4 flex flex-col bg-header-gradient rg:pt-[100px] sm:pt-[0px] rg:pb-12 sm:pb-8 xl:px-[12%] lg:px-[7%] px-[5%] items-start justify-center md:mt-0 mt-12">
        <p className="text-brand-color font-regular rg:text-xs text-xxs">
          Help Center
        </p>
        <h2 className="text-text-dark font-semibold rg:text-xl md:text-lg text-rg leading-[130%]">
          Making a Difference: Our Social Impact.
        </h2>
        <p className="text-text-light rg:text-sm md:text-xs xs:text-xxs md:w-2/3 w-[80%]">
          Welcome to our Help Center! We're here to provide you with the
          information and support you need to make the most of our services.
        </p>
        <Button
          title={"Explore Our Impact "}
          className={"md:w-[180px]"}
        ></Button>
      </div>
      <div className="flex flex-col md:gap-6 gap-3 md:py-12 py-8 items-center xl:px-[12%] lg:px-[7%] px-[5%] bg-background-color">
        <p className="text-brand-color text-xxs">The Shikshya Advantage</p>
        <h2 className="text-text-dark text-lg font-semibold">
          Our Mission and Values
        </h2>
        <p className="sm:text-xs text-xxs text-text-light lg:w-[60%] rg:w-[70%] sm:w-[80%] w-[90%] text-center">
          At Shikshya, we are on a mission to make a positive and lasting impact
          on society. Our core values are the compass that guides our journey
          toward a better world.
        </p>
        <div className="grid rg:grid-cols-2 grid-cols-1 gap-5">
          <div className="flex flex-col bg-white gap-4 py-6 pl-6 pr-[60px] rounded-lg relative">
            <Shikshya_Card_Overlay
              className="absolute right-0 top-0 z-[0]"
              color={"#F15C5C"}
            />
            <div className="flex flex-row items-center gap-4">
              <h3 className="font-medium text-sm text-text-dark">Our Mission </h3>
            </div>
            <p className="sm:text-xs text-xxs text-text-light">
              Experience the future of education with Shikshya's AI integration
              We are dedicated to. Our mission is more than just a statement;
              it's our driving force, motivating us to create meaningful social
              change.
            </p>
          </div>
          <div className="flex flex-col bg-white gap-4 py-6 pl-6 pr-[60px] rounded-lg relative">
            <Shikshya_Card_Overlay
              className="absolute right-0 top-0 z-[0]"
              color={"#F15C5C"}
            />
            <div className="flex flex-row items-center gap-4">
              <h3 className="font-medium text-sm text-text-dark">Values</h3>
            </div>
            <p className="sm:text-xs text-xxs text-text-light">
              Experience the future of education with Shikshya's AI integration
              We are dedicated to. Our mission is more than just a statement;
              it's our driving force, motivating us to create meaningful social
              change..
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start xl:px-[12%] lg:px-[7%] px-[5%] py-12 md:gap-5 gap-3  w-full bg-white">
        <p className="text-brand-color text-xxs">The Shikshya Advantage</p>
        <h2 className="text-text-dark text-lg font-semibold">Impact Stories</h2>
        <p className="sm:text-xs text-xxs text-text-medium lg:w-[70%] sm:w-[80%] w-[90%]">
          Our social impact isn't just a concept; it's a collection of inspiring
          stories that showcase the real difference we're making in the lives of
          individuals and communities. These stories exemplify the heart of our
          mission and the power of our values.
        </p>
        <div className="flex flex-col items-start xl:px-[12%] lg:px-[7%] px-[5%] py-5 md:gap-5 gap-3 w-full">
          <div>
            <h2 className="text-text-dark sm:text-md text-sm font-semibold sm:pb-3 pb-1">
              Empowering Education for All
            </h2>
            <p className="sm:text-xs text-xxs text-text-medium">
              One of our proudest moments was when we [provide a specific
              achievement or project]. This initiative allowed us to bring
              education to underserved communities, [briefly describe the
              impact, e.g., improving literacy rates]. Through this, we
              transformed the lives of countless individuals, opening doors to
              brighter futures.
            </p>
          </div>
          <div>
            <h2 className="text-text-dark text-md font-semibold pb-3">
              Supporting Local Entrepreneurs
            </h2>
            <p className="sm:text-xs text-xxs text-text-medium">
              Our commitment to local economies is evident in our collaboration
              with [local organization/business]. By providing support and
              resources to aspiring entrepreneurs, we helped [briefly describe
              the impact, e.g., create job opportunities and stimulate economic
              growth]. We believe that thriving communities begin with strong,
              local businesses.
            </p>
          </div>
          <div>
            <h2 className="text-text-dark text-md font-semibold pb-3">
              Environmental Sustainability
            </h2>
            <p className="sm:text-xs text-xxs text-text-medium">
              We're passionate about preserving the environment. Our
              sustainability initiatives have [briefly describe the impact,
              e.g., reduced carbon emissions, conserved resources]. We're not
              just advocating for a greener world; we're actively contributing
              to its creation.
            </p>
          </div>
          <div>
            <h2 className="text-text-dark text-md font-semibold pb-3">
              Empowering Youth
            </h2>
            <p className="sm:text-xs text-xxs text-text-medium">
              Our programs for young individuals have [briefly describe the
              impact, e.g., improved skills, empowered leadership]. By investing
              in the potential of youth, we're investing in a brighter future
              for society.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:gap-4 gap-2 md:py-12 py-8 items-center xl:px-[12%] lg:px-[7%] px-[5%] bg-background-color">
        <p className="text-brand-color text-xxs">The Shikshya Advantage</p>
        <h2 className="text-text-dark text-lg font-semibold">
          Key Achievements
        </h2>
        <p className="sm:text-xs text-xxs text-center text-text-light lg:w-[70%] sm:w-[80%] w-[90%]">
          At Shikshya, we are on a mission to make a positive and lasting impact
          on society. Our core values are the compass that guides our journey
          toward a better world.
        </p>
        <div className="flex w-full mt-5 rg:flex-row flex-col gap-6 items-center justify-between">
          <Image
            src={GraphImage}
            alt="Graph Image"
            width={2000}
            className="rg:w-[50%] md:w-[80%] sm:w-[90%]"
          />
          <div className="rg:flex grid rg:flex-col sm:grid-cols-2 grid-cols-1 rg:w-[40%] w-full md:gap-10 gap-5">
            {Array.from([, , , ,]).map((_, indx) => (
              <div className="flex flex-row md:gap-4 gap-2 items-center" key={indx}>
                <div className="bg-brand-color-medium p-[10px] rounded-full">
                  <SettingIcon color="#ffffff" width="30" height="30" />
                </div>
                <div>
                  <h2 className="font-medium rg:text-sm text-xs pb-1 text-text-dark">
                    Getting Started with Shikshya
                  </h2>
                  <p className="rg:text-xs text-xxs text-text-light">At Shikshya</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 md:py-12 py-8 w-full bg-white">
        <h4 className="text-brand-color sm:text-xs text-xxs">
          The Shikshya Advantage
        </h4>
        <h2 className="text-text-dark md:text-lg text-rg font-semibold">
          Partnering for Change
        </h2>
        <p className="text-xs text-text-light lg:w-[60%] rg:w-[70%] sm:w-[80%] w-[90%] text-center">
          At Shikshya, we are on a mission to make a positive and lasting impact
          on society. Our core values are the compass that guides our journey
          toward a better world.
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
      <ContactFeature />
    </NonErrorLayout>
  );
}
