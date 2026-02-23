"use client";

import DrawerIcon from "../../../public/icons/DrawerIcon";
import CloseIcon from "../../../public/icons/CloseIcon";
import ShikshyaLogoDark from "../../../public/shikshya_logo_dark.svg";

import Image from "next/image";
import React, { useState } from "react";
import NAV_LINKS from "@/constants/NavLinks";
import DropDownIcon from "../../../public/icons/DropDownIcon";
import Link from "next/link";
import {
  FaHistory,
  FaHandsHelping,
  FaRobot,
  FaBoxes,
  FaMoneyBillWave,
  FaClipboardCheck,
  FaQuestionCircle,
  FaEnvelope,
  FaBlog,
} from "react-icons/fa";

const SUBMENU_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "Our Story": FaHistory,
  "Social Impacts": FaHandsHelping,
  "AI Virtual Teacher": FaRobot,
  "Inventory Management ": FaBoxes,
  "Inventory Management": FaBoxes,
  "Account and Payroll": FaMoneyBillWave,
  "Assessment Management ": FaClipboardCheck,
  "Assessment Management": FaClipboardCheck,
  "Help Center": FaQuestionCircle,
  "Contact Us": FaEnvelope,
  Blog: FaBlog,
};

function getSubmenuIcon(title: string) {
  return SUBMENU_ICONS[title] ?? FaRobot;
}

export default function MobileNavBar({
  selectedNavItem,
  setNavItem,
}: {
  selectedNavItem: number | null;
  setNavItem: any;
}) {
  const [drawer, setDrawer] = useState<boolean>(false);

  return (
    <div className="rg:hidden flex flex-col w-full fixed py-3 top-0 z-[10]  shadow-sm bg-white">
      <div className="flex flex-row w-full px-5 justify-between items-center">
        <Link href={"/"}>
          <Image
            src={ShikshyaLogoDark}
            alt="Shikshya Logo"
            width={160}
            height={160}
            className="sm:w-[130px] w-[110px]"
          />
        </Link>
        <DrawerIcon
          className={`cursor-pointer ${drawer ? "hidden" : "block"}`}
          onClick={() => {
            setDrawer(true);
          }}
        />
        <CloseIcon
          className={`cursor-pointer ${!drawer ? "hidden" : "block"}`}
          onClick={() => {
            setDrawer(false);
          }}
        />
      </div>
      <div
        className={`w-full px-5 drawer bg-white ${
          drawer && selectedNavItem == null
            ? "h-[240px] mt-5 "
            : drawer && selectedNavItem != null
            ? "h-[290px] mt-5 "
            : "h-[0px]"
        }`}
      >
        <div className="flex flex-col justify-center items-start gap-3 bg-gray-50 px-2 py-3">
          {NAV_LINKS.map((curr, index) => {
            if (curr.subTitle.length === 0) {
              return (
                <React.Fragment key={index}>
                  <h3 className="text-xxs font-medium cursor-pointer w-full text-text-dark">
                    {curr.title}
                  </h3>
                  {index !== NAV_LINKS.length - 1 && (
                    <hr className="w-full h-[1px] bg-gray-400" />
                  )}
                </React.Fragment>
              );
            } else {
              return (
                <React.Fragment key={index}>
                  <div className="flex flex-col w-full gap-1">
                    <div
                      className="flex flex-row items-center gap-1 cursor-pointer w-full"
                      onClick={() => {
                        if (index == selectedNavItem) {
                          setNavItem(null);
                        } else {
                          setNavItem(index);
                        }
                      }}
                    >
                      <h3 className="text-xxs font-medium text-text-dark">{curr.title}</h3>
                      <DropDownIcon
                        width="14"
                        height="15"
                        className={`${
                          selectedNavItem == index ? "-rotate-180" : "rotate-0"
                        } animated-icon`}
                      />
                    </div>
                    <div className="flex flex-col">
                      {selectedNavItem != null && index == selectedNavItem && (
                        <>
                          {NAV_LINKS[selectedNavItem].subTitle.map(
                            (sub, subIndex) => {
                              const SubIcon = getSubmenuIcon(sub.title);
                              return (
                                <div
                                  key={"Sub" + subIndex}
                                  className="flex flex-row items-center gap-2 mt-1"
                                >
                                  <SubIcon className="text-brand-color w-4 h-4 shrink-0" />
                                  <Link
                                    href={sub.link}
                                    className="text-xxs cursor-pointer text-text-dark"
                                  >
                                    {sub.title}
                                  </Link>
                                </div>
                              );
                            }
                          )}
                        </>
                      )}
                    </div>
                  </div>
                  {index !== NAV_LINKS.length - 1 && (
                    <hr className="w-full h-[1px] bg-gray-400" />
                  )}
                </React.Fragment>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
