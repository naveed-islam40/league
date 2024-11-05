import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function  Analize() {
  return (
    <>
      <div className="bg-white dark:bg-black md:dark:border-[1px] md:dark:border-white md:rounded-[7px] p-[15px] drop-shadow-sm mt-3 md:mt-5">
        <div className="flex justify-between">
          <p className="nun font-semibold text-[#121F2C] dark:text-white text-[16px] xl:text-[18px]">
            Analytics
          </p>

          <Image
            src={"/assets/svg/dots.svg"}
            alt=""
            width={24}
            height={24}
            className="hidden md:block self-center cursor-pointer"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          <div className="flex md:block xl:flex gap-5 md:border-[1px] border-[#F5F5F5] md:p-[15px] rounded-[7px] md:shadow-sm">
            <Link href={"/manage-user"} className="flex md:block xl:flex gap-5">
              <Image
                src={"/assets/png/mdi.png"}
                alt=""
                width={60}
                height={60}
                className="self-center"
              />
              <div className="self-center md:mt-5 xl:mt-0">
                <p className="font-normal text-[#121F2C] dark:text-white text-[14px] md:text-[12px]">
                  Number of Users
                </p>
                <p className="font-semibold text-[#121F2C] dark:text-white text-[20px] mt-1">
                  206
                </p>
              </div>
            </Link>
          </div>

          <div className="flex md:block xl:flex gap-5 md:border-[1px] border-[#F5F5F5] md:px-[15px] md:pt-[15px] xl:pt-2  pb-3 rounded-[7px] md:shadow-sm">
            <Image
              src={"/assets/png/mdi2.png"}
              alt=""
              width={60}
              height={60}
              className="self-center "
            />
            <div className="md:mt-5 xl:mt-7">
              <p className="font-normal text-[#121F2C] dark:text-white text-[14px] md:text-[12px]">
                Number of Published Docs.
              </p>
              <div className="mt-2 flex gap-10 md:gap-4 xl:gap-4 md:text-center">
                <Link href={"/publishDocx"}>
                  <p className="font-normal text-[#7A7B7C] dark:text-white text-[14px] md:text-[10px]">
                    CU PolicyPro
                  </p>
                  <p className="font-semibold text-[#121F2C] dark:text-white text-[20px] mt-1">
                    82
                  </p>
                </Link>

                <div className="border-[1px] border-[#CCCCCC] dark:text-white h-[30px] self-center"></div>

                <Link href={"/recover-publish"}>
                  <p className="font-normal text-[#7A7B7C] dark:text-white text-[14px] md:text-[10px]">
                    RecoveryPro
                  </p>
                  <p className="font-semibold text-[#121F2C] dark:text-white text-[20px] mt-1">
                    50
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex md:block xl:flex gap-5 md:border-[1px] border-[#F5F5F5] md:p-[15px] rounded-[7px] md:shadow-sm">
            <Link href={"/publishDocx"} className="flex md:block xl:flex gap-5">
              <Image
                src={"/assets/png/mdi3.png"}
                alt=""
                width={60}
                height={60}
                className="self-center"
              />
              <div className="self-center md:mt-5 xl:mt-0">
                <p className="font-normal text-[#121F2C] dark:text-white text-[14px] md:text-[12px]">
                  Number of Draft Docs.
                </p>
                <p className="font-semibold text-[#121F2C] dark:text-white text-[20px] mt-1">
                  25
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
