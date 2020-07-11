/* eslint-disable no-underscore-dangle */
/* eslint no-param-reassign: "error" */
import React from 'react';
import { Button } from 'antd';
import { CheckOutlined, HistoryOutlined } from '@ant-design/icons';
import moment from 'moment';
import checkWord from './check-word';
import styles from './buttons.module.css';
import { updateWordById } from '../../../services/getWords';
import { getStatistic, createStatistic } from '../../../services/statistic';
import { getSettings } from '../../../services/settings';

interface ButtonsProps {
  word: any,
  setProgress: any,
  onCorrect: any,
  setUsersWord: any,
  usersWord: string,
  correct: boolean,
  setIndexes: any,
  index: number,
  setIndex: any,
  audioWord: any,
  audioExample: any,
  audioMeaning: any,
  inProp: boolean,
  setInProp: any,
  transpAnswer: boolean,
  setTranspAnswer: any,
  visibleNot: boolean,
  setVisibleNot: any,
  maxCards: number,
  notification: any
}


function viewCount(wordObject: any) {
  wordObject.userWord.optional.views++;
  wordObject.userWord.optional.newWord = false;
  wordObject.userWord.optional.lastView = moment().format('DD/MM/YY');
  updateWordById(wordObject._id, wordObject.userWord);
}

function Buttons({
  word, onCorrect, setUsersWord, usersWord, correct, setIndexes, index, setIndex,
  setInProp, setTranspAnswer, visibleNot, setVisibleNot, maxCards, notification, setProgress
}: ButtonsProps) {

  console.log(visibleNot);
  const checkProps = {
    word,
    onCorrect,
    setUsersWord,
    usersWord,
    correct,
    setIndexes,
    setIndex,
    setInProp,
    setTranspAnswer,
  };
  function saveLastWord(word: any, isTrain?: boolean) {
    getStatistic()
      .then((statistic: any) => {
        if (isTrain) {
          getSettings()
            .then((settings: any) => {
              statistic.optional.common.dayProgress = statistic.optional.common.wordsToday / settings.optional.cardsPerDay * 100;
              setProgress(statistic.optional.common.dayProgress)
            })
          statistic.optional.common.wordsToday += 1;
          if (!word.userWord.optional.newWord === false) { statistic.optional.common.newWordsToday += 1 }
        }
        statistic.learnedWords++;
        statistic.optional.common.lastWord = word._id;
        createStatistic(statistic);
      })
      .then(() => {

      }).catch(() => {
        console.log("Can't update statistic");
      })
      .then(() => {
        viewCount(word)
      });
  }

  function difficultyButtonClick(difficulty: string) {
    saveLastWord(word, true);
    switch (difficulty) {
      case 'hard':
        word.userWord.difficulty = 'hard';
        word.userWord.optional.interval = 1;
        word.userWord.optional.nextView = moment().add(+word.userWord.optional.interval, 'days').format('DD/MM/YY');
        break;
      case 'normal':
        word.userWord.difficulty = 'normal';
        word.userWord.optional.interval = 2;
        word.userWord.optional.nextView = moment().add(+word.userWord.optional.interval, 'days').format('DD/MM/YY');
        break;
      case 'easy':
        word.userWord.difficulty = 'easy';
        word.userWord.optional.interval = +word.userWord.optional.interval * 2;
        word.userWord.optional.nextView = moment().add(+word.userWord.optional.interval, 'days').format('DD/MM/YY');
        break;
      default:
        word.userWord.optional.repeat = true;
        break;
    }
    updateWordById(word._id, word.userWord);
    if (index < maxCards - 1) {
      setIndex();
      onCorrect(false);
      setUsersWord('');
      setTranspAnswer(false);
    }
    if ((index === maxCards - 1) && correct) {
      setVisibleNot(true);
      // get stats from back
      notification();
    }
  }

  function showResultsClick() {
    setUsersWord(word.word);
    onCorrect(true);
  }

  return (
    <>
      <div className={styles.buttonsContainer}>
        {correct
          ? (
            <>
              <div className={styles.buttonsInfo}>Indicate difficulty level</div>
              <div className={styles.levelButtons}>
                <Button
                  onClick={() => difficultyButtonClick('hard')}
                  className={styles.buttonHard}
                >
                  Hard
                </Button>
                <Button
                  onClick={() => difficultyButtonClick('normal')}
                  className={styles.buttonNormal}
                >
                  Normal
                </Button>
                <Button
                  onClick={() => difficultyButtonClick('easy')}
                  className={styles.buttonEasy}
                >
                  Easy
                </Button>
              </div>
              <Button type="primary" icon={<HistoryOutlined />} size="large" shape="circle" onClick={() => difficultyButtonClick('repeat')} />
            </>
          )
          : (
            <>
              <Button
                onClick={() => checkWord(checkProps)}
                type="primary"
                icon={<CheckOutlined />}
                size="large"
                shape="circle"
                style={{ width: '50px', height: '50px', marginBottom: '12px' }}
              />
              <div>
                <button
                  className={styles.showResults}
                  type="button"
                  onClick={() => showResultsClick()}
                >
                  Show Results
                </button>
              </div>
            </>
          )}
      </div>
    </>
  );
}

export default Buttons;
