/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import styles from './library-word.module.css';
import { getWordsForLibraryDeleted } from '../../services/getWordsForLibrary';
import LibraryWord from './library-word';

function LibraryDeletedWords() {
  const [words, setWords] = useState([]);

  useEffect(() => {
    const preloadWords = async () => {
      const wordsFromBackend = await getWordsForLibraryDeleted();
      if (!wordsFromBackend
        || !wordsFromBackend[0].paginatedResults
        || wordsFromBackend.error) return;
      setWords(wordsFromBackend[0].paginatedResults);
    };
    preloadWords();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.libraryColumn}>
        {words.length > 0 && words.map((word: any, i: number) => (
          <LibraryWord
            key={`${word._id}_libraryWord`}
            index={i}
            deleted
          />
        ))}
      </div>
    </div>
  );
}

export default LibraryDeletedWords;
