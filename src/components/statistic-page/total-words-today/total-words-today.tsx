import React from 'react';
import TotalWordsTodayChart from '../total-words-today-chart/total-words-today-chart';
import styles from './total-words-today.module.css';

interface TotalWordsTodayProps {
  dayProgress: number
}

function TotalWordsToday({ dayProgress }: TotalWordsTodayProps) {
  return (
    <div className={styles.container}>
      <div className={styles.sectionTitle}>Total words learned today</div>
      <div className={styles.chartContainer}>
        <TotalWordsTodayChart dayProgress={dayProgress} />
      </div>
    </div>
  );
}

export default TotalWordsToday;
