/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-underscore-dangle */
import React, { useContext } from 'react';
import styles from './library-word.module.css';
import LibraryWord from './library-word';
import { storeWords } from '../../context/contextWords';

function LibraryAllWords({ active, nonActive, hard } : any) {
  const wordsState = useContext(storeWords);
  const words = wordsState.state.allWords;
  if (!words) return null;
  function checks (word: any) {
    if (active && hard) return word.userWord.optional.active && word.userWord.difficulty === 'hard';
    if (active) return word.userWord.optional.active;
    if (nonActive) return !word.userWord.optional.active;
    if (hard) return word.userWord.difficulty === 'hard';
  }

  return (
    <div className={styles.container}>
      <div className={styles.libraryColumn}>
        {words.length > 0 && words.map((word: any, i: number) => (
          (checks(word) && <LibraryWord
            key={`${word._id}_libraryWord`}
            word={word}
            isDeletedPage={nonActive ? true : false}
          />)
        ))}
      </div>
    </div>
  );
}

export default LibraryAllWords;
