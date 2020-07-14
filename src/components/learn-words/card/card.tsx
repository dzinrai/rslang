import React from 'react';
import styles from './card.module.css';
import WordProgressIndicator from '../word-progress-indicator/word-progress-indicator';
import SentenceWithInput from '../sentence-with-input/sentence-with-input';
import SoundIndicator from '../sound-indicator/sound-indicator';
import WordInfo from '../word-info/word-info';
import MoveDeleteWord from '../move-delete-word/move-delete-word';

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
  indicator:number,
}

function Card({
  word, setIndex, onCorrect, correct, setUsersWord, usersWord, indexes,
  setIndexes, autoplay, setAutoplay, inProp, setInProp, transpAnswer, setTranspAnswer, indicator,
}: CardProps) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.sentenceImg}>
        <div className={styles.sentensewordTranslate}>
          <div className={styles.mainSentenceContainer}>
            <WordProgressIndicator rate={indicator} />
            <SentenceWithInput
              word={word.word}
              wordObject={word}
              correct={correct}
              onCorrect={onCorrect}
              setUsersWord={setUsersWord}
              usersWord={usersWord}
              indexes={indexes}
              setIndexes={setIndexes}
              setIndex={setIndex}
              inProp={inProp}
              setInProp={setInProp}
              transpAnswer={transpAnswer}
              setTranspAnswer={setTranspAnswer}
            />
            <SoundIndicator autoplay={autoplay} setAutoplay={setAutoplay} />
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
          <img style={{ borderRadius: '5px' }} src={`https://raw.githubusercontent.com/dzinrai/rslang-data/master/${word.image}`} width="195" height="150" alt="" />
          <MoveDeleteWord wordObject={word} />
        </div>
      </div>
      <WordInfo
        word={word.word}
        textExample={word.textExample}
        textMeaning={word.textMeaning}
        textExampleTranslate={word.textExampleTranslate}
        textMeaningTranslate={word.textMeaningTranslate}
        audio={word.audio}
        audioExample={word.audioExample}
        audioMeaning={word.audioMeaning}
        correct={correct}
      />
    </div>
  );
}

export default Card;
