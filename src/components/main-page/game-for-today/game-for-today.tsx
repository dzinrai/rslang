import React from 'react';
import styles from './game-for-today.module.css';

interface Props {
    boldText: string,
    picture: string,
    title: string
}
  

function GameForToday(props: Props) {
    return (
        <div className={styles.gameContainer}>
            <div className={styles.gameText}>
            Learn <span style={{fontWeight: 600}}>{props.boldText}</span> in this game
            </div>
            <div className={styles.gameImg}><img src={props.picture} alt=""/></div>
            <div className={styles.gameTitle}>{props.title}</div>
        </div>
    )
}

export default GameForToday;
