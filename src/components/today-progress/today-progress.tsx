import React, { useContext, useState, useEffect } from 'react';
import styles from './today-progress.module.css';
import { ReactComponent as TodayProgressImage } from '../../img/lamp-main.svg';
import toFromUpperCaseString from '../../assets/toFromUpperCaseString';
import { storeWords } from '../../context/contextWords';
import { getStatistic } from '../../services/statistic';

function TodayProgress() {
  const wordsState = useContext(storeWords);
  const stateWords = wordsState.state;
  const [wordsToday, setWordsToday] = useState<number>(0);
  const [newWordsToday, setNewWordsToday] = useState<any>([])
  // useEffect(() => {
  //   if (Array.isArray(stateWords.userStatistic?.optional?.common?.wordsToday)) {
  //     setWordsToday(stateWords.userStatistic?.optional?.common?.wordsToday.slice(-1));
  //   } else {
  //     setWordsToday(stateWords.userStatistic?.optional?.common?.wordsToday ?? 0);
  //   }
  // }, [stateWords.userStatistic]);

  const loadStats = async () => {
    const gettedStats = await getStatistic();
    const tempWordsToday = gettedStats.optional.common.wordsToday.length > 0 ? 
    gettedStats.optional.common.wordsToday[gettedStats.optional.common.wordsToday.length - 1] : 0
    setWordsToday(tempWordsToday)
    setNewWordsToday(gettedStats.optional.common.newWordsToday)
    // console.log('getted', gettedStats)
  };

  useEffect(() => {
    loadStats();    
  }, [])


  return (
    <div className={styles.today_progress_container}>
      <span>
        <h3 className={styles.user_name}>{!stateWords?.name ? 'User' : toFromUpperCaseString(stateWords?.name)}</h3>
        <p className={styles.today_description}>
          Today you have learned
          <span className={styles.bold_text}>
            {stateWords.userStatistic?.learnedWords ?? 0}
            {' '}
            words
          </span>
          , including
          <span className={styles.bold_text}>
            {todayWords}
            {' '}
            new words
          </span>
          .
        </p>
      </span>
      <TodayProgressImage className={styles.lamp_img} />
    </div>
  );
}

export default TodayProgress;
