import React from "react";
import Fra from "../../../../public/assets/png/fra.png";
import Fra2 from "../../../../public/assets/png/fra2.png";
import Fra3 from "../../../../public/assets/png/fra3.png";
import Fra4 from "../../../../public/assets/png/fra4.png";
import Image from "next/image";
import Link from "next/link";

export default function Card() {
  return (
    <>
      <div className="hidden md:grid grid-cols-12 mt-5 gap-2">
        <div className="col-span-12 lg:col-span-5 relative">
        <Link href={'/resources-detail'}>
         
          <Image src={Fra} alt="" className="h-full" />
          <div className="absolute bottom-3 xl:bottom-5 left-3 xl:left-5">
            <button className="cursor-default nun font-normal text-[10px] xl:text-[12px] text-white  bg-[#AD7EFB] py-[5px] px-[10px] rounded-[7px]">
              CU PolicyPro
            </button>
            <p className="nun font-semibold text-[11px] xl:text-[16px] text-white mt-3">
              What Is a Shared Branch Credit Union?
            </p>
            <p className="nun font-normal text-[11px] text-white mt-2">
              Sep 24, 2024
            </p>
          </div>
          </Link>
        </div>
        <div className="col-span-12 lg:col-span-7">
          <div className="md:flex gap-2">
            <div className="relative">
              <Image src={Fra2} alt="" />
              <div className="absolute bottom-3 xl:bottom-5 left-3 xl:left-5">
                <div className="flex gap-5">
                  <button className="cursor-default nun font-normal text-[10px] xl:text-[12px] text-white bg-[#136DF5] py-[5px] px-[10px] rounded-[7px]">
                    Training
                  </button>
                  <button className="cursor-default nun font-normal text-[10px] xl:text-[12px] text-white bg-[#EE6F2E] py-[5px] px-[10px] rounded-[7px]">
                    Industry News
                  </button>
                </div>
                <p className="nun font-medium text-[11px] xl:text-[16px] text-white mt-3">
                  Municipal Credit Union brings wealth <br /> management to
                  members
                </p>
                <p className="nun font-normal text-[11px] text-white mt-2">
                  Sep 24, 2024
                </p>
              </div>
            </div>

            <div className="relative">
              <Image src={Fra3} alt="" />
              <div className="absolute bottom-3 xl:bottom-5 left-3 xl:left-5">
                <button className="cursor-default nun font-normal text-[10px] xl:text-[12px] text-white bg-[#3076B1] py-[5px] px-[10px] rounded-[7px]">
                  State-Specific
                </button>

                <p className="nun font-medium text-[11px] xl:text-[16px] text-white mt-3">
                  Colorado Credit Union makes retention a top <br /> priority
                </p>
                <p className="nun font-normal text-[11px] text-white mt-2">
                  Sep 24, 2024
                </p>
              </div>
            </div>
          </div>

          <div className=" relative mt-2">
            <Image src={Fra4} alt="" className="h-[200px] md:h-auto" />
            <div className="absolute bottom-3 xl:bottom-5 left-3 xl:left-5">
              <button className="cursor-default nun font-normal text-[10px] xl:text-[12px] text-[#121212] bg-[#03E09E] py-[5px] px-[10px] rounded-[7px]">
                InfoSight
              </button>
              <p className="nun font-medium text-[11px] xl:text-[16px] text-white mt-3">
                Digital Federal Union debuts self-service mortgage portal
              </p>
              <p className="nun font-normal text-[11px] text-white mt-2">
                Sep 24, 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
