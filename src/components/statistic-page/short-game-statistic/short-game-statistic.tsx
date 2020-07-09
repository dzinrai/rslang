import React from 'react';
import styles from './short-game-statistic.module.css';
import { ReactComponent as EnglishPuzzle } from  '../../../img/puzzle.svg'

function ShortGameStatistic(testStats: any) {
    console.log(testStats)
  return (
    <div className={styles.container}>
        <div className={styles.gameImage}>
            {testStats.image}
        </div>
        <div className={styles.gameInfo}>
            <div className={styles.gameTitle}>{testStats.title}</div>
            <div className={styles.gameStats}>{testStats.stats}% new words</div>
        </div>
    </div>
  );
}

export default ShortGameStatistic;
