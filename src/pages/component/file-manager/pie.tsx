import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { useMediaQuery } from 'react-responsive';

// Dynamically import ReactApexChart to avoid SSR issues
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const ApexChart: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  const [series] = useState<number[]>([44, 55, 13, 43, 22]);
  const [options] = useState<any>({
    chart: {
      width: 500,
      type: 'pie',
    },
    colors: ['#62B2FD', '#9BDFC4', '#F99BAB', '#FFB44F', '#9F97F7'],
    stroke: {
      width: 0,
    },
    labels: ['Manual Review', 'Published Document Review', 'Policy Review', 'Business Impact Analysis', 'Risk Assessment'],
    legend: {
      labels: {
        colors: ['#808080','#808080','#808080','#808080','#808080'], // Set legend labels text color to gray
      },
      position: 'right', // Adjusting the legend position (optional)
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: '100%',
          },
          legend: {
            position: 'bottom',
            labels: {
              colors: ['#808080'], // Ensure legend text color is gray in mobile view as well
            },
          },
        },
      },
    ],
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="pie" width={isMobile ? '100%' : 470} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
