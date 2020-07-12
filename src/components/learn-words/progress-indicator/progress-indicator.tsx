import React from 'react';
import styles from './progress-indicator.module.css';

function ProgressIndicator(progress:any) {
  console.log('progress %', progress);
  return (
    <div className={styles.indicatorContainer}>
      <div className={styles.progressIndicator} style={{ width: `${progress}vw` }} />
    </div>
  );
}

export default ProgressIndicator;
