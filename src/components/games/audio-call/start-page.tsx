import React, { useState, useEffect, useContext } from 'react';
import { storeWords } from '../../../context/contextWords';
import { getWords } from '../../../services/getWords';
import styles from '../page-mini-games.module.css';
import CommonStartGameBlock from '../common-start-game-block';
import AudioCall from '../../../img/audio-call.svg';
import Play from './play';

export default () => {
  const [isStart, setIsStart] = useState<boolean>(false);
  const wordsState = useContext(storeWords);
  const dispatchWords = wordsState.dispatch;
  const [words, setWords] = useState<any>([]);
  /*eslint-disable*/
  useEffect(() => {
    const preloadWords = async () => {
      const wordsFromBackend = await getWords({
        wordsPerExampleSentenceLTE: 20, wordsPerPage: 50,
      });
      setWords(wordsFromBackend);
      dispatchWords({ type: 'setWords', value: wordsFromBackend });
    };
    preloadWords();
  }, []);
  /* eslint-enable */

  const blueColor = '#1194C8';
  return (
    <>
      {!isStart
        && (
          <div className={styles.gamesWrapper}>
            <img className={styles.imageSprinter} src={AudioCall} alt="Audio Call" />
            <CommonStartGameBlock setIsStart={setIsStart} color={blueColor} buttonText="start" name="Audio Call" />
          </div>
        )}
      {isStart && words && <Play words={words} />}
    </>
  );
};
