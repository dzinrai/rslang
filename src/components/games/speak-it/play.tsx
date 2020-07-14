import React, {
  useEffect, useState, useRef, useContext,
} from 'react';
import moment from 'moment';
import ButtonBack from '../controls/button-back/button-back';
import { getStatistic, createStatistic } from '../../../services/statistic';
import styles from './play.module.css';
import Modal from './modal-window';
import { storeWords } from '../../../context/contextWords';
import { getWords } from '../../../services/getWords';
import SpeakMode from './speak-mode';
import defaultImage from '../../../img/megaphone.svg';

declare const window: any;
const URL_CONTENT = 'https://raw.githubusercontent.com/dzinrai/rslang-data/master/';

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
  const wordRef = useRef<any>([]);
  /* eslint-disable */
  useEffect(() => {
    wordRef.current = new Array(words.length);
    preloadWords(pageLevel);
  }, []);
  /* eslint-enable */
  const [correctWords, setCorrectWords] = useState<any>([]);
  const [isResultsOpen, setIsResultsOpen] = useState(false);
  const [currentWord, setCurrentWord] = useState<any>({});
  const sayWord = (word : any) => {
    setCurrentWord(word);
    const newSound = new Audio(URL_CONTENT + word.audio);
    newSound.play();
  };
  const toggleModal = () => {
    const loadStats = async () => {
      const gettedStats = await getStatistic();
      console.log('getted stats', gettedStats);
      console.log('correct and words', words, correctWords);
      const percentCorrect = Math.round((correctWords.length * 100) / words.length);
      // eslint-disable-next-line
      if (correctWords[correctWords.length - 1]) gettedStats.optional.common.lastWord = correctWords[correctWords.length - 1].id;
      gettedStats.optional.games.speakIt.lastPlay.push(moment().format('DD/MM/YY'));
      gettedStats.optional.games.speakIt.percentCorrect.push(percentCorrect);
      gettedStats.optional.games.speakIt.words.push(words.length);
      console.log('put stats', gettedStats);
      // eslint-disable-next-line
      const newStats = async (stats: any) => await createStatistic(stats);
      newStats(gettedStats);
    };
    loadStats();

    // eslint-disable-next-line no-unused-expressions
    isResultsOpen ? setIsResultsOpen(false) : setIsResultsOpen(true);
    if (isPlayMode) setIsPlayMode(false);
  };
  const newGame = () => {
    setPageLevel(pageLevel + 1);
    setCorrectWords([]);
    // eslint-disable-next-line array-callback-return
    wordRef.current.map((item: any) => {
      item.classList.remove('disable');
    });
    preloadWords(pageLevel + 1);
    toggleModal();
    setIsPlayMode(true);
  };
  const toggleMode = () => {
    // eslint-disable-next-line no-unused-expressions
    isPlayMode ? setIsPlayMode(false) : setIsPlayMode(true);
  };

  return (
    <>
      <ButtonBack />
      <div className={styles.mainContainer}>
        {isPlayMode
          ? (
            <>
              {' '}
              {window.webkitSpeechRecognition
                ? (
                  <SpeakMode
                    correctWords={correctWords}
                    wordRef={wordRef}
                    setCorrectWords={setCorrectWords}
                    words={words}
                    URL_CONTENT={URL_CONTENT}
                  />
                ) : 'Sorry, your browser does not support this game, use GoogleChrome 25+ version' }
            </>
          )
          : (
            <div className={styles.imageContainer}>
              <img src={currentWord.image ? URL_CONTENT + currentWord.image : defaultImage} alt="" />
              <span>{currentWord.wordTranslate ? currentWord.wordTranslate : ''}</span>
            </div>
          )}
        <div className={`${styles.wordsContainer} ${!isPlayMode && styles.clickable}`}>
          {words.map((word : any, index: any) => (
            <div
              key={`id__${word}`}
              className={styles.wordElement}
              ref={(el) => { wordRef.current[index] = el; }}
              data-word={word.word}
              data-id={index}
              data-img={word.image}
              data-translate={word.wordTranslate}
              onClick={() => (!isPlayMode ? sayWord(word) : null)}
              role="presentation"
            >
              <span className={styles.wordTitle}>{word.word}</span>
              <p className={styles.wordTranscription}>{word.transcription}</p>
            </div>
          ))}
        </div>
        <div className={styles.footerButtons}>

          <div onClick={toggleMode} className={styles.btnSwitchMode} role="presentation">
            {isPlayMode ? <>Switch to train mode</> : <> Switch to play mode </>}
          </div>
          <div onClick={toggleModal} className={styles.btnResults} role="presentation">Results</div>

        </div>
      </div>

      <Modal
        isResultsOpen={isResultsOpen}
        newGame={newGame}
        toggleModal={toggleModal}
        correctWords={correctWords}
        words={words}
        URL_CONTENT={URL_CONTENT}
      />

    </>
  );
};
