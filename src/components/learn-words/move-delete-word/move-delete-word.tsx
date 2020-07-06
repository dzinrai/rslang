import React from 'react';
import styles from './move-delete-word.module.css';

function MoveDeleteWord() {
  return (
    <div className={styles.buttonsContainer}>
      <button
        className={styles.moveToDifficult}
        type="button"
      >
        Move to difficult
      </button>
      <button
        className={styles.moveToDifficult}
        type="button"
      >
        Delete
      </button>
    </div>
  );
}

export default MoveDeleteWord;
