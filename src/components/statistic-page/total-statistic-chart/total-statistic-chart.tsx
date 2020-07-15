import React from 'react';
import { Area } from '@ant-design/charts';

interface TotalStatisticChartProps {
  stats: any
}

const TotalStatisticChart = ({ stats }: TotalStatisticChartProps) => {
  const [...data] = stats

  const config = {
    width: 339,
    height: 292,
    smooth: true,
    forseFit: true,
    data,
    color: '#0A5DC1',
    tooltip: {
      fields: ['Words', 'Correct words', 'Date'],
    },
    meta: {
      'Correct words': {
        formatter: (v: number) => `${v}%`,
      },
    },
    xField: 'Words',
    yField: 'Correct words',
    xAxis: {
      tickCount: 5,
    },
    yAxis: {
      tickCount: 5,
      max: 100,
    },
    line: {
      visible: false,
    },
    areaStyle: {
      fill: '#0A5DC1',
      fillOpacity: 0.9,
      lineWidth: 5,
    },
  };
  /* eslint-disable */
  return <Area {...config} />;
  /* eslint-enable */
};
export default TotalStatisticChart;
