import React, { useState, useEffect, useContext } from 'react';
import { storeWords } from '../../../context/contextWords';
import { getWords } from '../../../services/getWords';
import createCouples from './create-couples';
import styles from '../page-mini-games.module.css';
import CommonStartGameBlock from '../common-start-game-block';
import Sprinter from '../../../img/sprinter.svg';
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
        wordsPerExampleSentenceLTE: 10, wordsPerPage: 60,
      });
      setWords(wordsFromBackend);
      dispatchWords({ type: 'setWords', value: wordsFromBackend });
    };
    preloadWords();
  }, []);
  /* eslint-enable */

  if (words.length !== 0) wordsForPlay = createCouples(words);

  const pinkColor = '#FF645F';
  return (
    <>
      {!isStart
        ? (
          <div className={styles.gamesWrapper}>
            <img className={styles.imageSprinter} src={Sprinter} alt="The running man" />
            <CommonStartGameBlock setIsStart={setIsStart} color={pinkColor} buttonText="start" name="Sprint" />
          </div>
        )
        : <Play allWords={words} words={wordsForPlay} />}
    </>
  );
};
