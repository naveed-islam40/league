// types/react-apexcharts.d.ts
declare module 'react-apexcharts' {
    import { Component } from 'react';
    import { ApexOptions } from 'apexcharts';
  
    interface Props {
      options: ApexOptions;
      series: ApexAxisChartSeries | ApexNonAxisChartSeries;
      type: 'line' | 'area' | 'bar' | 'pie' | 'donut' | 'radialBar' | 'scatter' | 'bubble' | 'heatmap' | 'candlestick' | 'radar';
      width?: string | number;
      height?: string | number;
    }
  
    export default class ReactApexChart extends Component<Props> {}
  }
  