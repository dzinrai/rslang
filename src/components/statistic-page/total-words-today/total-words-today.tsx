import React from 'react';
import TotalWordsTodayChart from '../total-words-today-chart/total-words-today-chart'
import styles from './total-words-today.module.css';

function TotalWordsToday() {
  const leftWords = 5

  return (
    <div className={styles.container}> 
    <div className={styles.sectionTitle}>Total words learned today</div>  
    <div className={styles.chartContainer}>
        <TotalWordsTodayChart />
    </div> 
  <div className={styles.textContainer}>Only <b>{leftWords}</b> words left to repeat</div>
  </div>
);
}

export default TotalWordsToday;
