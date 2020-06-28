import React, { useContext, useEffect, useState } from 'react';
import styles from './sentence-with-input.module.css';

interface Word {
  word: string, 
  onCorrect: any,
  setUsersWord: any,
  usersWord: string,
  indexes: any,
  setIndexes: any,
  setIndex: any
}

function SentenceWithInput({ word, onCorrect, setUsersWord, usersWord, indexes, setIndexes, setIndex }: Word){
    function checkWord(e: any) {
      if (e.keyCode === 13) {
        let inputWord = usersWord.toLowerCase().trim()
        setIndexes([])
        if (inputWord === word) {
          console.log('true')
          onCorrect(true)
        } else {
          if (inputWord.length !== word.length) {
            console.log('false')
            let indexes: any = []
            word.split('').map((el: string, i: number) => {
              if (el !== inputWord[i]) indexes.push(i)
            })
            setIndexes(indexes.concat(indexes))
          } else {
            let indexes: any = []
            inputWord.split('').map((el: string, i: number) => {
              if (el !== word[i]) indexes.push(i)
            })
            console.log(indexes)
            setIndexes(indexes.concat(indexes))
          }
        } 
        setUsersWord('')
        e.target.value = ''
      }
    }

    if (!word) return null
    
    return (
      <>
        <div className={styles.sentenceContainer}>
          <span className={styles.inputContainer}>
            <span className={styles.background}>
              {word.split('').map(el => <span className={styles.hidden}>{el}</span>)}
            </span>
            <span className={styles.wordContainer}>
            {word.split('').map((el, i) => 
            indexes.includes(i) ? 
            <span className={styles.mistake}>{el}</span> : 
            <span className={styles.correct}>{el}</span>
            )}            
            </span>
            <input className={styles.answerInput} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
   setUsersWord(e.target.value)}} onKeyDown={(e: any) => checkWord(e)} type="text" name="" id="inputWord"/>
            </span>
        </div>
      </>
    )
}

export default SentenceWithInput;