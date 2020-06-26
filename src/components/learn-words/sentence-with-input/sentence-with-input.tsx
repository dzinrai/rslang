import React, { useContext, useEffect, useState } from 'react';
import styles from './sentence-with-input.module.css';

interface Word {
  word: string
}

function SentenceWithInput(props: Word){
  const { word } = props
  const [indexes, setIndexes] = useState(Array())

    function checkWord(e: any) {
      if (e.keyCode === 13) {
        let inputWord = e.target.value.toLowerCase()
        setIndexes([])
        // console.log(inputWord)
        if (inputWord === word) {
          console.log('true')
        } else {
          if (inputWord.length !== word.length) {
            console.log('false')
          } else {
            let indexes: any = []
            inputWord.split('').map((el: string, i: number) => {
              if (el !== word[i]) indexes.push(i)
            })
            // console.log(indexes)
            setIndexes(indexes.concat(indexes))
          }
        } 
        e.target.value = '' 
      }
    }
  
    return(
      <>
        <div className={styles.sentenceContainer}>
          <span className={styles.inputContainer}>
            <span className={styles.background}>
              {word.split('').map(el => <span>{el}</span>)}
            </span>
            <span className={styles.wordContainer}>
            {word.split('').map((el, i) => 
            indexes.includes(i) ? 
            <span className={styles.mistake}>{el}</span> : 
            <span className={styles.correct}>{el}</span>
            )}            
            </span>
            <input className={styles.answerInput} onKeyDown={(e) => checkWord(e)} type="text" name="" id=""/>
            </span>
            {/* <span className={styles.restOfSentence}>falls to the ground</span> */}
        </div>
      </>
    )
}

export default SentenceWithInput;