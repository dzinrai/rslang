import React from 'react';
import styles from './last-word.module.css';
import pronunciation from '../../../img/pronunciation.svg';

// import { Button } from 'antd';
// import 'antd/dist/antd.css';

// import { DatePicker } from 'antd';

// ReactDOM.render(<DatePicker />, mountNode);

function LastWord() {
  return (
    <div className={styles.lastWord}>
      <p className={styles.top}>Your last word</p>
      <div className={styles.wordContainer}>
        <div className={styles.transcription}>
          <img src={pronunciation} alt="" />
          [snov]
        </div>
        <div className={styles.word}>Snow</div>
        <div className={styles.translation}>Снег, снегопад</div>
      </div>
    </div>
  );
}

export default LastWord;
