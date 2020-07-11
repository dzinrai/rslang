import React, { useState, useEffect } from 'react';
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
    setCheckedCircles: any,
    allWords: any
    fullCorrectList: any
}

export default ({ couple, wordsIndex, setWordsIndex, isActive, setTotalPoints, setCorrectWords, 
    points, setPoints, checkedCircles, setCheckedCircles, 
    allWords, fullCorrectList }: CardProps) => {
    
    const [backColor, setBackColor] = useState('#1958DB')
    useEffect(() => {
        if (points === 10) {
            setBackColor('#1958DB')
        }
        if (points === 80) {
            setBackColor('salmon')
        }
        if (points === 20) {
            setBackColor('seagreen')
        }
        if (points === 40) {
            setBackColor('sandybrown')
        }
    })
  const checkCouple = (res: number) => {
    if (isActive && wordsIndex < allWords.length - 1) {
        if (res === couple.yes) {
            setCheckedCircles(checkedCircles + 1) 
            if (checkedCircles % 4 === 3 && checkedCircles < 12) setPoints(points * 2)
            fullCorrectList.push(allWords[wordsIndex])
            setWordsIndex(wordsIndex + 1)
            setTotalPoints()
            setCorrectWords()
        } else {
            setWordsIndex(wordsIndex + 1)
            setCheckedCircles(0)
            setPoints(10)    
        }
    }
  }
  
  return (
    <>
        <div className={styles.wordsContainer}>
            <div className={styles.wordPoints} style={{backgroundColor: `${backColor}`}}>+{points}</div>
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
