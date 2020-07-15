import React, { useEffect, useRef, useState } from 'react';
import moment from 'moment';
import styles from './statistic-page.module.css';
import TodayProgress from '../today-progress';
import WeekStatistic from './week-statistic/week-statistic';
import TotalWordsToday from './total-words-today/total-words-today';
import TotalStatistic from './total-statistic/total-statistic';
import GamesStatistic from './games-statistic/games-statistic';
import { getStatistic } from '../../services/statistic';

function StatisticPage() {
  const [totalStats, setTotalStats] = useState<any>([])
  const [dayProgress, setDayProgress] = useState<number>(0)
  const [weekProgress, setWeekProgress] = useState<any>([])
  const loadStats = async () => {
    const gettedStats = await getStatistic();
    console.log('getted', gettedStats)
    let tempArray: any = []
    const statsRoute = gettedStats.optional.common
    const statsLength = statsRoute.visitDate.length
    for (let i = 0; i < statsLength; i += 1) {
      let temp = {'Correct words': 0, Date: '01/01/2020', Words: 0}
      temp['Words'] = statsRoute.wordsToday[i]
      const percentCorrect = (statsRoute.correct[i]*100)/statsRoute.wordsToday[i]
      temp['Correct words'] = percentCorrect > 100 ? 100 : percentCorrect
      temp['Date'] = statsRoute.visitDate[i]
      tempArray.push(temp)
    }

    let tempWeekArray: any = []
    if (statsRoute.visitDate[statsLength - 1] === moment().format('DD/MM/YY')) {
      let temp = {weekDay: '', percentCorrect: 0}
      temp.weekDay = statsRoute.weekDay[statsLength - 1].slice(0, 3)
      const percentCorrect = (statsRoute.correct[statsLength - 1]*100)/statsRoute.wordsToday[statsLength - 1]
      temp.percentCorrect = percentCorrect > 100 ? 100 : percentCorrect
      tempWeekArray.push(temp)  
    }

    let i = 1
    while ((Number((moment(statsRoute.visitDate[statsLength - 1 - i], "DD/MM/YY").fromNow()).slice(0, -9)) < 8) && 
    statsRoute.visitDate[statsLength - 1 - i] !== 'Sunday') {
      let temp = {weekDay: '', percentCorrect: 0}
      temp.weekDay = statsRoute.weekDay[statsLength - 1 - i].slice(0, 3)
      const percentCorrect = (statsRoute.correct[statsLength - 1 - i]*100)/statsRoute.wordsToday[statsLength - 1 - i]
      temp.percentCorrect = percentCorrect > 100 ? 100 : percentCorrect
      tempWeekArray.push(temp)  
      i += 1
    }

    console.log('time', (moment("15/07/20", "DD/MM/YY").fromNow()))
    setWeekProgress(tempWeekArray)
    setTotalStats(totalStats.concat(tempArray))
    setDayProgress(statsRoute.dayProgress)
  };

  useEffect(() => {
    loadStats();    
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.todayProgress}>
        <TodayProgress />
      </div>
      <div className={styles.weekStatistic}>
        <WeekStatistic weekProgress={weekProgress} />
      </div>
      <div className={styles.totalWordsToday}>
        <TotalWordsToday dayProgress={dayProgress} />
      </div>
      <div className={styles.totalStatistic}>
        <TotalStatistic totalStats={totalStats} />
      </div>
      <div className={styles.gamesStatistic}>
        <GamesStatistic />
      </div>
    </div>
  );
}

export default StatisticPage;
