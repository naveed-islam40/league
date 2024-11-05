import Image from "next/image";
import React from "react";

export default function Sidebar({ files, handleClick }: any) {
  return (
    <>
      <div className=" gap-2 flex md:block bg-white dark:bg-black rounded-[4px] shadow-sm p-[10px] ">
        <div
          className={
            files === 1
              ? "active tab cursor-pointer  flex gap-2 bg-[#3076B11A] dark:bg-[#0F2B42] rounded-[4px] p-[12px] lg:p-[15px]"
              : "tab  cursor-pointer flex  gap-2 rounded-[4px] p-[12px] dark:bg-[#242424] lg:p-[15px]"
          }
          onClick={() => handleClick(1)}
        >
          <Image
            src={"/assets/svg/files-icon.svg"}
            alt=""
            width={24}
            height={24}
          />
          <p
            className={`text-[14px] self-center text-[#121F2C] dark:text-white ${
              files === 1 ? "font-semibold" : "font-normal"
            }`}
          >
            Files
          </p>
        </div>
        <div
          className={
            files === 2
              ? "md:dark:mt-1 active tab cursor-pointer  flex gap-2 bg-[#3076B11A] dark:bg-[#0F2B42] rounded-[4px] p-[12px] lg:p-[15px]"
              : "md:dark:mt-1 tab cursor-pointer flex gap-2 rounded-[4px] p-[12px] dark:bg-[#242424] lg:p-[15px]"
          }
          onClick={() => handleClick(2)}
        >
          <Image
            src={"/assets/svg/bx-image.svg"}
            alt=""
            width={24}
            height={24}
          />
          <p
            className={` text-[14px] self-center text-[#121F2C] dark:text-white ${
              files === 2 ? "font-semibold" : "font-normal"
            }`}
          >
            Media
          </p>
        </div>
        <div
          className={
            files === 3
              ? "md:dark:mt-1 active tab cursor-pointer flex gap-2 bg-[#3076B11A] dark:bg-[#0F2B42] rounded-[4px] p-[12px] lg:p-[15px]"
              : "md:dark:mt-1 tab cursor-pointer flex gap-2 rounded-[4px] dark:bg-[#242424] p-[12px] lg:p-[15px]"
          }
          onClick={() => handleClick(3)}
        >
          <Image src={"/assets/svg/bx-box.svg"} alt="" width={24} height={24} />
          <p
            className={` text-[14px] self-center text-[#121F2C] dark:text-white ${
              files === 3 ? "font-semibold" : "font-normal"
            }`}
          >
            Post to CU Documents
          </p>
        </div>
      </div>
    </>
  );
}
