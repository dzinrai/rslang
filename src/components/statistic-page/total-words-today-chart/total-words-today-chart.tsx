import React from 'react';
import { Liquid } from '@ant-design/charts';

interface TotalWordsTodayChartProps {
  dayProgress: number
}

const TotalWordsTodayChart = ({ dayProgress }: TotalWordsTodayChartProps) => {
  const config = {
    width: 150,
    height: 150,
    color: '#2F80ED',
    liquidStyle: {
      lineWidth: 1,
      fill: '#0A5DC1',
      stroke: '#2F80ED',
    },
    min: 0,
    max: 100,
    value: dayProgress,
    statistic: {
      formatter: (value: number) => `${((100 * value) / 3600).toFixed(1)} %`,
      style: {
        fontSize: 18,
        fontWeight: 300,
        fill: 'black',
        fontFamily: 'Montserrat, sans-serif',
      },
    },
  };
    /* eslint-disable */
  return <Liquid {...config} />;
    /* eslint-enable */
};
export default TotalWordsTodayChart;
