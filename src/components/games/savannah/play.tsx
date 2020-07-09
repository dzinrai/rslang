import React, {
  useEffect, useState, useRef, useContext,
} from 'react';
import ButtonBack from '../controls/button-back/button-back';
import styles from './play.module.css';
import Modal from './modal-window';
import { storeWords } from '../../../context/contextWords';
import { getWords } from '../../../services/getWords';
import Timer from './timer';

export default () => {
  const wordsState = useContext(storeWords);
  const dispatchWords = wordsState.dispatch;
  const [statistic, setStatistic] = useState<any>([]);
  const [isFalling, setIsFalling] = useState<any>(true);
  const [words, setWords] = useState<any>([]);
  const [randomWords, setRandomWords] = useState<any>([]);
  const [currentWord, setCurrentWord] = useState<any>({ info: { word: '' }, errors: 0 });
  const [pageLevel, setPageLevel] = useState<number>(1);
  const [group, setGroup] = useState<number>(0);
  const wordRef = useRef<any>([]);
  const [isResultsOpen, setIsResultsOpen] = useState(false);
  let timer : any;
  const startGame = (words : any) => {
    setCurrentWord({ info: words[0], errors: 0 });
    words.sort(() => Math.random() - 0.5);
    setRandomWords(words.sort(() => Math.random() - 0.5));
    setIsFalling(true);
    if (group === 5) {
      setPageLevel(pageLevel + 1);
      setGroup(0);
    } else setGroup(group + 1);
  };

  const CheckWord = (word : string) => {
    if (word === currentWord.info.word) {
      clearTimeout(timer);
      preloadWords();
      const array = statistic;
      array.push({ ...currentWord, guessed: true });
      setStatistic(array);
      setIsFalling(false);
    } else {
      setCurrentWord({ ...currentWord, errors: currentWord.errors + 1 });
    }
    // console.log(statistic);
    // console.log(currentWord);
  };

  const preloadWords = async () => {
    const wordsFromBackend = await getWords({
      page: pageLevel, group, wordsPerExampleSentenceLTE: 0, wordsPerPage: 4,
    });
    const words = wordsFromBackend.slice(0, 4);
    await setWords(words);
    await dispatchWords({ type: 'setWords', value: wordsFromBackend });
    await startGame(words);
  };

  useEffect(() => {
    // wordRef.current
    preloadWords();
  }, []);
  const toggleModal = () => {
    setIsResultsOpen(!isResultsOpen);
  };

  const newGame = () => {
    // todo
  };

  return (
    <>
      {isFalling ? <Timer preloadWords={preloadWords} currentWord={currentWord} setIsFalling={setIsFalling} statistic={statistic} setStatistic={setStatistic} /> : null}
      <ButtonBack />
      <b className={isFalling ? styles.falling : styles.fallingNone}>{currentWord.info.word}</b>
      {randomWords.length > 0
        ? (
          <div className={styles.container}>
            {randomWords.map((item : any) => (
              <div
                key={item.id}
                onClick={() => CheckWord(item.word)}
              >
                {item.wordTranslate}
              </div>
            ))}
          </div>
        )
        : null }
      <Modal
        isResultsOpen={isResultsOpen}
        toggleModal={toggleModal}
        words={words}
        statistic={statistic}
      />
    </>
  );
};
