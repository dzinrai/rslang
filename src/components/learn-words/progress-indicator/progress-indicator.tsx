import React from 'react';
import styles from './progress-indicator.module.css';

function ProgressIndicator(progress:any) {
  const indWidth = progress;

  return (
    <div className={styles.indicatorContainer}>
      <div className={styles.progressIndicator} style={{ width: `${indWidth}vw` }} />
    </div>
  );
}

export default ProgressIndicator;
