import CompanyCard from "@/components/Company Components/CompanyCard";
import CompanyFeature from "@/components/Company Components/CompanyFeature";
import CompanyHeader from "@/components/Company Components/CompanyHeader";
import NonErrorLayout from "@/layouts/NonErrorLayout";
import KidStudying from "../../../public/kid_studying_from_home.svg";
import CreateBlub from "../../../public/create_blub.svg";
import ChatBot from "../../../public/chat_bot.svg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shikshya | Company",
};

export default function Page() {
  const companyCardData = [
    {
      subTitle: "The Shikshya Advantage",
      title: "Discover Shikshya: Redefining Educational Solutions",
      paragraphs:
        "Shikshya isn't just an ordinary school management system; it's a catalyst for a new era of education. With user-friendly interfaces, AI integration, and a multi-application approach, Shikshya simplifies ad ministrative tasks and fosters an environment where learning knows no bounds. It's where innovation and education converge to create a unique platform that benefits students, teachers, and parents alike.",
      image: KidStudying,
    },
    {
      subTitle: "Vision for Education",
      title: " Shikshya's Vision: Pioneering the Future of Learning",
      paragraphs:
        "At Shikshya, we don't just aim to meet today's educational needs; we aspire to shape the future of learning. Our vision is to continually evolve, adapt, and innovate in response to the ever-changing educational landscape. With plans for new features, expanded services, and a commitment to stay at the forefront of education technology, Shikshya's journey is one of continuous improvement.",
      image: CreateBlub,
    },
    {
      subTitle: "Future Plans",
      title: "Shikshya's Future Roadmap: Innovation in Education",
      paragraphs:
        "Shikshya's future is bright, with plans that include enhancing AI-powered tools, expanding our suite of applications, and improving user experiences. We're working towards more robust analytics, personalized learning paths, and an even more seamless and integrated experience. Shikshya's journey is about staying on the cutting edge of education, and we invite you to be a part of this exciting voyage.",
      image: ChatBot,
    },
  ];

  return (
    <NonErrorLayout>
      <CompanyHeader />
      <div className="flex flex-col items-center w-full bg-background-color py-[50px] gap-3 xl:px-[10%] lg:px-[5%] px-[3%]">
        <h4 className="sm:text-xs text-xxs text-brand-color">
          Introduction to Shikshya
        </h4>
        <h2 className="md:text-lg sm:text-rg text-md font-semibold text-center text-text-dark">
          Our Educational Odyssey: From Vision to Reality
        </h2>
        <p className="text-text-light sm:text-xs text-xxs text-center lg:w-1/2 rg:w-[60%] md:w-[70%]">
          In the world of education and technology, Shikshya stands as a
          testament to innovation and purpose. Our journey began with a simple
          yet powerful idea - to revolutionize education for the better.
        </p>
      </div>
      {companyCardData.map((curr, indx) => (
        <CompanyCard
          image={curr.image}
          subTitle={curr.subTitle}
          title={curr.title}
          description={curr.paragraphs}
          key={indx}
          left={indx % 2 != 0}
        />
      ))}
      <CompanyFeature />
    </NonErrorLayout>
  );
}
