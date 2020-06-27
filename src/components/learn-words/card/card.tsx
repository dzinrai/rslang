import React, { useContext, useEffect, useState } from 'react';
import styles from './card.module.css';
import WordProgressIndicator from '../word-progress-indicator/word-progress-indicator';
import SentenceWithInput from '../sentence-with-input/sentence-with-input';
import SoundIndicator from '../sound-indicator/sound-indicator';
import WordInfo from '../word-info/word-info';
import MoveDeleteWord from '../move-delete-word/move-delete-word';
import { storeWords } from '../../../context/contextWords';

// interface TestWord {
//   word: string,
//   wordTranslate: string,
//   transcription: string,
//   image: string,
//   textExample: string,
//   textMeaning: string,
//   textExampleTranslate: string,
//   textMeaningTranslate: string
// }

interface CardProps {
  index: number
}

function Card({ index }: CardProps) {

  const wordsState = useContext(storeWords);
  const stateWords = wordsState.state;
  const curword = stateWords.words ? stateWords.words[index] : null;
  console.log(curword)

  // const { word, wordTranslate, transcription, image, textExample, 
  //   textMeaning, textExampleTranslate, textMeaningTranslate } = curword

  return (
    <div className={styles.cardContainer}>
      <div className={styles.sentenceImg}>
        <div className={styles.sentensewordTranslate}>
          <div className={styles.mainSentenceContainer}>
            <WordProgressIndicator />
            <SentenceWithInput word={curword.word} />
            <SoundIndicator />
          </div>
          <div className={styles.wordTranscriptionContainer}>
            <span className={styles.wordTranslate}>
              {curword.wordTranslate}
            </span>
            <span className={styles.transcription}>
              {curword.transcription}
            </span>
          </div>
        </div>
        <div className={styles.imageMoveDelete}>
          <img style={{borderRadius: '5px'}} src={`https://raw.githubusercontent.com/dzinrai/rslang-data/master/${curword.image}`} width='195' height='150'></img>
          <MoveDeleteWord />
        </div>
      </div>
      <WordInfo word={curword.word} textExample={curword.textExample} textMeaning={curword.textMeaning} 
      textExampleTranslate={curword.textExampleTranslate} textMeaningTranslate={curword.textMeaningTranslate} 
      audio={curword.audio} audioExample={curword.audioExample} audioMeaning={curword.audioMeaning}/>
    </div>
  )
}

export default Card;