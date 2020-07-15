import React from 'react';
import styles from './total-statistic.module.css';
import TotalStatisticChart from '../total-statistic-chart/total-statistic-chart';

function TotalStatistic({ totalStats }: any) {
  const [...stats] = totalStats

  return (
    <div className={styles.container}>
      <div className={styles.sectionTitle}>Total statistic</div>
      <TotalStatisticChart stats={stats} />
    </div>
  );
}

export default TotalStatistic;
