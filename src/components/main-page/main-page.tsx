import React, { useEffect, useContext } from 'react';
import styles from './main-page.module.css';
import LastWord from './last-word/last-word';
import PlanForToday from './plan-for-today/plan-for-today';
import ToDoAction from './to-do-action/to-do-action';
import TodayProgress from '../today-progress';
import { storeWords } from '../../context/contextWords';
import { getSettings, createSettings } from '../../services/settings';
import preloadWords from '../../services/preloadWords';

function MainPage() {
  const wordsState = useContext(storeWords);
  const dispatchWords = wordsState.dispatch;
  const userSettingsState = useContext(storeWords);
  const defaultUserSettings = userSettingsState.state.userSettings;

  useEffect(() => {
    preloadWords(dispatchWords);

    getSettings().catch((err) => {
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
          <LastWord />
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
