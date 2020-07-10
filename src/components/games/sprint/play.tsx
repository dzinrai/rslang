import React, {
    useEffect, useState, useRef, useContext,
  } from 'react';
  import ButtonBack from '../controls/button-back/button-back';
  import Timer from './timer/timer'
  import styles from './play.module.css';
  import { storeWords } from '../../../context/contextWords';
  import { getWords } from '../../../services/getWords';
  
export default () => {
    const wordsState = useContext(storeWords);
    const dispatchWords = wordsState.dispatch;
    const [words, setWords] = useState<any>([]);
    const [pageLevel, setPageLevel] = useState<number>(1);
    const [playMode, setPlayMode] = useState(false);
    const [isActive, setIsActive] = useState(true);

    // eslint-disable-next-line no-shadow
    const preloadWords = async (pageLevel : number) => {
      const wordsFromBackend = await getWords({
        page: pageLevel, group: 0, wordsPerExampleSentenceLTE: 10, wordsPerPage: 10,
      });
      setWords(wordsFromBackend);
      dispatchWords({ type: 'setWords', value: wordsFromBackend });
    };

  return (
    <>
    <ButtonBack />
    <Timer 
        playMode={playMode} 
        setPlayMode={(mode: boolean) => setPlayMode(mode)} 
        isActive={isActive} 
        setIsActive={(active: boolean) => setIsActive(active)} 
    />

    </>
  );
};
