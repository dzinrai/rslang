import React from 'react';
import styles from './move-delete-word.module.css';
import { updateWordById } from '../../../services/getWords';
/* eslint-disable */
interface Move {
 wordObject:any,
 renderWithSettings:any,
}

function MoveDeleteWord({wordObject, renderWithSettings}:Move) {
  return (
    <div className={styles.buttonsContainer}>
      {renderWithSettings.optional.moveToDifficult&&<button
        className={styles.moveToDifficult}
        type="button"
        onClick={() => {
          wordObject.userWord.difficulty = 'hard';
          updateWordById(wordObject._id, wordObject.userWord);
        }}
      >
        Move to difficult
      </button>}
      {renderWithSettings.optional.deleteWord&&<button
        className={styles.moveToDifficult}
        type="button"
        onClick={() => {
          wordObject.userWord.optional.active = false;
          updateWordById(wordObject._id, wordObject.userWord);
        }}
      >
        Delete
      </button>}
    </div>
  );
}

export default MoveDeleteWord;
