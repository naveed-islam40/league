// ModelContentCard.tsx
import React from "react";
import Image from "next/image";

interface ModelContentCardProps {
  src: string;
  title: string;
  description: string;
}

export default function ModelContentCard({
  src,
  title,
  description,
}: ModelContentCardProps) {
  return (
    <div className="relative group bg-[#fbfbfb] dark:bg-black rounded-[7px] py-5 shadow-sm mb-5 h-[190px] cursor-pointer">
      <Image src={src} alt={title} width={40} height={40} className="mx-auto" />
      <p className="nun font-semibold text-[#121F2C] dark:text-white text-[14px] text-center mt-3">
        {title}
      </p>
      <p className="group-hover:hidden nun font-normal text-[#7A7B7C] text-[12px] xl:text-[13px] text-center mt-3 w-[90%] mx-auto">
        {description}
      </p>

      <div className="mt-5 hidden group-hover:flex justify-center gap-5 rounded-[7px] p-4 shadow-t-xl shadow-white">
        <p className="font-normal text-[#3076B1] text-[13px]">CU PolicyPro</p>
        <div className="border-l-[1px] border-[#CCCCCC]"></div>
        <p className="font-normal text-[#3076B1] text-[13px]">CU PolicyPro</p>
      </div>
    </div>
  );
}
