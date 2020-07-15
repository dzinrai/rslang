import React, { useContext, useState, useEffect } from 'react';
import styles from './today-progress.module.css';
import { ReactComponent as TodayProgressImage } from '../../img/lamp-main.svg';
import toFromUpperCaseString from '../../assets/toFromUpperCaseString';
import { storeWords } from '../../context/contextWords';

function TodayProgress() {
  const wordsState = useContext(storeWords);
  const stateWords = wordsState.state;
  const [todayWords, setTodayWords] = useState<any>(null);
  useEffect(() => {
    if (Array.isArray(stateWords.userStatistic?.optional?.common?.wordsToday)) {
      setTodayWords(stateWords.userStatistic?.optional?.common?.wordsToday.slice(-1));
    } else {
      setTodayWords(stateWords.userStatistic?.optional?.common?.wordsToday ?? 0);
    }
  }, [stateWords.userStatistic]);

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
