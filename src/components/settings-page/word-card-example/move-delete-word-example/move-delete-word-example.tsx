import React from 'react';
import styles from './move-delete-word-example.module.css';

type PropsType = {
  moveToDifficult: any;
  deleteWord: any;
}

const MoveDeleteWordExample: React.FC<{
  moveToDifficult: any,
  deleteWord: any
}> = ({ moveToDifficult, deleteWord }: PropsType) => {
  let moveToDifficultButton = null;

  if (moveToDifficult) {
    moveToDifficultButton = (
      <button
        className={styles.moveToDifficult}
        type="button"
      >
        Move to difficult
      </button>
    );
  }

  let deleteWordButton = null;

  if (deleteWord) {
    deleteWordButton = (
      <button
        className={styles.moveToDifficult}
        type="button"
      >
        Delete
      </button>
    );
  }

  return (
    <div className={styles.buttonsContainer}>
      {moveToDifficultButton}
      {deleteWordButton}
    </div>
  );
};
export default MoveDeleteWordExample;
