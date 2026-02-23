import Image from "next/image";
import ProgressOverview from "../../../../public/progress_overview.svg";

export default function AddOnHeader() {
  return (
    <div className="w-full h-full bg-header-gradient  flex flex-row  items-center justify-between rg:pt-[150px] sm:py-[60px] py-6 rg:pb-12 xl:px-[12%] lg:px-[7%] px-[5%] rg:mt-0 mt-14">
      <div className="flex flex-col gap-5 items-start justify-start w-full">
        <p className="text-brand-color font-regular rg:text-xs sm:text-xxs text-xxxs">
          Features of Shikshya
        </p>
        <h2 className="text-text-dark font-semibold rg:text-xl md:text-lg sm:text-rg text-sm leading-[130%]">
          Streamlined Assessment Management: Efficiency Meets Accuracy
        </h2>
        <p className="text-text-light rg:text-sm md:text-xs sm:text-xxs text-xxxs">
          Revolutionizing the way assessments are created, managed, and
          analyzed.
        </p>
      </div>
      <Image
        src={ProgressOverview}
        alt="Progress Overview"
        width={1200}
        height={1200}
        className="w-[29%] rg:block hidden"
      />
    </div>
  );
}
