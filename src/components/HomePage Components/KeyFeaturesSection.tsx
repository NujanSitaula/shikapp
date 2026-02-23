import AIIcon from "../../../public/icons/AIIcon";
import AutomationIcon from "../../../public/icons/AutomationIcon";
import MultiDeviceIcon from "../../../public/icons/MultiDeviceIcon";
import QuestionMark from "../../../public/elements/QuotationElement";
import UserFriendly from "../../../public/icons/UserFriendly";
import FeatureCard from "../FeatureCard";
import { getFeatureData } from "@/actions";

export default async function KeyFeaturesSection() {
  let data;
  try {
    data = await getFeatureData();
  } catch (e) {
    data = null;
  }

  // Fallback data if API fails or returns null
  const featureData = data || {
    Subtitle: "Key Features",
    Title: "Powerful Features for Modern Education",
    Description:
      "Discover the comprehensive set of tools and features designed to enhance your educational experience and streamline school operations.",
  };

  return (
    <div className="flex flex-col items-center gap-2 bg-background-color w-full md:py-[100px] sm:py-[80px] py-[60px] mt-0 md:mt-[0px] xs:mt-[80px] ">
      <h4 className="text-brand-color text-xxs">{featureData.Subtitle}</h4>
      <h2 className="text-text-dark text-lg font-semibold">{featureData.Title}</h2>
      <p className="sm:text-xs text-xxs text-text-light lg:w-[50%] rg:w-[60%] sm:w-[70%] w-[80%] text-center">
        {featureData.Description}
      </p>
      <QuestionMark className="absolute left-0 xl:translate-x-[500%] lg:translate-x-[330%] rg:translate-x-[250%]  md:translate-x-[150%] sm:translate-x-[80%] sm:block hidden translate-y-[100%]" />
      <QuestionMark className="absolute right-0 xl:translate-x-[-500%] lg:translate-x-[-330%] rg:translate-x-[-250%]  md:translate-x-[-150%] sm:translate-x-[-80%]  translate-y-[0%] rotate-45  sm:block hidden" />
      <div className="flex flex-row w-full flex-wrap gap-5 px-[12%] pt-[5%] justify-center items-stretch">
        <FeatureCard
          Icon={<AIIcon width="27px" height="27px" />}
          title="AI Integrated"
          color="#F15C5C"
          description={
            "Dive into learning tailored just for you! Shikshya uses smart technology (like having a helpful friend) to guide you through your studies in a way that fits your own style and preferences."
          }
        />
        <FeatureCard
          Icon={<AutomationIcon width="27px" height="27px" />}
          title="Automation"
          color="#B25CF1"
          description={
            "Forget about those boring tasks that take up your time! Shikshya takes care of them for you, so you can focus more on what you love – studying and learning. It's like having a personal assistant that handles the not-so-fun stuff!"
          }
        />
        <FeatureCard
          Icon={<UserFriendly width="27px" height="27px" />}
          title="User Friendly Experience"
          color="#5C7DF1"
          description={
            "Shikshya prioritizes simplicity. Our app is crafted to be incredibly user-friendly, ensuring a hassle-free experience. You won't encounter any challenges finding what you need – it's all conveniently at your fingertips."
          }
        />
        <FeatureCard
          Icon={<MultiDeviceIcon width="27px" height="27px" />}
          title="Multi Application"
          color="#5CDFF1"
          description={
            "Imagine having all your study tools neatly organized in one spot. That's what Shikshya offers! Whether you're exploring interactive lessons, collaborating with classmates, or tracking your progress, everything you need is conveniently packed into our app."
          }
        />
      </div>
    </div>
  );
}
