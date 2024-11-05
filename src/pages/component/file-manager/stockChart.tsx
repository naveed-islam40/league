import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import Image from "next/image";

// Dynamically import the ApexCharts component to prevent SSR issues
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

interface Props {
  series?: {
    monthDataSeries1?: {
      prices: number[];
      dates: string[];
    };
  };
}

const StockChart: React.FC<Props> = ({
  series = { monthDataSeries1: { prices: [], dates: [] } },
}) => {
  // Default data
  const data = series?.monthDataSeries1 || {
    prices: [10, 20, 15, 25, 30, 40, 45], // Example price data
    dates: [
      "2024-08-01T00:00:00.000Z",
      "2024-08-02T00:00:00.000Z",
      "2024-08-03T00:00:00.000Z",
      "2024-08-04T00:00:00.000Z",
      "2024-08-05T00:00:00.000Z",
      "2024-08-06T00:00:00.000Z",
      "2024-08-07T00:00:00.000Z",
    ], // Example date data
  };

  const chartSeries = [
    {
      name: "STOCK ABC",
      data: data.prices.map((price, index) => [
        new Date(data.dates[index]).getTime(),
        price,
      ]),
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "area",
      height: 350,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
      curve: "straight",
    },
    fill: {
      type: "solid",
      colors: ["#9BDFC4"],
    },
    title: {
      text: "Price Movement",
      align: "left",
      style: {
        color: "#808080", // Set title color to gray
      },
    },
    subtitle: {
      text: "Last 7 Days",
      align: "left",
      style: {
        color: "#808080", // Set subtitle color to gray
      },
    },
    xaxis: {
      type: "datetime",
      labels: {
        format: "MMM",
        style: {
          colors: "#808080", // Set x-axis label color to gray
        },
      },
      axisBorder: {
        show: true,
        color: "#808080", // Set x-axis border color to gray
      },
      axisTicks: {
        show: true,
        color: "#808080", // Set x-axis tick color to gray
      },
    },
    yaxis: {
      opposite: false,
      labels: {
        style: {
          colors: "#808080", // Set y-axis label color to gray
        },
      },
      axisBorder: {
        show: true,
        color: "#808080", // Set y-axis border color to gray
        width: 1,
      },
      axisTicks: {
        show: true,
        color: "#808080", // Set y-axis tick color to gray
        width: 1,
      },
    },
    legend: {
      horizontalAlign: "left",
    },
    tooltip: {
      x: {
        format: "MMM, dd, yyyy",
      },
    },
  };

  return (
    <div id="chart" className="lg:mr-8 w-[95%] lg:w-auto mx-auto lg:ml-0 -mb-5 md:mb-0">
      <div className="hidden md:flex gap-1 justify-end mb-3">
        <Image src={"/assets/svg/np-a.svg"} alt="" width={16} height={16} />
        <p className="font-normal text-[#09122E] dark:text-white  text-[12px]">
          <span className="font-bold">10%</span> increase in last 30 days
        </p>
      </div>
      <ApexCharts
        options={options}
        series={chartSeries}
        type="area"
        height={300}
      />
    </div>
  );
};

export default StockChart;
