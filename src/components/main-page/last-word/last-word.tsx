import React from 'react';
import styles from './last-word.module.css';
import pronunciation from '../../../img/pronunciation.svg';
import toFromUpperCaseString from '../../../assets/toFromUpperCaseString';

// import { Button } from 'antd';
// import 'antd/dist/antd.css';

// import { DatePicker } from 'antd';

// ReactDOM.render(<DatePicker />, mountNode);

function LastWord({ word } : any) {
  if (!word) return null;
  return (
    <div className={styles.lastWord}>
      <p className={styles.top}>Your last word</p>
      <div className={styles.wordContainer}>
        <div className={styles.transcription}>
          <img src={pronunciation} alt="" />
          {word.transcription}
        </div>
        <div className={styles.word}>{toFromUpperCaseString(word.word)}</div>
        <div className={styles.translation}>{toFromUpperCaseString(word.wordTranslate)}</div>
      </div>
    </div>
  );
}

export default LastWord;
