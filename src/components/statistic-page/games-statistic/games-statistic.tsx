import React, { useState, useEffect } from 'react';
import styles from './games-statistic.module.css';
import GameStats from '../game-stats/game-stats';
import EnglishPuzzle from '../../../img/small-puzzle.svg';
import AudioCall from '../../../img/small-audiocall.svg';
import Sprint from '../../../img/small-sprint.svg';
import Savannah from '../../../img/small-savannah.svg';
import SpeakIt from '../../../img/small-speakit.svg';
import OwnGame from '../../../img/small-owngame.svg';

const gamesArray = [
  { title: 'English Puzzle', image: EnglishPuzzle },
  { title: 'Audio Call', image: AudioCall },
  { title: 'Sprint', image: Sprint },
  { title: 'Savannah', image: Savannah },
  { title: 'Speak It', image: SpeakIt },
  { title: 'Own Game', image: OwnGame },
];

function GamesStatistic() {
  return (
    <div className={styles.container}>
      <div className={styles.sectionTitle}>Mini-games statistic</div>
      <div className={styles.gamesContainer}>
        {gamesArray.map((el: any) => <GameStats title={el.title} image={el.image} />)}
      </div>
    </div>
  );
}

export default GamesStatistic;
