import React from 'react';
import styles from './sentence-with-input-example.module.css';

const SentenceWithInputExample: React.FC = () => (
  <>
    <div className={styles.sentenceContainer}>
      <span className={styles.inputContainer}>
        <span className={styles.background}>Snow</span>
        {' '}
        <span>falls to the ground</span>
      </span>
    </div>
  </>
);

export default SentenceWithInputExample;
