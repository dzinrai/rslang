import React from 'react';
import styles from './plan-for-today.module.css';
import GameForToday from '../game-for-today/game-for-today';
import sprinter from '../../../img/sprinter.svg';
import puzzle from '../../../img/puzzle.svg';

const gamesForToday = [
    {
        boldText: '8 difficult words',
        picture: sprinter,
        title: 'Sprint'
    },
    {
        boldText: '10 new words',
        picture: puzzle,
        title: 'English Puzzle'
    }
]



function PlanForToday() {
    return (
        <div className={styles.plansContainer}>
            <p className={styles.title}>Plan For Today</p>
            <div className={styles.plans}>
                <GameForToday boldText={gamesForToday[0].boldText} picture={gamesForToday[0].picture} title={gamesForToday[0].title}/>
                <GameForToday boldText={gamesForToday[1].boldText} picture={gamesForToday[1].picture} title={gamesForToday[1].title}/>
            </div>
        </div>
    )
}

export default PlanForToday;
