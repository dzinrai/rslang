import React from 'react';
import { Button } from 'antd';
import { CheckOutlined, HistoryOutlined } from '@ant-design/icons';
import styles from './buttons.module.css';
import { updateWordById} from '../../../services/getWords'

interface ButtonsProps {
  word: any,
  onCorrect: any,
  setUsersWord: any,
  usersWord: string,
  correct: boolean,
  setIndexes: any,
  setIndex: any,
  audioWord: any,
  audioExample: any,
  audioMeaning: any,
  inProp: boolean,
  setInProp: any,
  transpAnswer: boolean,
  setTranspAnswer: any
}

function Buttons({
  word, onCorrect, setUsersWord, usersWord, correct, setIndexes, setIndex,
  setInProp, setTranspAnswer,
}: ButtonsProps) {
  function checkWord() {
    if (!correct) {
      const curWord = word.word;
      const inputWord = usersWord.toLowerCase().trim();
      setIndexes([]);
      if (inputWord === curWord) {
        onCorrect(true);
        setTranspAnswer(false);
      } else if (inputWord.length !== curWord.length) {
        const indexes: any = [];
        curWord.split('').map((el: string, i: number) => el !== inputWord[i] && indexes.push(i));
        setIndexes(indexes);
        setInProp(false);
        setTranspAnswer(true);
      } else {
        const indexes: any = [];
        inputWord.split('').map((el: string, i: number) => el !== curWord[i] && indexes.push(i));
        setIndexes(indexes);
        setInProp(false);
        setTranspAnswer(true);
      }
      setUsersWord('');
    }
  }

  function difficultyButtonClick(difficulty: string) {
    switch (difficulty) {
      case 'hard':
        word.userWord.difficulty='hard';
        word.userWord.optional.nextDate.setDate(word.userWord.optional.lastDate+1)
        break;
      case 'normal':
        word.userWord.difficulty='normal';
        word.userWord.optional.nextDate.setDate(word.userWord.optional.lastDate+2)
        break;
      case 'easy':
        word.userWord.difficulty='easy';
        word.userWord.optional.nextDate.setDate(word.userWord.optional.lastDate+4)
        break;
      default:
        word.userWord.optional.repeat=true;
        break;
    }
    updateWordById(word._id, word.userWord)
    setIndex();
    onCorrect(false);
    setUsersWord('');
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
                onClick={() => checkWord()}
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
