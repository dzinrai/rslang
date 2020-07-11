import React, { useEffect, useContext } from 'react';
import styles from './main-page.module.css';
import LastWord from './last-word/last-word';
import PlanForToday from './plan-for-today/plan-for-today';
import ToDoAction from './to-do-action/to-do-action';
import TodayProgress from '../today-progress';
import { storeWords } from '../../context/contextWords';
import preloadWords from '../../services/preloadWords';

function MainPage() {
  const wordsState = useContext(storeWords);
  const dispatchWords = wordsState.dispatch;

  useEffect(() => {
    preloadWords(dispatchWords);
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
