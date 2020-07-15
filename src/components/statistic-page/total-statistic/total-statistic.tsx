import React, { useEffect, useState, useRef } from 'react';
import styles from './total-statistic.module.css';
import TotalStatisticChart from '../total-statistic-chart/total-statistic-chart';
import moment from 'moment';
import { getStatistic, createStatistic } from '../../../services/statistic';

function TotalStatistic({ totalStats }: any) {
  const [...stats] = totalStats

  let testTotalStats = [
    {
      Words: 10,
      'Correct words': 100,
      Date: '01/01/2020',
    },
    {
      Words: 30,
      'Correct words': 20,
      Date: '02-01-2020',
    }
  ];
  // console.log('modified stats', modifiedStats)

  return (
    <div className={styles.container}>
      <div className={styles.sectionTitle}>Total statistic</div>
      <TotalStatisticChart stats={stats} />
    </div>
  );
}

export default TotalStatistic;
