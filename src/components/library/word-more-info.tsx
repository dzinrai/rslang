/* eslint-disable no-underscore-dangle */
/* eslint no-param-reassign: "error" */
import React, { useState, useContext } from 'react';
import styles from './word-more-info.module.css';
import { ReactComponent as Trans } from '../../img/btnTranslate.svg';
import normalizeString from '../../assets/normalizeString';
import { storeWords } from '../../context/contextWords';
import makeWordDifficultyTo from '../../services/makeWordDifficult';

interface WordMoreInfoProps {
  wordId: string;
  textExample: string;
  textExampleTranslate: string;
  textMeaning: string;
  textMeaningTranslate: string;
  difficulty: string;
}

function WordMoreInfo(props: WordMoreInfoProps) {
  const {
    wordId, textExample, textExampleTranslate, textMeaning, textMeaningTranslate, difficulty,
  } = props;
  const wordsState = useContext(storeWords);
  const { words } = wordsState.state;
  const dispatchWords = wordsState.dispatch;
  const [isTranslation, setIsTranslation] = useState(false);
  function showTranslation() {
    setIsTranslation(!isTranslation);
  }
  function toDifficulty(newDifficulty: string) {
    makeWordDifficultyTo(wordId, newDifficulty);
    if (!words) return;
    words.forEach((wordsInContext: any, i: number) => {
      if (wordsInContext._id === wordId) {
        const newWords = [...words];
        newWords[i].userWord.difficulty = newDifficulty;
        dispatchWords({ type: 'setWords', value: newWords });
      }
    });
  }

  return (
    <div className={styles.wordMoreInfo}>
      <div className={styles.texts}>
        {isTranslation && <span className={styles.text}>{textExampleTranslate}</span>}
        {isTranslation && <span className={styles.textMean}>{textMeaningTranslate}</span>}
        {!isTranslation
          && <span className={styles.text}>{normalizeString(textExample)}</span>}
        {!isTranslation
        && <span className={styles.textMean}>{normalizeString(textMeaning)}</span>}
        <button
          className={styles.switchShowBtn}
          type="button"
          onClick={() => showTranslation()}
        >
          <Trans />
        </button>
      </div>
      <button
        className={styles.moveToBtn}
        type="button"
        onClick={difficulty !== 'hard' ? () => toDifficulty('hard') : () => toDifficulty('normal')}
      >
        Move to
        {' '}
        {difficulty !== 'hard' ? 'hard' : 'normal'}
      </button>
    </div>
  );
}

export default WordMoreInfo;
