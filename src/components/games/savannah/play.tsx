import React, {
  useEffect, useState, useRef, useContext,
} from 'react';
import ButtonBack from '../controls/button-back/button-back';
import styles from './play.module.css';
import Modal from './modal-window';
import { storeWords } from '../../../context/contextWords';
import { getWords } from '../../../services/getWords';

export default () => {
  const wordsState = useContext(storeWords);
  const dispatchWords = wordsState.dispatch;
  const [statistic, setStatistic] = useState<any>({ correctWords: [], wrongWords: [] });
  const [words, setWords] = useState<any>([]);
  const [randomWords, setRandomWords] = useState<any>([]);
  const [currentWord, setCurrentWord] = useState<any>({});
  const [pageLevel, setPageLevel] = useState<number>(1);
  const [group, setGroup] = useState<number>(0);
  const wordRef = useRef<any>([]);

  const [correctWords, setCorrectWords] = useState<any>([]);
  const [isResultsOpen, setIsResultsOpen] = useState(false);

  const startGame = (words : any) => {
    setCurrentWord(words[0]);
    words.sort(() => Math.random() - 0.5);
    setRandomWords(words.sort(() => Math.random() - 0.5));
    if (group === 5) {
      setPageLevel(pageLevel + 1);
      setGroup(0);
    } else setGroup(group + 1);
  };

  const CheckWord = (word : string) => {
    if (word === currentWord.wordTranslate) {
      preloadWords();
      const array = statistic.correctWords;
      array.push(word);
      setStatistic({ ...statistic, correctWords: array });
    } else {
      const array = statistic.wrongWords;
      array.push(word);
      setStatistic({ ...statistic, wrongWords: array });
    }
    console.log(statistic);
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
    wordRef.current = new Array(words.length);
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
      <ButtonBack />
      <b>{currentWord.word}</b>
      {randomWords.length > 0
        ? (
          <div className={styles.container}>
            {randomWords.map((item : any) => (
              <div
                key={item.id}
                onClick={() => CheckWord(item.wordTranslate)}
              >
                {item.wordTranslate}
                {console.log(item)}
              </div>
            ))}
          </div>
        )
        : null }
      <Modal
        isResultsOpen={isResultsOpen}
        toggleModal={toggleModal}
        correctWords={correctWords}
        words={words}
      />
    </>
  );
};
