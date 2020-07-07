import React from 'react';
import { Button, Switch } from 'antd';
import { CheckOutlined, HistoryOutlined } from '@ant-design/icons';
import checkWord from './check-word';
import styles from './buttons.module.css';

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

  function difficultyButtonClick() {
    setIndex();
    onCorrect(false);
    setUsersWord('');
    setTranspAnswer(false);
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
                  onClick={() => difficultyButtonClick()}
                  className={styles.buttonHard}
                >
                  Hard
                </Button>
                <Button
                  onClick={() => difficultyButtonClick()}
                  className={styles.buttonNormal}
                >
                  Normal
                </Button>
                <Button
                  onClick={() => difficultyButtonClick()}
                  className={styles.buttonEasy}
                >
                  Easy
                </Button>
              </div>
              <Button type="primary" icon={<HistoryOutlined />} size="large" shape="circle" />
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
      <div className={styles.switchContainer}>
        <div>
          <Switch />
          <span>Only new words</span>
        </div>
        <div>
          <Switch defaultChecked />
          <span>All words</span>
        </div>
        <div>
          <Switch />
          <span>Difficult words</span>
        </div>
      </div>
    </>
  );
}

export default Buttons;
