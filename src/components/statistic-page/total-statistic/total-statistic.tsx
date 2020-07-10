import React from 'react';
import styles from './total-statistic.module.css';
import TotalStatisticChart from '../total-statistic-chart/total-statistic-chart';

function TotalStatistic() {
  const testTotalStats = [
    {
      Words: 0,
      'Correct words': 0,
      Date: '01-01-2020',
    },
    {
      Words: 30,
      'Correct words': 20,
      Date: '02-01-2020',
    },
    {
      Words: 60,
      'Correct words': 30,
      Date: '04-01-2020',
    },
    {
      Words: 90,
      'Correct words': 35,
      Date: '05-01-2020',
    },
    {
      Words: 120,
      'Correct words': 40,
      Date: '07-01-2020',
    },
    {
      Words: 150,
      'Correct words': 60,
      Date: '08-01-2020',
    },
    {
      Words: 180,
      'Correct words': 70,
      Date: '09-01-2020',
    },
    {
      Words: 210,
      'Correct words': 60,
      Date: '10-01-2020',
    },
    {
      Words: 240,
      'Correct words': 75,
      Date: '11-01-2020',
    },
    {
      Words: 270,
      'Correct words': 80,
      Date: '13-01-2020',
    },
    {
      Words: 300,
      'Correct words': 90,
      Date: '14-01-2020',
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.sectionTitle}>Total statistic</div>
      <TotalStatisticChart testStats={testTotalStats} />
    </div>
  );
}

export default TotalStatistic;
