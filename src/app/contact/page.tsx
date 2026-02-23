import ContactFeature from "@/components/Contact Components/ContactFeature";
import ContactFormSection from "@/components/Contact Components/ContactFormSection";
import ContactHeader from "@/components/Contact Components/ContactHeader";
import NonErrorLayout from "@/layouts/NonErrorLayout";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ShikshyaLogoDark from "../../../public/shikshya_logo_dark.svg";
import InstagramIcon from "../../../public/icons/InstagramIcon.svg";
import FacebookIcon from "../../../public/icons/FacebookIcon.svg";
import LinkedInIcon from "../../../public/icons/LinkedInIcon.svg";
import CallIcon from "../../../public/icons/CallIcon";

export const metadata: Metadata = {
  title: "Shikshya | Contact",
};

// export default function Page() {
//   return (
//     <NonErrorLayout>
//       <ContactHeader />
//       <ContactFormSection />
//       <ContactFeature />
//     </NonErrorLayout>
//   );
// }

export default function Page() {
  return (
    <div className="flex flex-col bg-header-gradient min-h-[100vh] gap-[25px] xl:px-[12%] lg:px-[7%] px-[5%] justify-between">
      <div className="flex flex-row w-full justify-between items-center pt-8">
        <Link href={"/"}>
          <Image
            src={ShikshyaLogoDark}
            alt="Shikshya Logo"
            width={160}
            height={160}
            className="lg:w-[160px] md:w-[140px] sm:w-[120px] w-[100px]"
          />
        </Link>
        <Link href={"/contact"}>
          <button className="bg-brand-color px-6 py-[10px] rounded-md shadow  items-center flex flex-row gap-3">
            <CallIcon width="40%" />
            <h3 className="text-white sm:text-xxs text-xxxs">Contact</h3>
          </button>
        </Link>
      </div>
      <div className="flex flex-col items-center w-full gap-[5%]">
        <h2 className="xl:text-xl lg:text-lg rg:text-rg text-md  font-semibold text-text-dark">
          Have Questions? <span className="text-brand-color">Contact Us</span>
        </h2>
        <p className="text-text-light sm:text-xs text-xxs text-center">
          We are thrilled to introduce Shikshya, a comprehensive school{" "}
        </p>
      </div>
      <ContactFormSection />
      <div className="flex flex-row w-full py-8 justify-between items-center">
        <p className="text-text-medium text-xxs">© 2023 Shikshya. </p>
        <div className="flex flex-row gap-4">
          <Image src={FacebookIcon} alt="Facebook Icon" />
          <Image src={LinkedInIcon} alt="Instagram Icon" />
          <Image src={InstagramIcon} alt="Instagram Icon" />
        </div>
      </div>
    </div>
  );
}
