import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import moment from 'moment';
import { getStatistic, createStatistic } from '../../../services/statistic'
import GameStatsTable from '../game-stats-table/game-stats-table';
import styles from './games-statistic.module.css';
import GameStats from '../game-stats/game-stats'
import EnglishPuzzle from '../../../img/small-puzzle.svg';
import AudioCall from '../../../img/small-audiocall.svg';
import Sprint from '../../../img/small-sprint.svg';
import Savannah from '../../../img/small-savannah.svg';
import SpeakIt from '../../../img/small-speakit.svg';
import OwnGame from '../../../img/small-owngame.svg';

const gamesArray = [
  {title: 'English Puzzle', image: EnglishPuzzle},
  {title: 'Audio Call', image: AudioCall},
  {title: 'Sprint', image: Sprint},
  {title: 'Savannah', image: Savannah},
  {title: 'Speak It', image: SpeakIt},
  {title: 'Own Game', image: OwnGame}
]

function GamesStatistic() {
  const [visible, setVisible] = useState(false);
  const [globalStats, setGlobalStats] = useState<any>()
  const [newSource, setNewSource] = useState<any>(null)

  // function info(title: string) {
  //   // request for getting stats according to title
  //   getStatistic().then((data) => {
  //     setVisible(true);
  //     Modal.info({
  //       title: 'Statistic',
  //       visible,
  //       centered: true,
  //       content: (
  //         <div>
  //           <p className={styles.statsTitle}>{title}</p>
  //           <div className={styles.statsTableContainer}>
  //             <GameStatsTable data={data} title={title}/>
  //           </div>
  //         </div>
  //       ),
  //       onOk() { setVisible(false); },
  //       okText: 'Close',
  //     });  
  //   })
  // }

  return (
    <div className={styles.container}>
      <div className={styles.sectionTitle}>Mini-games statistic</div>
      <div className={styles.gamesContainer}>
        {gamesArray.map((el: any) => <GameStats title={el.title} image={el.image}/>)}
        {/* <button onClick={info} className={styles.gameContainer} type="button">
          <div className={styles.gameImage}>
            <EnglishPuzzle />
          </div>
          <div className={styles.gameInfo}>
            <div className={styles.gameTitle}>English Puzzle</div>
            <div className={styles.gameStats}>15% correct words</div>
          </div>
        </button>
        <button className={styles.gameContainer} type="button">
          <div className={styles.gameImage}>
            <AudioCall />
          </div>
          <div className={styles.gameInfo}>
            <div className={styles.gameTitle}>Audio Call</div>
            <div className={styles.gameStats}>15% correct words</div>
          </div>
        </button>
        <button className={styles.gameContainer} type="button">
          <div className={styles.gameImage}>
            <Sprint />
          </div>
          <div onClick={info} className={styles.gameInfo}>
            <div className={styles.gameTitle}>Sprint</div>
            <div className={styles.gameStats}>15% correct words</div>
          </div>
        </button>
        <button className={styles.gameContainer} type="button">
          <div className={styles.gameImage}>
            <Savannah />
          </div>
          <div className={styles.gameInfo}>
            <div className={styles.gameTitle}>Savannah</div>
            <div className={styles.gameStats}>15% correct words</div>
          </div>
        </button>
        <button className={styles.gameContainer} type="button">
          <div className={styles.gameImage}>
            <SpeakIt />
          </div>
          <div className={styles.gameInfo}>
            <div className={styles.gameTitle}>Speak It</div>
            <div className={styles.gameStats}>15% correct words</div>
          </div>
        </button>
        <button className={styles.gameContainer} type="button">
          <div className={styles.gameImage}>
            <OwnGame />
          </div>
          <div className={styles.gameInfo}>
            <div className={styles.gameTitle}>Own Game</div>
            <div className={styles.gameStats}>15% correct words</div>
          </div>
        </button>*/}
      </div>
    </div>
  );
}

export default GamesStatistic;
