import React from "react";
import DonutChart from "./donuts";
import Stock from "./stockChart";
import Image from "next/image";

export default function NotificationReport() {
  const seriesData = {
    monthDataSeries1: {
      prices: [10, 20, 15, 25, 30],
      dates: [
        "2024-01-01T00:00:00Z",
        "2024-02-01T00:00:00Z",
        "2024-03-01T00:00:00Z",
        "2024-04-01T00:00:00Z",
        "2024-05-01T00:00:00Z",
      ],
    },
  };

  return (
    <>
<div className="mx-3 md:mx-0 rounded-[4px] py-4 md:py-0 bg-white dark:bg-black md:bg-transparent flex md:hidden justify-center gap-1 md:justify-end mb-3 ">
        <Image src={"/assets/svg/np-a.svg"} alt="" width={16} height={16} />
        <p className="font-normal text-[#09122E] dark:text-white text-[12px]">
          <span className="font-bold">10%</span> increase in last 30 days
        </p>
      </div>

      <div className="grid lg:grid-cols-12 my-10">
        <div className="lg:col-span-6 xl:col-span-4 self-center">
        <DonutChart />

        </div>
        <div className="lg:col-span-6 xl:col-span-8 mt-5 lg:mt-0">
          <Stock
          series={seriesData} 
          />
        </div>
      </div>
    </>
  );
}
