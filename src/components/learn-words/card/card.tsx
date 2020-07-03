import React, { useContext, useEffect, useState } from 'react';
import styles from './card.module.css';
import WordProgressIndicator from '../word-progress-indicator/word-progress-indicator';
import SentenceWithInput from '../sentence-with-input/sentence-with-input';
import SoundIndicator from '../sound-indicator/sound-indicator';
import WordInfo from '../word-info/word-info';
import MoveDeleteWord from '../move-delete-word/move-delete-word';
import { storeWords } from '../../../context/contextWords';

interface CardProps {
  word: any,
  setWord: any,
  index: number,
  setIndex: any,
  onCorrect: any,
  correct: boolean,
  setUsersWord: any,
  usersWord: string,
  indexes: any,
  setIndexes: any,
  autoplay: boolean,
  setAutoplay: any,
  inProp: boolean,
  setInProp: any,
  transpAnswer: boolean,
  setTranspAnswer: any,
}

function Card({ word, setWord, index, setIndex, onCorrect, correct, setUsersWord, usersWord, indexes, 
  setIndexes, autoplay, setAutoplay, inProp, setInProp, transpAnswer, setTranspAnswer }: CardProps) {

  // const wordsState = useContext(storeWords);
  // const stateWords = wordsState.state;
  // console.log(stateWords)
  // const word = stateWords.words ? stateWords.words[index] : null;
  // setWord(word)
  // console.log(word)

  return (
    <div className={styles.cardContainer}>
      <div className={styles.sentenceImg}>
        <div className={styles.sentensewordTranslate}>
          <div className={styles.mainSentenceContainer}>
            <WordProgressIndicator />
            <SentenceWithInput word={word.word} correct={correct} onCorrect={onCorrect} setUsersWord={setUsersWord} 
            usersWord={usersWord} indexes={indexes} setIndexes={setIndexes} setIndex={setIndex}
            inProp={inProp} setInProp={setInProp} 
            transpAnswer={transpAnswer} setTranspAnswer={setTranspAnswer}/>
            <SoundIndicator autoplay={autoplay} setAutoplay={setAutoplay}/>
          </div>
          <div className={styles.wordTranscriptionContainer}>
            <span className={styles.wordTranslate}>
              {word.wordTranslate}
            </span>
            <span className={styles.transcription}>
              {word.transcription}
            </span>
          </div>
        </div>
        <div className={styles.imageMoveDelete}>
          <img style={{borderRadius: '5px'}} src={`https://raw.githubusercontent.com/dzinrai/rslang-data/master/${word.image}`} width='195' height='150'></img>
          <MoveDeleteWord />
        </div>
      </div>
      <WordInfo word={word.word} textExample={word.textExample} textMeaning={word.textMeaning} 
      textExampleTranslate={word.textExampleTranslate} textMeaningTranslate={word.textMeaningTranslate} 
      audio={word.audio} audioExample={word.audioExample} audioMeaning={word.audioMeaning} correct={correct}/>
    </div>
  )
}

export default Card;