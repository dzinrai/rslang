import React, { useState, useEffect, useContext } from 'react';
import { storeWords } from '../../../context/contextWords';
import { getWords } from '../../../services/getWords';
// import createCouples from './create-couples';
import styles from '../page-mini-games.module.css';
import CommonStartGameBlock from '../common-start-game-block';
import MemoryGame from '../../../img/memory-game.svg';
import Play from './play';

export default () => {
  const [isStart, setIsStart] = useState<boolean>(false);
  const wordsState = useContext(storeWords);
  const dispatchWords = wordsState.dispatch;
  const [words, setWords] = useState<any>([]);
  let wordsForPlay: any = [];
  /*eslint-disable*/
  useEffect(() => {
    const preloadWords = async () => {
      const wordsFromBackend = await getWords({
        page: 0, group: 0, wordsPerExampleSentenceLTE: 10, wordsPerPage: 8,
      });
      setWords(wordsFromBackend.slice(0, 8));
      dispatchWords({ type: 'setWords', value: wordsFromBackend });
    };
    preloadWords();
  }, []);
  /* eslint-enable */

//   if (words.length !== 0) wordsForPlay = words.slice(0, 8);
  console.log(words)
  const pinkColor = '#FF645F';
  return (
    <>
      {!isStart
        ? (
          <div className={styles.gamesWrapper}>
            <img className={styles.imageSprinter} src={MemoryGame} alt="Memory game" />
            <CommonStartGameBlock setIsStart={setIsStart} color={pinkColor} buttonText="start" name="Memory Game" />
          </div>
        )
        : <Play words={words} />}
    </>
  );
};
