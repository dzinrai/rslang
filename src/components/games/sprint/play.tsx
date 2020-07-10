import React, {
    useEffect, useState, useRef, useContext,
  } from 'react';
  import ButtonBack from '../controls/button-back/button-back';
  import styles from './play.module.css';
  import { storeWords } from '../../../context/contextWords';
  import { getWords } from '../../../services/getWords';
  
export default () => {
    const wordsState = useContext(storeWords);
    const dispatchWords = wordsState.dispatch;
    const [words, setWords] = useState<any>([]);
    const [pageLevel, setPageLevel] = useState<number>(1);
    const [isPlayMode, setIsPlayMode] = useState(true);
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
    <h1>AAAAAAAAAA</h1>
    </>
  );
};
