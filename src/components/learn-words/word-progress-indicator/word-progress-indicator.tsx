import React, { useState, useEffect } from 'react';
import styles from './word-progress-indicator.module.css';

function WordProgressIndicator(rate: any) {
  const [low, setLow] = useState(false);
  console.log('range', rate.rate);
  const keys = [1, 2, 3, 4, 5];
  /* eslint-disable */
  useEffect(() => {
    if (rate.rate < 3) setLow(true);
    else setLow(false);
  }, [rate]);
  if (!rate.rate || rate.rate > 5 || rate.rate < 1) return null;
  /* eslint-enable */
  return (
    <div className={styles.rate}>
      {[...Array(rate.rate)].map((e, i) => (
        <span className={`${styles.dot} ${low ? styles.low : ''}`} key={`${keys[i]}`}>{' '}</span>
      ))}
      {[...Array(5 - rate.rate)].map((e, i) => (
        <span className={`${styles.dot} ${styles.empty}`} key={`${keys[i]}`}>{' '}</span>
      ))}
    </div>
  );
}

export default WordProgressIndicator;
