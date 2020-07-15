/*eslint-disable*/
import React, { useState, useEffect, useRef } from 'react';
import styles from './play.module.css';
import './backs.css';
import moment from 'moment';
import { getStatistic, createStatistic } from '../../../services/statistic';
import ButtonBack from '../controls/button-back/button-back';
import CardsForPlay from './cards-for-play/cards-for-play';
import AudioIcon from './audio-icon/audio-icon';
import CorrectAnswer from './correct-answer/correct-answer';
import { CSSTransition } from 'react-transition-group';
import ModalWindow from '../sprint/modal-window';

const URL_CONTENT = 'https://raw.githubusercontent.com/dzinrai/rslang-data/master/';

function randomInteger(min = 0, max = 4) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

interface PlayProps {
    words: any
}

export default ({ words }: PlayProps) => {

  const [currentWord, setCurrentWord] = useState<any>(null);
  const [arrayIndex, setArrayIndex] = useState<number>(0);
  const [currentCards, setCurrentCards] = useState<any>([]);
  const [correctAnswer, setCorrectAnswer] = useState<any>(false);
  const [isResultsOpen, setIsResultsOpen] = useState<boolean>(false);
  const correctWords: any = useRef([]);
  const fullCorrectWordsList: any = useRef([]);
  const answers: any = useRef([]);
  const lastWord = useRef(false);
  const appearCards = true;
  const cardsArrays: any = [];

  function audioRemove() {
    const circleLines = document.querySelectorAll('.audioLines');
    for (let i = 0; i < circleLines.length; i++) {
      circleLines[i].classList.remove('volumeChanges');
    }
  }
  function audioAdd() {
    const circleLines = document.querySelectorAll('.audioLines');
    for (let i = 0; i < circleLines.length; i++) {
      circleLines[i].classList.add('volumeChanges');
    }
  }

  const sayWord = () => {
    if (currentWord !== null) {
      const newSound = new Audio(URL_CONTENT + currentWord.audio);
      newSound.onplay = audioAdd;
      newSound.play();
      newSound.onended = audioRemove;
    }
  };


  for (let i = 0; i < 50; i += 5) {
    const tempArray: any = [];
    for (let j = 0; j < 5; j += 1) {
      tempArray.push(words[i + j]);
    }
    cardsArrays.push(tempArray);
  }

  function checkWord(event: any, word: string) {
    if (event.currentTarget.classList.contains('card')) {
      if (word === currentWord.word) {
        correctWords.current.push(word);
        // console.log(correctWords)
        event.currentTarget.classList.remove('card');
        event.currentTarget.classList.add('activeCard');
        console.log('index1', arrayIndex);
        if (arrayIndex < 9) {
          setArrayIndex(arrayIndex + 1);
        } else {
          lastWord.current = true;
        }
        console.log('index2', arrayIndex);
        console.log('cardsArrays', cardsArrays);
        setCorrectAnswer(true);
      } else {
        event.currentTarget.classList.remove('card');
        event.currentTarget.classList.add('inactiveCard');
      }
    }
  }


  function helpPlease() {
    setCorrectAnswer(true);

    if (arrayIndex < 9) {
      setArrayIndex(arrayIndex + 1);
    } else {
      lastWord.current = true;
    }
    const curWords = document.querySelectorAll('.card');
    curWords.forEach((el: any) => {
      if (el.innerText === currentWord.wordTranslate) {
        el.classList.remove('card');
        el.classList.add('activeCard');
      }
    });
  }

  function nextCards() {
    if (arrayIndex <= 9 && !lastWord.current) {
      setCorrectAnswer(false);
      setCurrentCards(cardsArrays[arrayIndex]);
      setCurrentWord(cardsArrays[arrayIndex][randomInteger(0, 4)]);
      console.log('current', currentWord);
      answers.current.push(currentWord);
    }
  }

  function showResults() {
    if (answers.current.length < 10) {
      answers.current.push(currentWord);
    }
    fullCorrectWordsList.current = words.filter((word: any) => correctWords.current.includes(word.word));
    console.log('answers', answers, correctWords);
    setIsResultsOpen(true);
    const loadStats = async () => {
      const gettedStats = await getStatistic();
      console.log('getted stats', gettedStats);
      const percentCorrect = Math.round((fullCorrectWordsList.current.length * 100) / answers.current.length);
      gettedStats.optional.common.lastWord = fullCorrectWordsList.current[fullCorrectWordsList.current.length - 1].id;
      gettedStats.optional.games.audioCall.lastPlay.push(moment().format('DD/MM/YY'));
      gettedStats.optional.games.audioCall.percentCorrect.push(percentCorrect);
      gettedStats.optional.games.audioCall.words.push(answers.current.length);
      console.log('put stats', gettedStats);

      const newStats = async (stats: any) => await createStatistic(stats);
      newStats(gettedStats);
    };
    loadStats();
  }

  /* eslint-disable*/
    useEffect(() => {
        setCurrentCards(cardsArrays[arrayIndex])
        setCurrentWord(cardsArrays[arrayIndex][randomInteger(0, 4)])
    }, [])
    /* eslint-enable */
  return (
    <>
      {isResultsOpen
            && (
            <ModalWindow
              isResultsOpen={isResultsOpen}
              toggleModal={() => setIsResultsOpen(false)}
              correctWords={fullCorrectWordsList.current}
              words={answers.current}
              URL_CONTENT={URL_CONTENT}
            />
            )}

      <CSSTransition in={appearCards} appear timeout={1000} classNames="example">
        <div className={`background${arrayIndex + 1}`} />
      </CSSTransition>
      <ButtonBack />
      <div className={styles.container}>
        <div className={styles.audioContainer}>
          {correctAnswer
            ? (
              <CSSTransition in={appearCards} appear timeout={1000} classNames="example">
                <CorrectAnswer answer={currentWord} />
              </CSSTransition>
            )
            : <AudioIcon word={currentWord} sayWord={sayWord} />}
        </div>
        <div className={styles.cardsContainer}>
          <CardsForPlay
            cards={currentCards}
            currentWord={currentWord}
            setCurrentWord={(index: number) => setCurrentWord(currentCards[index])}
           // eslint-disable-next-line
            checkWord={(event: any, currentWord: string) => checkWord(event, currentWord)}
            appearCards={appearCards}
          />
        </div>
        {
          // eslint-disable-next-line
        !correctAnswer ? (<button onClick={helpPlease} className={styles.nextButton} type="button">Help please</button>)
          : (!lastWord.current ? <button onClick={nextCards} className={styles.nextButton} type="button">Next words</button>
            : <button onClick={showResults} className={styles.nextButton} type="button">Show Results</button>)
}
      </div>

      <div className={styles.correctWords}>
        {' '}
        {correctWords.current.length}
        {' '}
        <span>correct words</span>
      </div>
    </>
  );
};
