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
/*eslint-disable*/
export default () => {
  const arrRef = useRef<any>();
  const wordsState = useContext(storeWords);
  const dispatchWords = wordsState.dispatch;
  const [statistic, setStatistic] = useState<any>([]);
  const [correctWords, setCorrectWords] = useState<number>(0);
  const [isFalling, setIsFalling] = useState<any>(true);
  const [randomWords, setRandomWords] = useState<any>([]);
  const [currentWord, setCurrentWord] = useState<any>({ info: { word: '' }, errors: 0 });
  const [pageLevel, setPageLevel] = useState<number>(1);
  const [wordsFromBackend, setWordsFromBackend] = useState<any>([]);
  const [isResultsOpen, setIsResultsOpen] = useState(false);
  const [modalText, setModalText] = useState({ title: 'Guessed words', btn: 'Cancel' });
  const toggleModal = (isFall: boolean) => {
    const loadStats = async () => {
      const gettedStats = await getStatistic();
      const percentCorrect = Math.round((correctWords * 100) / statistic.length);
      if (gettedStats.optional) {
        gettedStats.optional.games.savannah.lastPlay.push(moment().format('DD/MM/YY'));
        gettedStats.optional.games.savannah.percentCorrect.push(percentCorrect);
        gettedStats.optional.games.savannah.words.push(statistic.length);
        // eslint-disable-next-line
        const newStats = async (stats: any) => await createStatistic(stats);
        newStats(gettedStats);
      }
    };
    loadStats();
    setIsFalling(isFall);
    setIsResultsOpen(!isResultsOpen);
    if (modalText.title === 'Game results') {
      setStatistic([]);
      setModalText({ title: 'Guessed words', btn: 'Cancel' });
    }
  };
  const startGame = (words: any = wordsFromBackend) => {
    if (arrRef.current) {
      arrRef.current.forEach((item : any) => item.className = styles.wordToCheck);
    }
    setCurrentWord({ info: words[pageLevel], errors: 0 });
    if (pageLevel !== 20) {
      setPageLevel(pageLevel + 1);
    } else {
      setPageLevel(0);
    }
    const sortWords = words.slice(pageLevel, pageLevel + 4).sort(() => Math.random() - 0.5);
    setRandomWords(sortWords);
    setIsFalling(true);
  };
  const preloadWords = async () => {
    const wordsFromBackend = await getWords({
      wordsPerExampleSentenceLTE: 0, wordsPerPage: 50,
    });
    await dispatchWords({ type: 'setWords', value: wordsFromBackend });
    await setWordsFromBackend(wordsFromBackend);
    await startGame(wordsFromBackend);
  };

  const CheckWord = (word: string, event: any) => {
    if (statistic.length > 8) {
      setModalText({ title: 'Game results', btn: 'Start new game' });
      toggleModal(false);
      setCorrectWords(0);
    } else if (!event.currentTarget.classList.contains('error')) {
      if (word === currentWord.info.word) {
        setCorrectWords(correctWords + 1);
        const array = statistic;
        array.push({ ...currentWord, guessed: true });
        setStatistic(array);
        setIsFalling(false);
        preloadWords();
      } else {
        event.currentTarget.classList.add('savannah-error');
        setCurrentWord({ ...currentWord, errors: currentWord.errors + 1 });
      }
    }
  };
    /* eslint-disable */
  useEffect(() => {
    preloadWords();
    arrRef.current = new Array(4);

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
            {randomWords.map((item: any, index: any) => (
              <div
                role="presentation"
                key={item.id}
                onClick={(event) => CheckWord(item.word, event)}
                className={styles.wordToCheck}
                 // eslint-disable-next-line
                ref={(ref) => arrRef.current[index] = ref}
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
