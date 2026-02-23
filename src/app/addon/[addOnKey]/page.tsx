import NonErrorLayout from "@/layouts/NonErrorLayout";
import AddOnHeader from "../components/AddOnHeader";
import Image from "next/image";
import PixelTrueMockUp from "../../../../public/pixel_true_mockup.png";
import Button from "@/components/shared/Button";
import AddonMockup from "../../../../public/addon_mockup.svg";
import ScribbleArrow from "../../../../public/elements/Scribble_Arrow.svg";
import MultiApplicationFeatureCard from "@/components/MultiApplicationFeatureCard";
import PlanSection from "../components/PlanSection";

export default function Page() {
  return (
    <NonErrorLayout>
      <AddOnHeader />
      <div className="w-full h-full bg-background-color flex flex-row gap-14 items-center justify-between rg:py-14 py-6 xl:px-[12%] lg:px-[7%] px-[5%]">
        <Image
          src={PixelTrueMockUp}
          width={400}
          height={400}
          alt="Pixel Mockup"
          className="w-[35%] rg:block hidden"
        />
        <div className="flex flex-col gap-5 items-start justify-start rg:w-[50%] w-full">
          <p className="text-brand-color font-regular rg:text-xs sm:text-xxs text-xxxs">
            The Shikshya Advantage
          </p>
          <h2 className="text-text-dark font-semibold rg:text-[32px] md:text-rg sm:text-md text-sm leading-[130%]">
            Discover Shikshya: Redefining Educational Solutions
          </h2>
          <p className="text-text-light rg:text-sm md:text-xs sm:text-xxs text-xxxs">
            Shikshya isn't just an ordinary school management system; it's a
            catalyst for a new era of education. With user-friendly interfaces,
            AI integration, and a multi-application approach, Shikshya
            simplifies ad ministrative tasks and fosters an environment where
            learning knows no bounds. It's where innovation and education
            converge to create a unique platform that benefits students,
            teachers, and parents alike.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center rg:py-14 py-6 xl:px-[12%] lg:px-[7%] px-[5%]">
        <div className="flex flex-col items-start w-[100%] gap-3  xl:pb-10 lg:pb-9 rg:pb-8 md:pb-7 sm:pb-6 pb-5">
          <p className="text-brand-color font-regular rg:text-xs sm:text-xxs text-xxxs">
            The Shikshya Advantage
          </p>
          <h3 className="text-text-dark font-semibold rg:text-[32px] md:text-rg sm:text-md text-sm leading-[130%]">
            Discover Shikshya: Redefining <br />
            Educational Solutions
          </h3>
        </div>
        <div className="rg:flex hidden flex-row rg:gap-0 gap-4 w-full items-stretch relative">
          <div className="flex flex-col justify-end gap-[20%]">
            <MultiApplicationFeatureCard
              className="w-[100%]"
              bgColor="#DEE4F4"
              color="#4A4973"
              title="Interactive Learning"
              description="AI adapts to each student's learning style, pace, and preferences, offering a truly personalized educational experience."
            />
            <MultiApplicationFeatureCard
              className="w-[100%] mb-20"
              bgColor="#F4F1E2"
              color="#EAD795"
              title="Progress Tracking"
              description="AI algorithms track student progress and adjust teaching strategies accordingly."
            />
          </div>
          <Image
            src={AddonMockup}
            alt="Addon Mockup"
            width={700}
            height={700}
            className="w-[43%] rg:block hidden"
          />
          <Image
            src={ScribbleArrow}
            alt="Scribble Arrow"
            className="xl:block hidden w-[6vw] absolute right-[23%] bottom-[7vw]"
          />
          <div className="flex flex-col justify-start gap-[20%]">
            <MultiApplicationFeatureCard
              className="w-[100%]"
              bgColor="#F2E9E4"
              color="#C39D9A"
              title="Real-Time Feedback"
              description="Instant, AI-driven feedback on assignments and quizzes, helping students understand concepts more quickly."
            />
            <MultiApplicationFeatureCard
              className="w-[100%]"
              bgColor="#F3E8F9"
              color="#B48AC9"
              title="Engagement Tools"
              description="Interactive exercises and gamified learning modules to keep students engaged and motivated."
            />
          </div>
        </div>
        <div className="rg:hidden grid sm:grid-cols-2 grid-cols-1 gap-5">
          <MultiApplicationFeatureCard
            className="w-[100%]"
            bgColor="#DEE4F4"
            color="#4A4973"
            title="Interactive Learning"
            description="AI adapts to each student's learning style, pace, and preferences, offering a truly personalized educational experience."
          />
          <MultiApplicationFeatureCard
            className="w-[100%]"
            bgColor="#F4F1E2"
            color="#EAD795"
            title="Progress Tracking"
            description="AI algorithms track student progress and adjust teaching strategies accordingly."
          />
          <MultiApplicationFeatureCard
            className="w-[100%]"
            bgColor="#F2E9E4"
            color="#C39D9A"
            title="Real-Time Feedback"
            description="Instant, AI-driven feedback on assignments and quizzes, helping students understand concepts more quickly."
          />
          <MultiApplicationFeatureCard
            className="w-[100%]"
            bgColor="#F3E8F9"
            color="#B48AC9"
            title="Engagement Tools"
            description="Interactive exercises and gamified learning modules to keep students engaged and motivated."
          />
        </div>
      </div>
      <div className="w-full bg-white flex flex-col gap-14 items-start xl:px-[12%] lg:px-[7%] px-[5%] rg:py-14 py-6">
        <div className="flex flex-col rg:w-[60%] w-[100%] gap-3">
          <p className="text-brand-color font-regular rg:text-xs sm:text-xxs text-xxxs">
            Product Insight
          </p>
          <h3 className="text-text-dark font-semibold rg:text-[32px] md:text-rg sm:text-md text-sm leading-[130%]">
            Meet Our Product In Action
          </h3>
          <p className="text-text-light rg:text-sm md:text-xs sm:text-xxs text-xxxs">
            Empower your entire educational community with dedicated
            applications for students, teachers, and parents. Streamline
            communication, enhance learning, and stay connected effortlessly.
          </p>
        </div>
        <div className="flex rg:flex-row flex-col w-full h-full rg:gap-8 gap-4">
          <iframe
            width="560"
            src="https://www.youtube.com/embed/CpZOnG9cjIQ?si=9CRHkqhVXT-i4Sg6"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rg:w-[60%] w-[100%] aspect-video"
          ></iframe>
          <div className="flex flex-col rg:w-[40%] w-[100%]  min-h-[250px] justify-between items-start">
            <p className="text-text-light md:text-sm sm:text-xs xs:text-xxs">
              Shikshya isn't just an ordinary school management system; it's a
              catalyst for a new era of education. With user-friendly
              interfaces, AI integration, and a multi-application approach,
              Shikshya simplifies ad ministrative tasks and fosters an
              environment where learning knows no bounds.
            </p>
            <p className="text-text-light md:text-sm sm:text-xs text-xxs">
              Shikshya isn't just an ordinary school management system; it's a
              catalyst for a new era of education. With user-friendly
              interfaces.
            </p>
            <Button title="Request a Demo" />
          </div>
        </div>
      </div>
      <PlanSection />
    </NonErrorLayout>
  );
}
