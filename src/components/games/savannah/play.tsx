import React, {
  useEffect, useState, useContext, useRef,
} from 'react';
import moment from 'moment';
import ButtonBack from '../controls/button-back/button-back';
import styles from './play.module.css';
import Modal from './modal-window';
import { getStatistic, createStatistic } from '../../../services/statistic';
import { storeWords } from '../../../context/contextWords';
import { getWords } from '../../../services/getWords';
import Timer from './timer';
import Lion from '../../../img/gamesImages/savannah_lion.svg';
import Koza from '../../../img/gamesImages/savannah_koza.svg';
import Jiraffa from '../../../img/gamesImages/savannah_jiraffa.svg';
import Zebra from '../../../img/gamesImages/savannah_zebra.svg';

export default () => {
  const wordsState = useContext(storeWords);
  const dispatchWords = wordsState.dispatch;
  const [statistic, setStatistic] = useState<any>([]);
  const [correctWords, setCorrectWords] = useState<number>(0);
  const [isFalling, setIsFalling] = useState<any>(true);
  const [randomWords, setRandomWords] = useState<any>([]);
  const [currentWord, setCurrentWord] = useState<any>({ info: { word: '' }, errors: 0 });
  const [pageLevel, setPageLevel] = useState<number>(1);
  const [group, setGroup] = useState<number>(0);
  const [isResultsOpen, setIsResultsOpen] = useState(false);
  const [modalText, setModalText] = useState({ title: 'Guessed words', btn: 'Cancel' });
  const toggleModal = (isFall: boolean) => {
    const loadStats = async () => {
      const gettedStats = await getStatistic();
      const percentCorrect = Math.round((correctWords * 100) / statistic.length);
      gettedStats.optional.games.savannah.lastPlay.push(moment().format('DD/MM/YY'));
      gettedStats.optional.games.savannah.percentCorrect.push(percentCorrect);
      gettedStats.optional.games.savannah.words.push(statistic.length);

      const newStats = async (stats: any) => await createStatistic(stats);
      newStats(gettedStats);
    };
    loadStats();

    setIsFalling(isFall);
    setIsResultsOpen(!isResultsOpen);
    if (modalText.title === 'Game results') {
      setStatistic([]);
      setModalText({ title: 'Guessed words', btn: 'Cancel' });
    }
  };
  const startGame = (words: any) => {
    setCurrentWord({ info: words[0], errors: 0 });
    words.sort(() => Math.random() - 0.5);
    setRandomWords(words.sort(() => Math.random() - 0.5));
    setIsFalling(true);
  };
  const preloadWords = async () => {
    if (group === 5) {
      await setPageLevel(pageLevel + 1);
      await setGroup(0);
    } else {
      await setGroup(group + 1);
    }
    const wordsFromBackend = await getWords({
      page: pageLevel, group, wordsPerExampleSentenceLTE: 0, wordsPerPage: 4,
    });
    const words = wordsFromBackend.slice(0, 4);
    // console.log('words', words)
    await dispatchWords({ type: 'setWords', value: wordsFromBackend });
    await startGame(words);
  };

  const CheckWord = (word: string, event: any) => {
    if (statistic.length > 8) {
      setModalText({ title: 'Game results', btn: 'Start new game' });
      toggleModal(false);
      setCorrectWords(0);
    } else if (!event.currentTarget.classList.contains('error')) {
      if (word === currentWord.info.word) {
        setCorrectWords(correctWords + 1);
        preloadWords();
        const array = statistic;
        array.push({ ...currentWord, guessed: true });
        setStatistic(array);
        setIsFalling(false);
        document.querySelectorAll('savannah-error').forEach((item) => item.classList.remove('savannah-error'));
      } else {
        event.currentTarget.classList.add('savannah-error');
        setCurrentWord({ ...currentWord, errors: currentWord.errors + 1 });
      }
    }
  };
    /* eslint-disable */
  useEffect(() => {
    preloadWords();
  }, []);
    /* eslint-enable */
  return (
    <>
      {isFalling ? (
        <Timer
          preloadWords={preloadWords}
          currentWord={currentWord}
          setIsFalling={setIsFalling}
          statistic={statistic}
          setStatistic={setStatistic}
        />
      ) : null}
      <ButtonBack />
      <b className={isFalling ? styles.falling : styles.fallingNone}>{currentWord.info.word}</b>
      {randomWords.length > 0
        ? (
          <div className={styles.wordContainer}>
            {randomWords.map((item: any) => (
              <div
                role="presentation"
                key={item.id}
                onClick={(event) => CheckWord(item.word, event)}
                className={styles.wordToCheck}
              >
                {item.wordTranslate}
              </div>
            ))}
          </div>
        )
        : null}
      <div className={styles.lion}><img src={Lion} alt="" /></div>
      <div className={styles.correctWords}>
        {' '}
        {correctWords}
        {' '}
        <span>correct words</span>
      </div>
      <div className={styles.animalsContainer}>
        <img className={styles.koza} src={Koza} alt="" />
        <img className={styles.zebra} src={Zebra} alt="" />
        <img className={styles.jiraffa} src={Jiraffa} alt="" />
      </div>
      <div onClick={() => toggleModal(false)} className={styles.btnResults} role="presentation">Results</div>
      <Modal
        modalText={modalText}
        isResultsOpen={isResultsOpen}
        toggleModal={toggleModal}
        statistic={statistic}
      />
    </>
  );
};
