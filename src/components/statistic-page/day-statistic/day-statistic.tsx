import React from 'react';
import styles from './day-statistic.module.css';

interface DayStatisticProps {
    day: string,
    percent: number
}

function DayStatistic({ day, percent }: DayStatisticProps) {
  const progressWidth = (183 * percent) / 100
  const progressColor = percent > 60 ? '#2F80ED' : '#EB5757'
  return (
    <div className={styles.container}>
        <div className={styles.weekDay}>{day}</div>
        <div className={styles.dayProgress}>
            <div className={styles.wholeBar}></div>
            <div className={styles.progressBar} style={{width: `${progressWidth}px`, backgroundColor: `${progressColor}`}}></div>
        </div>
        <div className={styles.progressInProc}>{percent}%</div>
    </div>  
  );
}

export default DayStatistic;
