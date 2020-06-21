import React from 'react';
import styles from './adaptive.module.css';

function Adaptive() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Adaptive design</p>
      <p className={styles.text}>You can improve your skills</p>
      <p className={styles.text}>anywhere & anywhen</p>
    </div>
  );
}

export default Adaptive;
