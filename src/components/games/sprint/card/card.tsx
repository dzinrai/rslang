import React, { useState } from 'react';
import styles from '../play.module.css';

export default () => {
  return (
    <>
        <div className={styles.wordsContainer}>
            <div className={styles.word}>Snow</div>
            <div className={styles.translation}>Снег</div>
        </div>
        <div className={styles.buttonsContainer}>
            <button className={styles.noButton} type='button'>NO</button>
            <button className={styles.yesButton} type='button'>YES</button>
        </div>
    </>
  );
};
