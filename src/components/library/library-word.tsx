/* eslint-disable no-underscore-dangle */
/* eslint no-param-reassign: "error" */
import React, { useState } from 'react';
import styles from './library-word.module.css';
import WordRate from './word-rate';
import { ReactComponent as Ear } from '../../img/ear.svg';
import { ReactComponent as Arrow } from '../../img/arrowDown.svg';
import WordMoreInfo from './word-more-info';
import DeleteRestoreBtn from './library-delete-restore-button';

interface LibraryWordProps {
  word: any;
  isDeletedPage: boolean;
}

function LibraryWord({ word, isDeletedPage }: LibraryWordProps) {
  const [isFullInfo, setIsFullInfo] = useState(false);

  if (!word || !word.word) return null;
  function moreInfo() {
    setIsFullInfo(!isFullInfo);
  }

  return (
    <div className={styles.libraryLine}>
      <div className={styles.wordBlock}>
        <span className={styles.wordAndTranslation}>
          <p className={styles.word}>{`${word.word.slice(0, 1).toUpperCase()}${word.word.slice(1)}`}</p>
          <p className={styles.translation}>{word.wordTranslate}</p>
        </span>
        <div className={styles.transcriptAndRate}>
          <span className={styles.transcript}>
            <Ear />
            {word.transcription}
          </span>
          <WordRate rate={word.userWord.optional.wordIndicator} wordId={word._id} />
        </div>
      </div>
      <img className={styles.wordImage} src={`https://raw.githubusercontent.com/dzinrai/rslang-data/master/${word.image}`} alt={word.word} />
      <div className={styles.wordInfo}>
        <button className={styles.systemInfoBtn} type="button">Interval system Info</button>
        <div className={styles.repeatDate}>
          <span>Last time repeat:</span>
          <b className={styles.date}>{word.userWord.optional.lastView}</b>
        </div>
        <div className={styles.nextDate}>
          <span>Next time:</span>
          <b className={styles.date}>{word.userWord.optional.nextView}</b>
        </div>
        <div className={styles.repeatCount}>
          <span>
            Repeated&nbsp;
            <b className={styles.count}>{word.userWord.optional.interval}</b>
            &nbsp;
            times
          </span>
        </div>
      </div>
      <DeleteRestoreBtn word={word} isDeletedPage={isDeletedPage} />

      <button
        className={`${styles.arrowBtn} ${isFullInfo ? styles.close : ''}`}
        type="button"
        onClick={() => moreInfo()}
      >
        <Arrow />
      </button>

      {isFullInfo
        && (
          <div className={`${styles.moreInfo} ${isFullInfo ? styles.opened : ''}`}>
            <WordMoreInfo
              wordId={word._id}
              textExample={word.textExample}
              textExampleTranslate={word.textExampleTranslate}
              textMeaning={word.textMeaning}
              textMeaningTranslate={word.textMeaningTranslate}
              difficulty={word.userWord.difficulty}
            />
          </div>
        )}
    </div>
  );
}

export default LibraryWord;
