import React, { useContext, useEffect, useState } from 'react';
import styles from './learn-words.module.css';
import { storeWords } from '../../context/contextWords';
import getWords from '../../services/getWords';
//import LibraryWord from './learn-word';
import SliderWithCards from './cards-slider/cards-slider';
import ProgressIndicator from './progress-indicator/progress-indicator';
import Buttons from './buttons/buttons';
import WordsToTraining from './words-to-training/words-to-training';

function LearnWords() {
  const wordsState = useContext(storeWords);
  const dispatchWords = wordsState.dispatch;

  const [words, setWords] = useState([]);

  useEffect(() => {
    const preloadWords = async () => {
      const wordsFromBackend = await getWords({ page: 1, group: 0 });
      setWords(wordsFromBackend);
      dispatchWords({ type: 'setWords', value: wordsFromBackend });
    };
    preloadWords();
    // eslint-disable-next-line
  }, []);

  // return (
  //   <div className={styles.container}>
  //     <div className={styles.difficulties}>Levels of word learning</div>
  //     <div className={styles.libraryColumn}>
  //       {words.length > 0 && words.map((word: any, i: number) => (
  //         <LibraryWord
  //           key={word.id}
  //           index={i}
  //         />
  //       ))}
  //     </div>
  //   </div>
  // );
  return (
    <>
    <ProgressIndicator/>
    <SliderWithCards />
    <Buttons />
    < WordsToTraining />
    </>
    )
}

export default LearnWords;
