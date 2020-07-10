import React, { useState } from 'react';
import styles from '../play.module.css';

interface CardProps {
    couple: any,
    setWordsIndex: any,
    isActive: boolean
}

export default ({ couple, setWordsIndex, isActive }: CardProps) => {
  const checkCouple = (res: number) => {
    if (isActive) {
        if (res === couple.yes) setWordsIndex()
    }
  }
  
  return (
    <>
        <div className={styles.wordsContainer}>
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
