import React, { useContext, useEffect, useState } from 'react';
import styles from './card.module.css';
import WordProgressIndicator from '../word-progress-indicator/word-progress-indicator';
import SentenceWithInput from '../sentence-with-input/sentence-with-input';
import SoundIndicator from '../sound-indicator/sound-indicator';
import WordInfo from '../word-info/word-info';
import MoveDeleteWord from '../move-delete-word/move-delete-word';

interface TestWord {
  word: string,
  translation: string,
  transcription: string,
  image: string,
  sentenceExample: string,
  sentenceMeaning: string,
  sentenceExampleTrans: string,
  sentenceMeaningTrans: string
}

function Card(props: TestWord) {
  const { word, translation, transcription, image, sentenceExample, 
    sentenceMeaning, sentenceExampleTrans, sentenceMeaningTrans } = props

  return (
    <div className={styles.cardContainer}>
      <div className={styles.sentenceImg}>
        <div className={styles.sentenseTranslation}>
          <div className={styles.mainSentenceContainer}>
            <WordProgressIndicator />
            <SentenceWithInput word={word} />
            <SoundIndicator />
          </div>
          <div className={styles.wordTranscriptionContainer}>
            <span className={styles.translation}>
              {translation}
            </span>
            <span className={styles.transcription}>
              {transcription}
            </span>
          </div>
        </div>
        <div className={styles.imageMoveDelete}>
          <img src={image} width='195' height='150'></img>
          <MoveDeleteWord />
        </div>
      </div>
      <WordInfo word={word} sentenceExample={sentenceExample} sentenceMeaning={sentenceMeaning} 
      sentenceExampleTrans={sentenceExampleTrans} sentenceMeaningTrans={sentenceMeaningTrans} />
    </div>
  )
}

export default Card;