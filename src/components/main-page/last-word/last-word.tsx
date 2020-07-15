import React, { useEffect, useState } from 'react';
import styles from './last-word.module.css';
import pronunciation from '../../../img/pronunciation.svg';
import toFromUpperCaseString from '../../../assets/toFromUpperCaseString';

function LastWord({ word } : any) {
  const [exactWord, setExactWord] = useState<string>('');
  const [translate, setTranslate] = useState<string>('');
  const [transcription, setTranscription] = useState<string>('');
  useEffect(() => {
    if (word) {
      if (word.word) setExactWord(word.word);
      if (word.wordTranslate) setTranslate(word.wordTranslate);
      if (word.transcription) setTranscription(word.transcription);
    }
  }, [word]);
  if (!word) return null;
  return (
    <div className={styles.lastWord}>
      <p className={styles.top}>Your last word</p>
      <div className={styles.wordContainer}>
        <div className={styles.transcription}>
          <img src={pronunciation} alt="" />
          {transcription}
        </div>
        <div className={styles.word}>{toFromUpperCaseString(exactWord)}</div>
        <div className={styles.translation}>{toFromUpperCaseString(translate)}</div>
      </div>
    </div>
  );
}

export default LastWord;
