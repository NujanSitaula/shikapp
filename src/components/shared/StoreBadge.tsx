"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useState } from "react";

export default function PlayStoreBadge({
  src,
  className,
  isDark,
  width,
  innerClassName,
  href,
  tooltipText,
  isClickable = true,
}: {
  src: string | StaticImport;
  className?: string | undefined;
  isDark?: boolean;
  width?: number;
  innerClassName?: string;
  href?: string;
  tooltipText?: string;
  isClickable?: boolean;
}) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    if (href && isClickable) {
      window.open(href, "_blank");
    }
  };

  const BadgeContent = () => {
    if (isDark == false || isDark == undefined) {
      return (
        <div
          className={
            `bg-white px-7 py-[9px] outline outline-1 outline-neutral-200 rounded-md ${
              (href || tooltipText)
                ? "cursor-pointer hover:bg-gray-50 transition-colors"
                : ""
            } ` + className
          }
          onClick={handleClick}
          onMouseEnter={() => tooltipText && setShowTooltip(true)}
          onMouseLeave={() => tooltipText && setShowTooltip(false)}
        >
          <Image
            src={src}
            width={width ? width : 100}
            height={width ? width : 100}
            alt="Store Badge"
            className={innerClassName}
          />
          {/* Tooltip */}
          {tooltipText && showTooltip && (
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-md shadow-lg z-10 whitespace-nowrap">
              {tooltipText}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
            </div>
          )}
        </div>
      );
    } else {
      return (
        <div
          className={
            `bg-black rg:px-14 px-2 py-[9px] outline outline-1 outline-neutral-200 rounded-md ${
              (href || tooltipText)
                ? "cursor-pointer hover:bg-gray-800 transition-colors"
                : ""
            } ` + className
          }
          onClick={handleClick}
          onMouseEnter={() => tooltipText && setShowTooltip(true)}
          onMouseLeave={() => tooltipText && setShowTooltip(false)}
        >
          <Image
            src={src}
            width={500}
            height={500}
            alt="Store Badge"
            className={`rg:w-[120px] md:w-[100px] sm:w-[80px] w-[60px]`}
          />
          {/* Tooltip */}
          {tooltipText && showTooltip && (
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-md shadow-lg z-10 whitespace-nowrap">
              {tooltipText}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
            </div>
          )}
        </div>
      );
    }
  };

  return (
    <div className="relative inline-block">
      <BadgeContent />
    </div>
  );
}
