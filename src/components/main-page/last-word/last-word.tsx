import React, { useEffect, useState } from 'react';
import styles from './last-word.module.css';
import pronunciation from '../../../img/pronunciation.svg';
import toFromUpperCaseString from '../../../assets/toFromUpperCaseString';

// import { Button } from 'antd';
// import 'antd/dist/antd.css';

// import { DatePicker } from 'antd';

// ReactDOM.render(<DatePicker />, mountNode);

function LastWord({ word } : any) {
  if (!word || !word.word || !word.transcription || !word.wordTranslate) return null;
  const [exactWord, setExactWord] = useState<string>('');
  const [translate, setTranslate] = useState<string>('');
  const [transcription, setTranscription] = useState<string>('');
/*eslint-disable*/
  useEffect(() => {
    if (word) {
      setExactWord(word.word);
      setTranslate(word.wordTranslate);
      setTranscription(word.transcription);
    }
    
  }, [word]);

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
