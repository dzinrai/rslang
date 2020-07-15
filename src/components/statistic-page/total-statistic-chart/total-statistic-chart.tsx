import React, { useState, useEffect } from 'react';
import { Area } from '@ant-design/charts';

interface TotalStatisticChartProps {
  stats: any
}

const TotalStatisticChart = ({ stats }: TotalStatisticChartProps) => {
  // console.log('modif', testStats)
  // console.log('statsernfkegt', stats)
  // console.log('length', stats.length)
  const [...data] = stats
  // console.log('data', data)
  // const [data, setData] = useState(stats);
  /*eslint-disable*/
  // useEffect(() => {
  //   // let testTotalStats: any = [
  //   //   {
  //   //     Words: testStats['Words'][0],
  //   //     'Correct words': testStats['Correct words'][0],
  //   //     Date:  testStats['Date'][0],
  //   //   }
  //   // ]
  //   let newStats: any = []
  //   console.log('testStats', testStats.length)
  //   for (let i = 0; i < testStats.length; i += 1) {
  //     // let temp = {'Correct words': 0, 'Date': '01/01/2020', 'Words': 0}
  //     // temp['Words'] = newStats.wordsToday[i]
  //     // const percentCorrect = (newStats.correct[i]*100)/newStats.wordsToday[i]
  //     // temp['Correct words'] = percentCorrect > 100 ? 100 : percentCorrect
  //     // temp['Date'] = newStats.visitDate[i]
  //     // console.log('temp', temp)
  //     // newStats.current.push(temp)
  //     newStats.push({...testStats[i]})
  //     console.log('newStats', newStats)
  //     console.log('AAAAAAAAAAA')
  //   }
  //   console.log('statsernfkegt111', stats)
  //   setData(newStats);
  // }, []);
  /* eslint-enable */
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
