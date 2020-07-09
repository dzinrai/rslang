import React from 'react';
import styles from './games-statistic.module.css';
import ShortGameStatistic from '../short-game-statistic/short-game-statistic';
import { ReactComponent as EnglishPuzzle } from  '../../../img/small-puzzle.svg';
import { ReactComponent as AudioCall } from  '../../../img/small-audiocall.svg';
import { ReactComponent as Sprint } from  '../../../img/small-sprint.svg';
import { ReactComponent as Savannah } from  '../../../img/small-savannah.svg';
import { ReactComponent as SpeakIt } from  '../../../img/small-speakit.svg';
import { ReactComponent as OwnGame } from  '../../../img/small-owngame.svg';

function GamesStatistic() {
//   const testGamesStats = [
//       {
//         title: 'English Puzzle',
//         image: <EnglishPuzzle />,
//         stats: 45
//       },
//       {
//         title: 'Audio Call',
//         image: <AudioCall />,
//         stats: 35
//       },

//   ]
  return (
    <div className={styles.container}>
      <div className={styles.sectionTitle}>Mini-games statistic</div>  
      <div className={styles.gamesContainer}>
        <div className={styles.gameContainer}>
            <div className={styles.gameImage}>
                <EnglishPuzzle />
            </div>
            <div className={styles.gameInfo}>
                <div className={styles.gameTitle}>English Puzzle</div>
                <div className={styles.gameStats}>15% new words</div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default GamesStatistic;
