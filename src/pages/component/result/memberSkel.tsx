import Image from "next/image";
import React from "react";

export default function MemberSkel() {
  return (
    <>
      <div className="bg-white dark:bg-black rounded-[7px] shadow-sm p-4 mt-10">
        <p className="nun font-semibold text-[#121F2C] dark:text-white text-[20px]">
          Results for <span className="font-bold">“Deceased Member”</span>{" "}
        </p>
        <p className="nun font-normal text-[14px] text-[#121F2C] dark:text-white border-b-[1px] border-[#F5F5F5] pb-2">
          31 results found
        </p>

        <div className="grid grid-cols-4 gap-5 border-b-[1px] border-[#F5F5F5] py-4 animate-pulse">
          <div className="flex gap-1 ">
            <p className="w-[20px] h-[20px] rounded-[4px] bg-[#F5F5F5] dark:bg-gray-700"></p>
            <p className="w-full h-[20px] rounded-[4px] bg-[#F5F5F5] dark:bg-gray-700"></p>
          </div>
          <div className="flex gap-1 ">
            <p className="w-[20px] h-[20px] rounded-[4px] bg-[#F5F5F5] dark:bg-gray-700"></p>
            <p className="w-full h-[20px] rounded-[4px] bg-[#F5F5F5] dark:bg-gray-700"></p>
          </div>
          <div className="flex gap-1 ">
            <p className="w-[20px] h-[20px] rounded-[4px] bg-[#F5F5F5] dark:bg-gray-700"></p>
            <p className="w-full h-[20px] rounded-[4px] bg-[#F5F5F5] dark:bg-gray-700"></p>
          </div>
          <div className="flex gap-1 ">
            <p className="w-[20px] h-[20px] rounded-[4px] bg-[#F5F5F5] dark:bg-gray-700"></p>
            <p className="w-full h-[20px] rounded-[4px] bg-[#F5F5F5] dark:bg-gray-700"></p>
          </div>
        </div>


        <div className="py-40 ">
            <Image src={'/assets/png/loading.png'} alt="" width={60} height={60} className="mx-auto" />
            <p className="nun font-semibold text-[#4E4B66] dark:text-white text-[14px] text-center mt-2">Loading</p>
        </div>
      </div>


    </>
  );
}
