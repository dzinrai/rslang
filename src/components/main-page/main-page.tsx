import React, { useEffect, useContext, useState } from 'react';
import moment from 'moment';
import styles from './main-page.module.css';
import LastWord from './last-word/last-word';
import PlanForToday from './plan-for-today/plan-for-today';
import ToDoAction from './to-do-action/to-do-action';
import TodayProgress from '../today-progress';
import { storeWords } from '../../context/contextWords';
import { getSettings, createSettings } from '../../services/settings';
import preloadWords from '../../services/preloadWords';
import { preloadWordsOnBackend } from '../../services/create-user-word';
import { getStatistic } from '../../services/statistic';
import { getWordByIdFromAPI } from '../../services/getWords';

function MainPage() {
  const wordsState = useContext(storeWords);
  const dispatchWords = wordsState.dispatch;
  const userSettingsState = useContext(storeWords);
  const defaultUserSettings = userSettingsState.state.userSettings;
  const [lastWord, setLastWord] = useState(null);

  async function updateLastWord(wordId: string) {
    const word = await getWordByIdFromAPI(wordId);
    if (word && !word.error) setLastWord(word);
  }

  useEffect(() => {
    let thisNewDay = false;
    getSettings()
      .then((settingsData) => {
        const date1 = moment(moment().format('DD/MM/YY'));
        const date2 = moment(settingsData.lastVisit);
        if (date1.diff(date2, 'days') >= 1) {
          thisNewDay = true;
          console.log("подгрузка новых слоы на бэк")
          preloadWordsOnBackend(settingsData.wordsPerDay);
          preloadWords(dispatchWords);
        }
      })
      .then(() => {
        getStatistic()
          .then((statistic:any) => {
            if (!statistic || !statistic.optional) return;
            console.log(statistic);
            dispatchWords({ type: 'setUserStatistic', value: statistic });
            updateLastWord(statistic.optional.common.lastWord);
            // eslint-disable-next-line
            if (thisNewDay) statistic.optional.common.dayProgress = 0;
          });
      }).catch((err) => {
        if (err.message === 'Not found settings') {
          createSettings(defaultUserSettings);
        }
      });
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.progressAndWord}>
          <TodayProgress />
          <LastWord word={lastWord} />
        </div>
        <div className={styles.toDoAndPlan}>
          <ToDoAction />
          <div className={styles.plan}>
            <PlanForToday />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
