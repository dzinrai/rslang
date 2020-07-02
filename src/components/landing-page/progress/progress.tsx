import React from 'react';
import styles from './progress.module.css';

function Progress() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Track your progress</h2>
      <p className={styles.text}>
        Statistics graphs help you track your
        <br />
        progress and motivate you rise higher
      </p>
    </div>
  );
}

export default Progress;
