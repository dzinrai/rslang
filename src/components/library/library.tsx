/* eslint-disable no-underscore-dangle */
import React, { useContext, useEffect, useState } from 'react';
import styles from './library.module.css';
import { storeWords } from '../../context/contextWords';
import { getWordsFromBackend } from '../../services/getWords';
import LibraryWord from './library-word';
import WordRate from './word-rate';

function Library() {
  const wordsState = useContext(storeWords);
  const dispatchWords = wordsState.dispatch;

  const [words, setWords] = useState([]);

  useEffect(() => {
    const preloadWords = async () => {
      const wordsFromBackend = await getWordsFromBackend();
      if (!wordsFromBackend
        || !wordsFromBackend[0].paginatedResults
        || wordsFromBackend.error) return;
      setWords(wordsFromBackend[0].paginatedResults);
      dispatchWords({ type: 'setWords', value: wordsFromBackend[0].paginatedResults });
    };
    preloadWords();
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
        {words.length > 0 && words.map((word: any, i: number) => (
          <LibraryWord
            key={`${word._id}_libraryWord`}
            index={i}
          />
        ))}
      </div>
    </div>
  );
}

export default Library;
