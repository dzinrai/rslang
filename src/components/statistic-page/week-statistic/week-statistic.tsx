import React from 'react';
import DayStatistic from '../day-statistic/day-statistic';
import styles from './week-statistic.module.css';

interface WeekStatisticProps {
  weekProgress: any
}

function WeekStatistic({ weekProgress }: WeekStatisticProps) {
  const [...weekStats] = weekProgress
  console.log('weekStats', weekStats)
  let tempStats = [
    {
      weekDay: 'Mon',
      percentCorrect: 0,
    },
    {
      weekDay: 'Tue',
      percentCorrect: 0,
    },
    {
      weekDay: 'Wed',
      percentCorrect: 0,
    },
    {
      weekDay: 'Thu',
      percentCorrect: 0,
    },
    {
      weekDay: 'Fri',
      percentCorrect: 0,
    },
    {
      weekDay: 'Sat',
      percentCorrect: 0,
    },
    {
      weekDay: 'Sun',
      percentCorrect: 0,
    },
  ];
  /* eslint-disable*/
  tempStats.forEach((el: any) => {
    weekStats.map((el1: any) => {if (el1.weekDay === el.weekDay) el.percentCorrect = el1.percentCorrect})
  })
  /* eslint-enable*/
  return (
    <div className={styles.container}>
      <div className={styles.sectionTitle}>Week Statistic</div>
      <div className={styles.indicatorsContainer}>
        <div className={styles.indicatorHarder}>You need to work harder</div>
        <div className={styles.indicatorNice}>Nice result</div>
      </div>
      <div className={styles.dayStatContainer}>
        {tempStats.map((el: any) => <DayStatistic key={el.weekDay} day={el.weekDay} percent={el.percentCorrect} />)}
      </div>
    </div>
  );
}

export default WeekStatistic;
