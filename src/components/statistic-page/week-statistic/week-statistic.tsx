import React from 'react';
import DayStatistic from '../day-statistic/day-statistic'
import styles from './week-statistic.module.css';

function WeekStatistic() {
  const testStats = [
    {
      day: 'Mon',
      progressPercent: 15
    },
    {
      day: 'Tue',
      progressPercent: 30
    },
    {
      day: 'Wed',
      progressPercent: 0
    },
    {
      day: 'Thu',
      progressPercent: 40
    },
    {
      day: 'Fri',
      progressPercent: 75
    },
    {
      day: 'Sat',
      progressPercent: 10
    },
    {
      day: 'Sun',
      progressPercent: 90
    }
  ]
  
  return (
      <div className={styles.container}> 
        <div className={styles.sectionTitle}>Week Statistic</div>   
        <div className={styles.indicatorsContainer}>
            <div className={styles.indicatorHarder}>You need to work harder</div>
            <div className={styles.indicatorNice}>Nice result</div>
        </div>  
        <div className={styles.dayStatContainer}>
            {testStats.map(el => <DayStatistic day={el.day} percent={el.progressPercent} />)}
        </div>
      </div>
  );
}

export default WeekStatistic;
