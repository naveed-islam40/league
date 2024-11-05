import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const DonutChart: React.FC = () => {
  const [chartWidth, setChartWidth] = useState<number>(0);
  const [isClient, setIsClient] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
    const handleResize = () => setChartWidth(window.innerWidth);
    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize);

    // Detect dark mode
    const darkModeEnabled = document.documentElement.classList.contains("dark");
    setIsDarkMode(darkModeEnabled);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Series data
  const series: ApexNonAxisChartSeries = [70, 20, 5];

  // Creating labels by combining the base label with the series value
  const labelsWithValues = [
    `InfoSight: ${series[0]}`,
    `CU PolicyPro: ${series[1]}`,
    `RecoveryPro: ${series[2]}`,
  ];

  // Calculate total of the series values
  const total = series.reduce((acc, value) => acc + value, 0);

  // ApexOptions type from apexcharts library
  const options: ApexOptions = {
    chart: {
      type: "donut",
      width: chartWidth < 480 ? 200 : 380, // Responsive width adjustment
    },
    colors: ["#03E09E", "#AD7EFB", "#FFDF36"],
    stroke: {
      width: 0,
    },
    labels: labelsWithValues,
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: "100%",
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    legend: {
      show: true,
      position: "right",
      labels: {
        // Dynamically apply text color based on dark mode
        colors: isDarkMode ? "gray" : "gray", // white in dark mode, black in light mode
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "65%",
          labels: {
            show: true,
            total: {
              show: true,
              label: "User Subscriber",
              formatter: () => `${Math.round(total)}`, // Round the total to the nearest whole number
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false, // Disable data labels on the graph
    },
  };

  return (
    <div
      id="chart"
      className="pie md:w-[60%] lg:w-[90%]  dark:text-white"
    >
      {isClient && (
        <ReactApexChart options={options} series={series} type="donut" />
      )}
    </div>
  );
};

export default DonutChart;
