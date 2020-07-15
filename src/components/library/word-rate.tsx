import React, { useState, useEffect } from 'react';
import styles from './word-rate.module.css';

interface WordRateProps {
  rate: any;
  wordId: string;
}

function WordRate({ rate, wordId }: WordRateProps) {
  const [low, setLow] = useState(false);
  const keys = [1, 2, 3, 4, 5];
/* eslint-disable */
  useEffect(() => {
    if (rate < 3) setLow(true);
    else setLow(false);
  }, [rate]);
  if (!rate || rate > 5 || rate < 1) return null;
 /* eslint-enable */
  return (
    <div className={styles.rate}>
      {[...Array(rate)].map((e, i) => (
        <span className={`${styles.dot} ${low ? styles.low : ''}`} key={`${wordId} ${keys[i]}`}>{' '}</span>
      ))}
      {[...Array(5 - rate)].map((e, i) => (
        <span className={`${styles.dot} ${styles.empty}`} key={`${wordId} ${keys[i]}`}>{' '}</span>
      ))}
    </div>
  );
}

export default WordRate;
