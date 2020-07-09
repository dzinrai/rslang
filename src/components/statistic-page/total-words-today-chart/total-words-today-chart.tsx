import React, { useState, useEffect } from 'react';
import { Liquid } from '@ant-design/charts';
const TotalWordsTodayChart: React.FC = () => {
  const config = {
    width: 150,
    height: 150,
    color: '#2F80ED',
    liquidStyle:{
        lineWidth: 1,
        fill:'#0A5DC1',
        stroke:'#2F80ED',
    },
    min: 0,
    max: 3600,
    value: 2500,
    statistic: { 
        formatter: (value: number) => ((100 * value) / 3600).toFixed(1) + ' %' ,
        style: {
            fontSize: 18,
            fontWeight: 300,
            fill: 'black',
            fontFamily: 'Montserrat, sans-serif',
        }
    },
  };
  return <Liquid {...config} />;
};
export default TotalWordsTodayChart;