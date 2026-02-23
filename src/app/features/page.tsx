import NonErrorLayout from "@/layouts/NonErrorLayout";
import { Metadata } from "next";
import Shikshya_Card_Overlay from "../../../public/overlays/Shikshya_Card_Overlay";
import {
  FaUserGraduate,
  FaClipboardCheck,
  FaCalendarAlt,
  FaTasks,
  FaChalkboardTeacher,
  FaChartLine,
  FaIdBadge,
  FaMoneyBillWave,
  FaCreditCard,
  FaUserTie,
  FaBoxes,
  FaBus,
  FaBook,
  FaUserFriends,
  FaBell,
  FaBullhorn,
  FaMobileAlt,
  FaChartPie,
  FaShieldAlt,
  FaSchool,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Shikshya | Features",
};

export default function Page() {
  const academicFeatures = [
    {
      title: "Student Information System",
      description:
        "Maintain complete student profiles including enrollment, guardians, academic history, and documents in one secure place.",
      icon: FaUserGraduate,
    },
    {
      title: "Attendance Management",
      description:
        "Track daily classroom attendance with easy bulk updates, automated summaries, and instant visibility for teachers and admins.",
      icon: FaClipboardCheck,
    },
    {
      title: "Exams & Gradebook",
      description:
        "Create exams, record marks, auto‑calculate grades, and share report cards digitally with students and parents.",
      icon: FaChartLine,
    },
    {
      title: "Homework & Assignments",
      description:
        "Assign homework, collect submissions, and keep students informed about upcoming tasks and deadlines.",
      icon: FaTasks,
    },
    {
      title: "Timetable & Scheduling",
      description:
        "Design conflict‑free timetables for classes, teachers, and rooms with flexible drag‑and‑drop scheduling.",
      icon: FaCalendarAlt,
    },
    {
      title: "Class & Section Management",
      description:
        "Easily manage sections, subject allocations, and promotions across academic years without spreadsheets.",
      icon: FaChalkboardTeacher,
    },
    {
      title: "Student Progress Tracking",
      description:
        "Monitor performance trends over time with consolidated views of exams, attendance, and classroom activities.",
      icon: FaIdBadge,
    },
  ];

  const adminFeatures = [
    {
      title: "Fee & Billing Management",
      description:
        "Automate fee structures, invoicing, discounts, and dues with clear ledgers for every student.",
      icon: FaMoneyBillWave,
    },
    {
      title: "Online Payments",
      description:
        "Accept secure digital payments and generate instant receipts, reducing manual cash handling.",
      icon: FaCreditCard,
    },
    {
      title: "Admissions & Enrollment",
      description:
        "Digitize the admission process from inquiries to enrollment, with configurable forms and stages.",
      icon: FaSchool,
    },
    {
      title: "HR & Payroll",
      description:
        "Manage staff records, attendance, salary structures, and payslips from a single dashboard.",
      icon: FaUserTie,
    },
    {
      title: "Inventory & Asset Tracking",
      description:
        "Keep track of school assets, uniforms, books, and equipment with simple stock and issue logs.",
      icon: FaBoxes,
    },
    {
      title: "Transport Management",
      description:
        "Organize routes, vehicles, and students, and maintain driver and vehicle details for safer operations.",
      icon: FaBus,
    },
    {
      title: "Library Management",
      description:
        "Catalogue books, manage issues and returns, and reduce loss with automated reminders and logs.",
      icon: FaBook,
    },
  ];

  const communicationFeatures = [
    {
      title: "Parent & Student Portal",
      description:
        "Give parents and students real‑time access to attendance, homework, grades, notices, and more.",
      icon: FaUserFriends,
    },
    {
      title: "Multi‑Channel Notifications",
      description:
        "Send important updates via SMS, in‑app notifications, and email so no message is ever missed.",
      icon: FaBell,
    },
    {
      title: "Announcements & Notice Board",
      description:
        "Publish circulars, events, and exam schedules centrally and keep your entire school community aligned.",
      icon: FaBullhorn,
    },
    {
      title: "Mobile Apps for Everyone",
      description:
        "Dedicated mobile experiences for students, teachers, and parents to stay connected on the go.",
      icon: FaMobileAlt,
    },
    {
      title: "Analytics & Dashboards",
      description:
        "Gain insights into admissions, academics, finance, and operations with ready‑made visual reports.",
      icon: FaChartPie,
    },
    {
      title: "Role‑Based Access Control",
      description:
        "Protect sensitive data by giving the right access to admins, teachers, students, and parents.",
      icon: FaShieldAlt,
    },
    {
      title: "Multi‑School Support",
      description:
        "Manage multiple branches or campuses from a single platform with consolidated reporting.",
      icon: FaSchool,
    },
  ];

  return (
    <NonErrorLayout>
      <div className="w-full rg:h-[600px] md:h-[500px] h-[400px] gap-4 flex flex-col bg-header-gradient rg:pt-[100px] sm:pt-[0px] rg:pb-12 sm:pb-8 xl:px-[12%] lg:px-[7%] px-[5%] items-start justify-center md:mt-0 mt-12">
        <p className="text-brand-color font-regular rg:text-xs text-xxs">
          Features of Shikshya
        </p>
        <h2 className="text-text-dark font-semibold rg:text-xl md:text-lg text-rg leading-[130%]">
          Everything your school needs in one platform
        </h2>
        <p className="text-text-light rg:text-sm md:text-xs xs:text-xxs md:w-2/3 w-[80%]">
          From admissions and academics to fees, communication, and analytics,
          Shikshya brings every part of school management into a single,
          easy‑to‑use system.
        </p>
        <a
          href="#features-list"
          className="bg-brand-color text-white text-xxs px-6 py-2 rounded-md shadow font-regular md:w-[180px] inline-block text-center"
        >
          Explore All Features
        </a>
      </div>

      <div
        id="features-list"
        className="flex flex-col gap-8 pt-12 items-center xl:px-[12%] lg:px-[7%] px-[5%] bg-background-color scroll-mt-4"
      >
        <h2 className="text-text-dark text-lg font-semibold">
          Student & Academic Management
        </h2>
        <p className="sm:text-xs text-xxs text-text-light lg:w-[60%] rg:w-[70%] sm:w-[80%] w-[90%] text-center">
          Digitize core academic workflows so teachers can focus more on
          teaching and less on paperwork.
        </p>
        <div className="grid rg:grid-cols-2 grid-cols-1 gap-5">
          {academicFeatures.map((feature, indx) => {
            const Icon = feature.icon;
            return (
            <div
              className="flex flex-col bg-white gap-4 py-6 pl-6 pr-[60px] rounded-lg relative"
              key={feature.title + indx}
            >
              <Shikshya_Card_Overlay
                className="absolute right-0 top-0 z-[0]"
                color={"#F15C5C"}
              />
              <div className="flex flex-row items-center gap-4">
                <div className="bg-brand-color-medium p-2 rounded-full">
                  <Icon className="text-white w-5 h-5" />
                </div>
                <h3 className="font-medium text-sm text-text-dark">
                  {feature.title}
                </h3>
              </div>
              <p className="sm:text-xs text-xxs text-text-light">
                {feature.description}
              </p>
            </div>
          )})}
        </div>
      </div>

      <div className="flex flex-col gap-8 pt-12 items-center xl:px-[12%] lg:px-[7%] px-[5%] bg-background-color">
        <h2 className="text-text-dark text-lg font-semibold">
          Administration & Finance
        </h2>
        <p className="sm:text-xs text-xxs text-text-light lg:w-[60%] rg:w-[70%] sm:w-[80%] w-[90%] text-center">
          Streamline back‑office operations with powerful fee, HR, and
          operations management tools.
        </p>
        <div className="grid rg:grid-cols-2 grid-cols-1 gap-5">
          {adminFeatures.map((feature, indx) => {
            const Icon = feature.icon;
            return (
            <div
              className="flex flex-col bg-white gap-4 py-6 pl-6 pr-[60px] rounded-lg relative"
              key={feature.title + indx}
            >
              <Shikshya_Card_Overlay
                className="absolute right-0 top-0 z-[0]"
                color={"#5C7DF1"}
              />
              <div className="flex flex-row items-center gap-4">
                <div className="bg-[#5C7DF1] p-2 rounded-full">
                  <Icon className="text-white w-5 h-5" />
                </div>
                <h3 className="font-medium text-sm text-text-dark">
                  {feature.title}
                </h3>
              </div>
              <p className="sm:text-xs text-xxs text-text-light">
                {feature.description}
              </p>
            </div>
          )})}
        </div>
      </div>

      <div className="flex flex-col gap-8 py-12 items-center xl:px-[12%] lg:px-[7%] px-[5%] bg-background-color">
        <h2 className="text-text-dark text-lg font-semibold">
          Communication & Insights
        </h2>
        <p className="sm:text-xs text-xxs text-text-light lg:w-[60%] rg:w-[70%] sm:w-[80%] w-[90%] text-center">
          Keep parents, students, teachers, and management connected with
          real‑time updates and powerful dashboards.
        </p>
        <div className="grid rg:grid-cols-2 grid-cols-1 gap-5">
          {communicationFeatures.map((feature, indx) => {
            const Icon = feature.icon;
            return (
            <div
              className="flex flex-col bg-white gap-4 py-6 pl-6 pr-[60px] rounded-lg relative"
              key={feature.title + indx}
            >
              <Shikshya_Card_Overlay
                className="absolute right-0 top-0 z-[0]"
                color={"#B25CF1"}
              />
              <div className="flex flex-row items-center gap-4">
                <div className="bg-[#B25CF1] p-2 rounded-full">
                  <Icon className="text-white w-5 h-5" />
                </div>
                <h3 className="font-medium text-sm text-text-dark">
                  {feature.title}
                </h3>
              </div>
              <p className="sm:text-xs text-xxs text-text-light">
                {feature.description}
              </p>
            </div>
          )})}
        </div>
      </div>
    </NonErrorLayout>
  );
}
