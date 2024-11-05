import React from "react";
// import PieChart from "./pie";
import DonutChart from "./donuts";
import ApexChart from "./pie";
import Image from "next/image";
import Datepickers from "../cu-policy/date-picker";

export default function AssignReport() {
  return (
    <>

      <div className="grid lg:grid-cols-2 xl:grid-cols-3 my-10 ">
        <div className="border-b-[1px] lg:border-b-0 lg:border-r-[1px] border-[#E1E1E1]  pb-10  lg:pb-0 ">
          {/* <PieChart /> */}
          <ApexChart />
        </div>
        <div className="px-3 md:px-8 lg:px-0 self-center w-full lg:w-[80%] mx-auto pb-10  lg:pb-0 mt-10 lg:mt-0 border-b-[1px] lg:border-none border-[#E1E1E1]">
          <p className="font-bold text-[#121212] dark:text-white text-[14px]">By Status</p>

          <div className="grid grid-cols-12  mt-8">
            <div className="col-span-3">
              <p className="font-normal text-[14px] dark:text-white">Not Started</p>
            </div>
            <div className="col-span-7 bg-[#E7E7E7] rounded-full h-[12px]  self-center">
              <div className="bg-[#B5B5B5] h-[12px] rounded-full w-[45%]"></div>
            </div>
            <div className="col-span-2">
              <p className="font-semibold text-[14px] ml-5 dark:text-white">200</p>
            </div>
          </div>

          <div className="grid grid-cols-12  mt-5">
            <div className="col-span-3">
              <p className="font-normal text-[14px] dark:text-white">In Progress</p>
            </div>
            <div className="col-span-7 bg-[#E7E7E7] rounded-full h-[12px]  self-center">
              <div className="bg-[#EEB836] h-[12px] rounded-full w-[30%]"></div>
            </div>
            <div className="col-span-2">
              <p className="font-semibold text-[14px] ml-5 dark:text-white">180</p>
            </div>
          </div>

          <div className="grid grid-cols-12  mt-5">
            <div className="col-span-3">
              <p className="font-normal text-[14px] dark:text-white">Completed</p>
            </div>
            <div className="col-span-7 bg-[#E7E7E7] rounded-full h-[12px]  self-center">
              <div className="bg-[#0BA32D] h-[12px] rounded-full w-[65%]"></div>
            </div>
            <div className="col-span-2">
              <p className="font-semibold text-[14px] ml-5 dark:text-white">60</p>
            </div>
          </div>

          <div className="grid grid-cols-12  mt-5">
            <div className="col-span-3">
              <p className="font-normal text-[14px] dark:text-white">Overdue</p>
            </div>
            <div className="col-span-7 bg-[#E7E7E7] rounded-full h-[12px]  self-center">
              <div className="bg-[#ED4C5C] h-[12px] rounded-full w-[85%]"></div>
            </div>
            <div className="col-span-2">
              <p className="font-semibold text-[14px] ml-5 dark:text-white">300</p>
            </div>
          </div>
        </div>

        <div className="mt-10 xl:mt-0 xl:border-l-[1px] border-[#E1E1E1] ">
          <DonutChart />
        </div>
      </div>
    </>
  );
}
