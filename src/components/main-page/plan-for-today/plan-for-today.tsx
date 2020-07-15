import React from 'react';
import styles from './plan-for-today.module.css';
import GameForToday from '../game-for-today/game-for-today';
import audioCall from '../../../img/audio-call.svg';
import puzzle from '../../../img/puzzle.svg';

const gamesForToday = [
  {
    boldText: 'Allows you to improve listening comprehension of English',
    picture: audioCall,
    title: 'Audio Call',
  },
  {
    boldText: 'Build a sentence from words. Effective exercise to understand the structure of sentences',
    picture: puzzle,
    title: 'English Puzzle',
  },
];

function PlanForToday() {
  return (
    <div className={styles.plansContainer}>
      <p className={styles.title}>Plan For Today</p>
      <div className={styles.plans}>
        <GameForToday
          boldText={gamesForToday[0].boldText}
          picture={gamesForToday[0].picture}
          title={gamesForToday[0].title}
          path="audio-call"
        />
        <GameForToday
          boldText={gamesForToday[1].boldText}
          picture={gamesForToday[1].picture}
          title={gamesForToday[1].title}
          path="puzzle"
        />
      </div>
    </div>
  );
}

export default PlanForToday;
