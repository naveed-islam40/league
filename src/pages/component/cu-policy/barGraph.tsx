import React, { useState, useEffect } from "react";
import BarChart from "react-bar-chart";
import LineChart from "./lineGraph";

interface DataItem {
  text: string;
  value: number;
}

export default function BarGraph() {
  const data: DataItem[] = [
    { text: "Jan", value: 800 },
    { text: "Feb", value: 800 },
    { text: "Mar", value: 900 },
    { text: "Apr", value: 700 },
    { text: "May", value: 850 },
    { text: "Jun", value: 800 },
    { text: "July", value: 800 },
    { text: "Aug", value: 700 },
    { text: "Sep", value: 900 },
    { text: "Oct", value: 800 },
    { text: "Nov", value: 800 },
    { text: "Dec", value: 900 },
  ];

  const margin = { top: 20, right: 20, bottom: 30, left: 50 };

  const [chartWidth, setChartWidth] = useState<number>(0);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const updateChartWidth = () => {
      const containerWidth = document.getElementById('chart-container')?.offsetWidth || 0;
      setChartWidth(containerWidth * 0.9);
    };

    updateChartWidth();
    window.addEventListener('resize', updateChartWidth);
    return () => window.removeEventListener('resize', updateChartWidth);
  }, []);

  // Detect dark mode
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(darkModeMediaQuery.matches);
    const handleChange = (event: MediaQueryListEvent) => {
      setIsDarkMode(event.matches);
    };
    darkModeMediaQuery.addEventListener('change', handleChange);
    return () => darkModeMediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleBarClick = (element: DataItem) => {
    console.log(`The ${element.text} with value ${element.value} was clicked`);
  };

  return (
    <>
      <div className={`bg-white dark:bg-black dark:border-[1px] flex md:hidden mt-5 mx-3 md:mx-0 justify-between py-2 px-3 rounded-[4px]`}>
        <p className="font-normal text-[12px] text-[#121212] dark:text-white self-center">Total Users Logins in 2024</p>
        <p className="font-bold text-[24px] text-[#121212] dark:text-white">500 </p>
      </div>

      <div className={`App my-5 hidden md:flex ${isDarkMode ? 'dark-mode' : ''}`}>
        <div id="chart-container" style={{ width: "100%" }}>
          {chartWidth > 0 && (
            <BarChart
              width={chartWidth}
              height={300}
              margin={margin}
              data={data}
              color={"#578fbf"}
              onBarClick={handleBarClick}
            />
          )}
        </div>
        <div className="hidden md:block self-center w-[25%] lg:w-[20%]">
          <p className="font-normal text-[12px] text-[#121212] dark:text-white">Total Users Logins in 2024</p>
          <p className="font-bold text-[24px] text-[#121212] dark:text-white text-center w-[60%] mt-2">500 </p>
        </div>
      </div>
      <LineChart />
    </>
  );
}
