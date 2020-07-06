import React from 'react';
import styles from './game-for-today.module.css';

interface Props {
    boldText: string,
    picture: string,
    title: string
}

function GameForToday({ boldText, picture, title }: Props) {
  return (
    <div className={styles.gameContainer}>
      <div className={styles.gameText}>
        Learn
        {' '}
        <span style={{ fontWeight: 600 }}>{boldText}</span>
        {' '}
        in this game
      </div>
      <div className={styles.gameImg}><img src={picture} alt="" /></div>
      <div className={styles.gameTitle}>{title}</div>
    </div>
  );
}

export default GameForToday;
