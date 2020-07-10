import React, { useState } from 'react';
import styles from '../play.module.css';

interface CardProps {
    couple: any,
    wordsIndex: number,
    setWordsIndex: any,
    isActive: boolean,
    setTotalPoints: any,
    setCorrectWords: any,
    points: number,
    setPoints: any,
    checkedCircles: number,
    setCheckedCircles: any
}

export default ({ couple, wordsIndex, setWordsIndex, isActive, setTotalPoints, setCorrectWords, 
    points, setPoints, checkedCircles, setCheckedCircles }: CardProps) => {
  const checkCouple = (res: number) => {
    if (isActive) {
        if (res === couple.yes) {
            setCheckedCircles(checkedCircles + 1) 
            if (checkedCircles % 4 === 3) setPoints(points * 2)
            setWordsIndex(wordsIndex + 1)
            setTotalPoints()
            setCorrectWords()
        } else {
            setCheckedCircles(0)
            setPoints(10)    
        }
    }
  }
  
  return (
    <>
        <div className={styles.wordsContainer}>
            <div className={styles.wordPoints}>+{points}</div>
            <div className={styles.word}>{couple.word}</div>
            <div className={styles.translation}>{couple.translate}</div>
        </div>
        <div className={styles.buttonsContainer}>
            <button className={styles.noButton} onClick={() => checkCouple(0)} type='button'>NO</button>
            <button className={styles.yesButton} onClick={() => checkCouple(1)} type='button'>YES</button>
        </div>
    </>
  );
};
