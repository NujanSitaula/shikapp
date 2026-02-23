"use client";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import ShikshyaLogoDark from "../../public/shikshya_logo_dark.svg";
import Button from "./shared/Button";
import NAV_LINKS from "@/constants/NavLinks";
import DropDownIcon from "../../public/icons/DropDownIcon";
import MobileNavBar from "./shared/MobileNavBar";
import Link from "next/link";
import NavAIIcon from "../../public/icons/NavAIIcon";


export default function NavBar() {
  const [selectedNavItem, setNavItem] = useState<number | null>(null);
  const [openNav, setOpenNav] = useState<boolean>(false);

  const updateNavClasses = useCallback(
    ({
      nav,
      addClass,
      removeClasses,
    }: {
      nav: HTMLElement;
      addClass: string[];
      removeClasses: string[];
    }) => {
      addClass.forEach((cls) => {
        nav.classList.add(cls);
      });

      removeClasses.forEach((cls) => {
        nav.classList.remove(cls);
      });
    },
    []
  );

  useEffect(() => {
    const handleScroll = (id: string) => () => {
      const nav = document.getElementById(id);

      if (nav != null) {
        const offset = window.pageYOffset;
        setOpenNav(false);
        if (offset < 100) {
          updateNavClasses({
            nav: nav,
            removeClasses: ["bg-[rgb(255,255,255,0.85)]", "py-3"],
            addClass: ["bg-transparent", "py-8"],
          });
        } else {
          updateNavClasses({
            nav: nav,
            addClass: ["bg-[rgb(255,255,255,0.85)]", "py-3"],
            removeClasses: ["bg-transparent", "py-8"],
          });
        }
      }
    };

    const desktopHandler = handleScroll("desktop_navbar");

    window.addEventListener("scroll", desktopHandler);

    return () => {
      window.removeEventListener("scroll", desktopHandler);
    };
  }, [updateNavClasses]);

  const handleMouseLeave = () => {
    if (!openNav) {
      setTimeout(() => {
        setNavItem(null);
      }, 500);
    }
  };

  useEffect(() => {
    if (!openNav) {
      setNavItem(null);
    }
  }, [openNav]);

  return (
    <>
      <div
        className="flex-row w-full xl:px-[12%] lg:px-[7%] px-[5%] py-8 justify-between items-center fixed top-0 z-[10] rg:flex hidden"
        style={{ backdropFilter: "blur(5px)" }}
        id="desktop_navbar"
        onMouseEnter={()=> setOpenNav(true)}
        onMouseLeave={() => setOpenNav(false)}
      >
        <Link href={"/"}>
          <Image
            src={ShikshyaLogoDark}
            alt="Shikshya Logo"
            width={160}
            height={160}
            className="lg:w-[160px] w-[140px]"
          />
        </Link>
        <div className="flex flex-row lg:gap-12 gap-8 items-center">
          {NAV_LINKS.map((curr,index) => {
            if (curr.subTitle.length === 0) {
              return (
                <Link
                  key={curr.title}
                  href={"/features"}
                  onMouseEnter={() => {
                    setNavItem(null);
                  }}
                  onMouseLeave={() => {
                    handleMouseLeave();
                  }}
                >
                  <h3 className="lg:text-xxs text-xxxs font-medium cursor-pointer text-text-dark">
                    {curr.title}
                  </h3>
                </Link>
              );
            } else {
              return (
                <div
                  key={curr.title}
                  className="relative inline-block cursor-pointer"
                >
                  <div
                    onMouseEnter={() => {
                      setNavItem(index);
                    }}
                    onMouseLeave={() => {
                      handleMouseLeave();
                    }}
                    className="flex flex-row items-center gap-1"
                    onClick={() =>
                      setNavItem(selectedNavItem === index ? null : index)
                    }
                  >
                    <h3 className="lg:text-xxs text-xxxs font-medium text-text-dark">
                      {curr.title}
                    </h3>
                    <DropDownIcon
                      width="14"
                      height="15"
                      className={`${
                        index === selectedNavItem ? "rotate-180" : "rotate-0"
                      } animated-icon`}
                    />
                  </div>
                  <div
                    className={`${
                      curr.subTitle.length > 3
                        ? "grid grid-cols-2 gap-0 w-[500px] translate-x-[-25%]"
                        : " translate-x-[0%]"
                    } dropdown absolute left-[-100%] ${
                      curr.subTitle.length == 2
                        ? "bottom-[-160px]"
                        : "bottom-[-225px]"
                    }  bg-white rounded-xl py-2 px-5 shadow ${
                      index === selectedNavItem
                        ? "opacity-100"
                        : "opacity-0 invisible"
                    }`}
                    onMouseEnter={() => {
                      setNavItem(index);
                    }}
                    onMouseLeave={() => {
                      handleMouseLeave();
                    }}
                  >
                    {curr.subTitle.map((subtitle, indx) => (
                      <Link key={subtitle.title + indx} href={subtitle.link}>
                        <div
                          className="flex flex-row gap-4 items-center py-3"
                        >
                          <NavAIIcon height="25px" width="25px" />
                          <div className="flex flex-col w-[200px]">
                            <h4 className="font-medium text-[14px] text-text-dark">
                              {subtitle.title}
                            </h4>
                            <p className="text-xxs text-text-light">
                              {subtitle.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
          })}

          <Button
            title="Request Demo"
            className="lg:text-xxs text-xxxs lg:px-6 px-4 lg:py-2 py-1"
          />
        </div>
      </div>
      <MobileNavBar selectedNavItem={selectedNavItem} setNavItem={setNavItem} />
    </>
  );
}
