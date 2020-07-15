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
  renderWithSettings: any,
  word: any,
  setLearned:any,
  setProgress: any,
  onCorrect: any,
  setUsersWord: any,
  usersWord: string,
  correct: boolean,
  setIndexes: any,
  index: number,
  setNewMaxCards: any,
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
  notification: any,
  setNewWords: any,
  initialWords: any,
}

function viewCount(wordObject: any) {
  wordObject.userWord.optional.views += 1;
  wordObject.userWord.optional.newWord = false;
  wordObject.userWord.optional.lastView = moment().format('DD/MM/YY');
  updateWordById(wordObject._id, wordObject.userWord);
}

function Buttons({
  word, onCorrect, setUsersWord, usersWord, correct, setIndexes, index, setIndex,
  setInProp, setTranspAnswer, visibleNot, setVisibleNot, maxCards, notification, setProgress,
  setNewWords, initialWords, setNewMaxCards, renderWithSettings, setLearned,
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
  // eslint-disable-next-line
  function saveLastWord(word: any) {
    getStatistic()
      .then((statistic: any) => {
        if (word.userWord.optional.repeat === false) {
          // eslint-disable-next-line
          statistic.optional.common.wordsToday[statistic.optional.common.wordsToday.length - 1] += 1;
          getSettings()
            .then((settings: any) => {
              // eslint-disable-next-line
              const dayProgress = Math.round(((statistic.optional.common.wordsToday[(statistic.optional.common.wordsToday.length) - 1]) / settings.optional.cardsPerDay) * 100);
              statistic.optional.common.dayProgress = (dayProgress > 100) ? 100 : dayProgress;
              setProgress(statistic.optional.common.dayProgress);
              // eslint-disable-next-line
              setLearned(statistic.optional.common.wordsToday[(statistic.optional.common.wordsToday.length) - 1]);
            });
          createStatistic(statistic);
        }
        // eslint-disable-next-line
        if (!word.userWord.optional.newWord === false) { statistic.optional.common.newWordsToday += 1; }

        if (word.userWord.optional.newWord === true) {
          statistic.learnedWords += 1;
        }
        statistic.optional.common.lastWord = word._id;
        createStatistic(statistic);
      })
      .catch(() => {
        console.log("Can't update statistic");
      })
      .then(() => {
        viewCount(word);
      });
  }

  function difficultyButtonClick(difficulty: string) {
    saveLastWord(word);
    switch (difficulty) {
      case 'hard':
        word.userWord.difficulty = 'hard';
        word.userWord.optional.repeat = false;
        word.userWord.optional.interval = 1;
        word.userWord.optional.nextView = moment().add(+word.userWord.optional.interval, 'days').format('DD/MM/YY');
        break;
      case 'normal':
        word.userWord.difficulty = 'normal';
        word.userWord.optional.repeat = false;
        word.userWord.optional.interval = 2;
        word.userWord.optional.nextView = moment().add(+word.userWord.optional.interval, 'days').format('DD/MM/YY');
        break;
      case 'easy':
        word.userWord.difficulty = 'easy';
        word.userWord.optional.repeat = false;
        word.userWord.optional.interval = +word.userWord.optional.interval * 2;
        word.userWord.optional.nextView = moment().add(+word.userWord.optional.interval, 'days').format('DD/MM/YY');
        break;
      default:
        console.log('делаем слово с репит');
        word.userWord.optional.repeat = true;
        setNewWords([...initialWords, word]);
        setNewMaxCards(maxCards + 1);
        break;
    }
    updateWordById(word._id, word.userWord);
    if (index < maxCards - 1) {
      setIndex();
      onCorrect(false);
      setUsersWord('');
      setTranspAnswer(false);
    }

    if ((index === (maxCards - 1)) && correct) {
      setVisibleNot(true);
      getStatistic()
        .then((statistic: any) => {
          notification(statistic);
        });
    }
  }

  function showResultsClick() {
    setUsersWord(word.word);
    onCorrect(true);
  }
/*eslint-disable*/
  return (
    <>
      <div className={styles.buttonsContainer}>
        {correct
          ? (renderWithSettings.optional.difficultyButtons ? (
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
          ) : (
            <Button
              onClick={() => difficultyButtonClick('normal')}
              className={styles.buttonNormal}
            >
              Next
            </Button>
          )
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
                {renderWithSettings.optional.showResultButton
                  && (
                    <button
                      className={styles.showResults}
                      type="button"
                      onClick={() => showResultsClick()}
                    >
                      Show Results
                    </button>
                  )}
              </div>
            </>
          )}
      </div>
    </>
  );
}

export default Buttons;
