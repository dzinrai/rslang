import React, { useState } from 'react';
import styles from './word-info.module.css';
import { ReactComponent as Trans } from '../../../img/btnTranslate.svg';

interface InfoSentences {
  word: string,
  textExample: string,
  textMeaning: string,
  textExampleTranslate: string,
  textMeaningTranslate: string,
  audio: string,
  audioExample: string,
  audioMeaning: string,
  correct: boolean
}

function WordInfo(props: InfoSentences) {
  const {
    word, textExample, textMeaning, textExampleTranslate, textMeaningTranslate,
    correct,
  } = props;

  const [isTranslation, setIsTranslation] = useState(false);

  function showTranslation() {
    setIsTranslation(!isTranslation);
  }

  function defineWord(sentence: string) {
    const firstIndex = sentence.indexOf('<') + 3;
    const lastIndex = (sentence.lastIndexOf('>') - 3);
    return sentence.slice(firstIndex, lastIndex);
  }

  function hiddenWord(sentence: string, tag: string) {
    const curWord = defineWord(sentence);
    return sentence.replace(`<${tag}>${curWord}</${tag}>`, '____');
  }

  function showedWord(sentence: string, tag: string) {
    const curWord = defineWord(sentence);
    return sentence.replace(`<${tag}>${curWord}</${tag}>`, `${curWord}`);
  }

  return (
    <div className={styles.infoContainer}>

      <div className={styles.textExample}>
        {isTranslation ? textExampleTranslate : (word
          && (correct ? showedWord(textExample, 'b') : hiddenWord(textExample, 'b')))}
      </div>
      <div className={styles.meaningContainer}>
        <div className={styles.textMeaning}>
          {isTranslation ? textMeaningTranslate : (word
            && (correct ? showedWord(textMeaning, 'i') : hiddenWord(textMeaning, 'i')))}
        </div>
        <button
          className={styles.switchShowBtn}
          type="button"
          onClick={() => showTranslation()}
        >
          <Trans />
        </button>
      </div>
    </div>
  );
}

export default WordInfo;
