import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import the Chart component to avoid SSR issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BarChart: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set to true when the component is mounted on the client-side
    setIsClient(true);
  }, []);

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "80%", // Adjust bar height to make space for gaps
        columnWidth: "60%", // Controls the width of the bars and creates space between them
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false, // Removed the stroke to make the bars solid
    },
    xaxis: {
      categories: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ],
      position: 'top', // Moves the X-axis to the top
      axisTicks: {
        show: true,
        color: "#3076B1", // Blue color for ticks
      },
      labels: {
        style: {
          colors: "#7380AE", // Blue color for X-axis labels
          fontSize: "10px",  // Font size for X-axis labels
          fontWeight: 600    // Font weight for X-axis labels (optional)
        },
      },
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          colors: "#7380AE", // Blue color for Y-axis labels
          fontSize: "10px",  // Font size for Y-axis labels
          fontWeight: 600    // Font weight for Y-axis labels (optional)
        },
      },
    },
    grid: {
      show: false, // Removed the grid/border around the chart
    },
    colors: ["#3076B1"], // Bar fill color
    tooltip: {
      enabled: true,
    },
    legend: {
      show: false, // This removes the series label (legend) under the graph
    },
  };

  const series = [
    {
      name: "Data",
      data: [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000],
    },
  ];

  // Only render the chart if on the client-side
  if (!isClient) return null;

  return (
    <div className="block md:hidden mt-3">
      <Chart options={options} series={series} type="bar" height={500} />
    </div>
  );
};

export default BarChart;
