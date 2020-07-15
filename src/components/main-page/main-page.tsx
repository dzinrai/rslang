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
import { getStatistic, createStatistic } from '../../services/statistic';
import { getWordByIdFromAPI } from '../../services/getWords';
import { getUserName } from '../../services/getUserName';

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
    getUserName(dispatchWords);
    getSettings()
      .then((settingsData) => {
        const date1 = moment(moment().format('DD/MM/YY'), 'DD/MM/YY');
        const date2 = moment(settingsData.optional.lastVisit, 'DD/MM/YY');
        if (date1.diff(date2, 'd') >= 1) {
          thisNewDay = true;
          preloadWordsOnBackend(settingsData.wordsPerDay);
          preloadWords(dispatchWords);
          // eslint-disable-next-line
          settingsData.optional.lastVisit = moment().format('DD/MM/YY');
          createSettings(settingsData);
        }
      })/*eslint-disable*/
      .then(() => {
        getStatistic()
          .then((statistic:any) => {
            if (!statistic || !statistic.optional) return;
            dispatchWords({ type: 'setUserStatistic', value: statistic });
            updateLastWord(statistic.optional.common.lastWord);
            // eslint-disable-next-line
            if (thisNewDay) {
              statistic.optional.common.dayProgress = 0;
              statistic.optional.common.wordsToday.push(0);
              statistic.optional.common.newWordsToday = 0;
              statistic.optional.common.weekDay.push(moment().format('dddd'));
              statistic.optional.common.visitDate.push(moment().format('DD/MM/YY'));
              statistic.optional.common.errors = 0;
              statistic.optional.common.correct.push(0);
            }
            createStatistic(statistic);
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
