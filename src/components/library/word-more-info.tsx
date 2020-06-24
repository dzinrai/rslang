import React, { useState } from 'react';
import styles from './word-more-info.module.css';
import { ReactComponent as Trans } from '../../img/btnTranslate.svg';
import normalizeString from '../../assets/normalizeString';

interface WordMoreInfoProps {
  textExample: string;
  textExampleTranslate: string;
  textMeaning: string;
  textMeaningTranslate: string;
}

function WordMoreInfo(props: WordMoreInfoProps) {
  const {
    textExample, textExampleTranslate, textMeaning, textMeaningTranslate,
  } = props;
  const [isTranslation, setIsTranslation] = useState(false);
  function showTranslation() {
    setIsTranslation(!isTranslation);
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
      >
        Move to difficult
      </button>
    </div>
  );
}

export default WordMoreInfo;
