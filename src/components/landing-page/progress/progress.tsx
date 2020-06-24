import React from 'react';
import styles from './progress.module.css';

function Progress() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Adaptive design</h2>
      <p className={styles.text}>You can improve your skills</p>
      <p className={styles.text}>anywhere & anywhen</p>
    </div>
  );
}

export default Progress;
