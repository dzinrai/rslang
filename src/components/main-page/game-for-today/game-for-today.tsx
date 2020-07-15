import React from 'react';
import { Link } from 'react-router-dom';
import styles from './game-for-today.module.css';

interface Props {
  boldText: string,
  picture: string,
  title: string,
  path: string,
}

function GameForToday({
  boldText, picture, title, path,
}: Props) {
  return (
    <Link to={`/mini-games/${path}`} className={styles.gameContainer}>
      <div className={styles.gameText}>
      
        <span style={{ fontWeight: 600 }}>{boldText}</span>
       
      </div>
      <div className={styles.gameImg}><img src={picture} alt="" /></div>
      <div className={styles.gameTitle}>{title}</div>
    </Link>
  );
}

export default GameForToday;
