import React, { useState, useEffect, useRef } from 'react';
import styles from './play.module.css'
import './backs.css'
import ButtonBack from '../controls/button-back/button-back';
import CardsForPlay from './cards-for-play/cards-for-play';
import AudioIcon from './audio-icon/audio-icon';
import CorrectAnswer from './correct-answer/correct-answer';
import {CSSTransition} from 'react-transition-group'

const URL_CONTENT = 'https://raw.githubusercontent.com/dzinrai/rslang-data/master/';

function randomInteger(min = 0, max = 4) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

interface PlayProps {
    words: any
}

export default ({ words }: PlayProps) => {
    const [currentWord, setCurrentWord] = useState<any>(null)
    const [arrayIndex, setArrayIndex] = useState<number>(0)
    const [currentCards, setCurrentCards] = useState<any>([])
    const [correctAnswer, setCorrectAnswer] = useState<any>(false)
    const [appearCards, setAppearCards] = useState<boolean>(true)
    const lastWord = useRef(false)

    let cardsArrays: any = []

    function audioRemove() {
        const circleLines = document.querySelectorAll('.audioLines');
        for(let i = 0; i < circleLines.length; i++) {
            circleLines[i].classList.remove('volumeChanges');
        }
    }
    function audioAdd() {
        const circleLines = document.querySelectorAll('.audioLines');
        for(let i = 0; i < circleLines.length; i++) {
            circleLines[i].classList.add('volumeChanges');
        }
    }

    const sayWord = () => {
        if (currentWord !== null) {
            const newSound = new Audio(URL_CONTENT + currentWord.audio);
            newSound.onplay = audioAdd
            newSound.play();
            newSound.onended = audioRemove
        }
    };

    for (let i = 0; i < 50; i += 5) {
        let tempArray: any = []
        for (let j = 0; j < 5; j += 1) {
            tempArray.push(words[i + j])
        }
        cardsArrays.push(tempArray)
    }
    console.log(cardsArrays)
    function checkWord(event: any, word: string) {
        if (event.currentTarget.classList.contains('card')) {
            if (word === currentWord.word) {
                event.currentTarget.classList.remove('card')
                event.currentTarget.classList.add('activeCard')
                console.log('index1', arrayIndex)
                if (arrayIndex < 9) {
                    setArrayIndex(arrayIndex + 1)
                } else {
                    lastWord.current = true
                }
                console.log('index2', arrayIndex)
                console.log('cardsArrays', cardsArrays)
                setCorrectAnswer(true)
            } else {
                event.currentTarget.classList.remove('card')
                event.currentTarget.classList.add('inactiveCard')
            }    
        }
    }

    function helpPlease() {
        setCorrectAnswer(true)

        if (arrayIndex < 9) {
            setArrayIndex(arrayIndex + 1)
        } else {
            lastWord.current = true
        }
        const curWords = document.querySelectorAll('.card')
        curWords.forEach((el: any) => {
            if (el.innerText === currentWord.wordTranslate) {
                el.classList.remove('card')
                el.classList.add('activeCard')
            }
        })
    }

    function nextCards() {
        if (arrayIndex <= 9 && !lastWord.current) {
            const bg = document.querySelectorAll(`.background${arrayIndex}`)[0]
            bg.classList.add(`background${arrayIndex + 1}`)
            bg.classList.remove(`background${arrayIndex}`)
            setCorrectAnswer(false)
            setCurrentCards(cardsArrays[arrayIndex])
            setCurrentWord(cardsArrays[arrayIndex][randomInteger(0, 4)])    
            // setAppearCards(true)
        }
    }

    useEffect(() => {
        // setAppearCards(true)
        setCurrentCards(cardsArrays[arrayIndex])
        setCurrentWord(cardsArrays[arrayIndex][randomInteger(0, 4)])
    }, [])
    // console.log(currentCards)
    // console.log(currentWord)
    
    // console.log(words)
    return (
        <div className='background1'>
            <ButtonBack />
            {<div className={styles.container}>
                <div className={styles.audioContainer}>
                    {correctAnswer ? 
                    <CSSTransition in={appearCards} appear={true} timeout={1000} classNames='example'>
                        <CorrectAnswer answer={currentWord} />
                    </CSSTransition> :
                    <AudioIcon word={currentWord} sayWord={sayWord} />}
                </div>
                <div className={styles.cardsContainer}>
                        <CardsForPlay cards={currentCards} currentWord={currentWord} 
                        setCurrentWord={(index: number) => setCurrentWord(currentCards[index])}
                        checkWord={(event: any, currentWord: string) => checkWord(event, currentWord)}
                        appearCards={appearCards}/>
                </div>
                {correctAnswer ? <button onClick={nextCards} className={styles.nextButton} type='button'>Next words</button> :
                <button onClick={helpPlease} className={styles.nextButton} type='button'>Help please</button>}
            </div>}

            <div className={styles.correctWords}>
            {' '}
            {7}
            {' '}
            <span>correct words</span>
            </div>
        </div>
    )
}