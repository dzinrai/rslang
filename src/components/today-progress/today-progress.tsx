import React from 'react';
import styles from './today-progress.module.css';
import { ReactComponent as TodayProgressImage } from '../../img/lamp-main.svg';

function TodayProgress() {
  return (
    <div className={styles.today_progress_container}>
      <span>
        <h3 className={styles.user_name}>Jhon Doe</h3>
        <p className={styles.today_description}>
          Today you have learned
          <span className={styles.bold_text}>15 new words</span>
          , including
          <span className={styles.bold_text}>5 complex words</span>
          .
        </p>
      </span>
      <TodayProgressImage className={styles.lamp_img} />
    </div>
  );
}

export default TodayProgress;
