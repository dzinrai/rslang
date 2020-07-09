import React, { useState } from 'react';
import { Modal } from 'antd';
import GameStatsTable from '../game-stats-table/game-stats-table';
import styles from './games-statistic.module.css';
import { ReactComponent as EnglishPuzzle } from '../../../img/small-puzzle.svg';
import { ReactComponent as AudioCall } from '../../../img/small-audiocall.svg';
import { ReactComponent as Sprint } from '../../../img/small-sprint.svg';
import { ReactComponent as Savannah } from '../../../img/small-savannah.svg';
import { ReactComponent as SpeakIt } from '../../../img/small-speakit.svg';
import { ReactComponent as OwnGame } from '../../../img/small-owngame.svg';

function GamesStatistic() {
  const [visible, setVisible] = useState(false);

  function info() {
    const statsObject: any = { title: 'English Puzzle', date: 'AAAAAAA' };
    // request for getting stats according to title
    setVisible(true);
    Modal.info({
      title: 'Statistic',
      visible,
      centered: true,
      content: (
        <div>
          <p className={styles.statsTitle}>{statsObject.title}</p>
          <div className={styles.statsTableContainer}>
            <GameStatsTable />
          </div>
        </div>
      ),
      onOk() { setVisible(false); },
      okText: 'Close',
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.sectionTitle}>Mini-games statistic</div>
      <div className={styles.gamesContainer}>
        <div onClick={info} className={styles.gameContainer}>
          <div className={styles.gameImage}>
            <EnglishPuzzle />
          </div>
          <div className={styles.gameInfo}>
            <div className={styles.gameTitle}>English Puzzle</div>
            <div className={styles.gameStats}>15% correct words</div>
          </div>
        </div>
        <div className={styles.gameContainer}>
          <div className={styles.gameImage}>
            <AudioCall />
          </div>
          <div className={styles.gameInfo}>
            <div className={styles.gameTitle}>Audio Call</div>
            <div className={styles.gameStats}>15% correct words</div>
          </div>
        </div>
        <div className={styles.gameContainer}>
          <div className={styles.gameImage}>
            <Sprint />
          </div>
          <div className={styles.gameInfo}>
            <div className={styles.gameTitle}>Sprint</div>
            <div className={styles.gameStats}>15% correct words</div>
          </div>
        </div>
        <div className={styles.gameContainer}>
          <div className={styles.gameImage}>
            <Savannah />
          </div>
          <div className={styles.gameInfo}>
            <div className={styles.gameTitle}>Savannah</div>
            <div className={styles.gameStats}>15% correct words</div>
          </div>
        </div>
        <div className={styles.gameContainer}>
          <div className={styles.gameImage}>
            <SpeakIt />
          </div>
          <div className={styles.gameInfo}>
            <div className={styles.gameTitle}>Speak It</div>
            <div className={styles.gameStats}>15% correct words</div>
          </div>
        </div>
        <div className={styles.gameContainer}>
          <div className={styles.gameImage}>
            <OwnGame />
          </div>
          <div className={styles.gameInfo}>
            <div className={styles.gameTitle}>Own Game</div>
            <div className={styles.gameStats}>15% correct words</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamesStatistic;
