declare module 'react-bar-chart' {
    import { Component } from 'react';
  
    interface DataItem {
      text: string;
      value: number;
    }
  
    interface BarChartProps {
      data: DataItem[];
      width: number;
      height: number;
      margin?: { top: number; right: number; bottom: number; left: number };
      ylabel?: string;
      onBarClick?: (element: DataItem) => void;
      color?: string;
    }
  
    class BarChart extends Component<BarChartProps> {}
  
    export default BarChart;
  }
  