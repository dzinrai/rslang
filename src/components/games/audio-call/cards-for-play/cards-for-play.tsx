import React, { useState, useEffect } from 'react';
import './cards-for-play.css'
import checkWord from '../../../learn-words/buttons/check-word';
import {CSSTransition} from 'react-transition-group'

interface CardsForPlayProps {
    cards: any,
    currentWord: any,
    setCurrentWord: any,
    checkWord: any,
    appearCards: boolean
}

export default ({ cards, currentWord, checkWord, appearCards }: CardsForPlayProps) => {
    console.log('AAAA')
    console.log('cards', cards)
    if (!cards || !currentWord) return null
    console.log('appearCards', appearCards)
    // useEffect(() => {
    //     setAppearCards(false)
    // })
    return (
        <>
        {cards.map((card: any) =>  <CSSTransition in={appearCards} appear={true} key={card.id} timeout={1000} classNames='example'>
        <div onClick={(event) => checkWord(event, card.word)} 
        className='card'>{card.wordTranslate}</div>
        </CSSTransition>
        )}
        </>
    )
}