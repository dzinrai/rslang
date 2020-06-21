import React from 'react';
import GameForToday from '../game-for-today/game-for-today';
import sprinter from '../../../img/sprinter.png';
import puzzle from '../../../img/puzzle.png';

const gamesForToday = [
    {
        boldText: '8 difficult',
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
        <>
        <GameForToday boldText={gamesForToday[0].boldText} picture={gamesForToday[0].picture} title={gamesForToday[0].title}/>
        <GameForToday boldText={gamesForToday[1].boldText} picture={gamesForToday[1].picture} title={gamesForToday[1].title}/>
        </>
    )
}

export default PlanForToday;
