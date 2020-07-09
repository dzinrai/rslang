import React, { useState, useEffect } from 'react';
import { Area } from '@ant-design/charts';

const TotalStatisticChart = ({ testStats }: any) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // asyncFetch();
    setData(testStats)
  }, []);
  // const asyncFetch = () => {
  //   fetch('https://gw.alipayobjects.com/os/antfincdn/YdLK%24VvSkW/fireworks-sales.json')
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => {
  //       console.log('fetch data failed', error);
  //     });
  // };
  const config = {
    width: 339,
    height: 292,
    smooth: true,
    forseFit: true,
    // title: {
    //   visible: true,
    //   text: '基础面积图',
    // },
    data,
    color: '#0A5DC1',
    tooltip: {
      fields: ['Words', 'Correct words', 'Date']
    },
    meta: {
      // values: ['words', 'percentCorrect', 'date'],
      'Correct words': {
        formatter: (v: number) => `${v}%`
      }
    },
    xField: 'Words',
    yField: 'Correct words',
    // stackField: 'date',
    xAxis: {
      // type: 'words',
      tickCount: 5,
    },
    yAxis: {
      // type: 'words',
      tickCount: 5,
      max: 100,
    },
    line: {
      visible: false,
    },
    areaStyle: {
      fill: '#0A5DC1',
      fillOpacity: 0.9,
      lineWidth: 5
    }
  };
  return <Area {...config} />;
};
export default TotalStatisticChart;