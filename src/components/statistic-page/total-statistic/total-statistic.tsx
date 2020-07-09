import React from 'react';
import styles from './total-statistic.module.css';
import TotalStatisticChart from '../total-statistic-chart/total-statistic-chart'

function TotalStatistic() {
  const testTotalStats = [
    {
      'words': 0,
      'percentCorrect': 0,
    },
    {
      'words': 30,
      'percentCorrect': 20,
    },
    {
      'words': 60,
      'percentCorrect': 30,
    },
    {
      'words': 90,
      'percentCorrect': 35,
    },
    {
      'words': 120,
      'percentCorrect': 40,
    },
    {
      'words': 150,
      'percentCorrect': 60,
    },
    {
      'words': 180,
      'percentCorrect': 70,
    },
    {
      'words': 210,
      'percentCorrect': 60,
    },
    {
      'words': 240,
      'percentCorrect': 75,
    },
    {
      'words': 270,
      'percentCorrect': 80,
    },
    {
      'words': 300,
      'percentCorrect': 90,
    },                    
  ] 
  
  return (
      <div className={styles.container}>
      <div className={styles.sectionTitle}>Total statistic</div>  
      <TotalStatisticChart testStats={testTotalStats} />
      </div>
  );
}

export default TotalStatistic;
