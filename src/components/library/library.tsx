/* eslint-disable no-underscore-dangle */
import React, { useContext, useEffect, useState } from 'react';
import styles from './library.module.css';
import { storeWords } from '../../context/contextWords';
import WordRate from './word-rate';
import LibraryAllWords from './library-all-words';
import preloadWords from '../../services/preloadWords';

interface LibraryShow {
  all: boolean;
  hard: boolean;
  deleted: boolean;
}

function Library() {
  const wordsState = useContext(storeWords);
  const dispatchWords = wordsState.dispatch;

  const [libraryShow, setLibraryShow] = useState<LibraryShow>({
    all: true,
    hard: false,
    deleted: false,
  });

  useEffect(() => {
    preloadWords(dispatchWords);
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.difficulties}>
        <span>Levels of word learning:</span>
        <div className={styles.diffContainer}>
          <div className={styles.diffLevel}>
            <WordRate rate={5} wordId="" />
            You studied that word very well
          </div>
          <div className={styles.diffLevel}>
            <WordRate rate={4} wordId="" />
            We almost did, but it&apos;s not accurate
          </div>
          <div className={styles.diffLevel}>
            <WordRate rate={3} wordId="" />
            You&apos;re in the process of remembering that word
          </div>
          <div className={styles.diffLevel}>
            <WordRate rate={2} wordId="" />
            Go and memorize that word immediately
          </div>
          <div className={styles.diffLevel}>
            <WordRate rate={1} wordId="" />
            The new word! (Urgent training!)
          </div>
        </div>
      </div>
      <div className={styles.libraryColumn}>
        <div className={styles.libraryBtnContainer}>
          <span className={styles.libraryColumnTitle}>Words:</span>
          <button
            className={`${styles.libraryButton} ${libraryShow.all ? styles.active : ''}`}
            type="button"
            onClick={() => setLibraryShow({ all: true, hard: false, deleted: false })}
          >
            All
          </button>
          <button
            className={`${styles.libraryButton} ${libraryShow.hard ? styles.active : ''}`}
            type="button"
            onClick={() => setLibraryShow({ all: false, hard: true, deleted: false })}
          >
            Hard
          </button>
          <button
            className={`${styles.libraryButton} ${libraryShow.deleted ? styles.active : ''}`}
            type="button"
            onClick={() => setLibraryShow({ all: false, hard: false, deleted: true })}
          >
            Deleted
          </button>
        </div>
        {libraryShow.all && <LibraryAllWords active />}
        {libraryShow.hard && <LibraryAllWords active hard />}
        {libraryShow.deleted && <LibraryAllWords nonActive />}
      </div>
    </div>
  );
}

export default Library;
