import React from 'react';
import styles from './move-delete-word-example.module.css';

const MoveDeleteWordExample: React.FC = () => (
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

export default MoveDeleteWordExample;
