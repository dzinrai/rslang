import React from 'react';
import styles from './statistic-page.module.css';
import TodayProgress from '../today-progress';
import WeekStatistic from './week-statistic/week-statistic';
import TotalWordsToday from './total-words-today/total-words-today';
import TotalStatistic from './total-statistic/total-statistic';
import GamesStatistic from './games-statistic/games-statistic'

function StatisticPage() {
  return (
      <div className={styles.container}>
        <div className={styles.todayProgress}>
        <TodayProgress />
        </div>
        <div className={styles.weekStatistic}>
        <WeekStatistic />
        </div>
        <div className={styles.totalWordsToday}>
        <TotalWordsToday />
        </div>
        <div className={styles.totalStatistic}>
        <TotalStatistic />
        </div>
        <div className={styles.gamesStatistic}>
        <GamesStatistic />
        </div>
      </div>
  );
}

export default StatisticPage;
