import React from 'react';
import { CSSTransition } from 'react-transition-group';
import checkWord from './check-word';
import styles from './sentence-with-input.module.css';
import './styles.css';

interface Word {
  word: string,
  correct: boolean,
  onCorrect: any,
  setUsersWord: any,
  usersWord: string,
  indexes: any,
  setIndexes: any,
  setIndex: any,
  inProp: boolean,
  setInProp: any,
  transpAnswer: boolean,
  setTranspAnswer: any
}

function SentenceWithInput({
  word, correct, onCorrect, setUsersWord, usersWord, indexes, setIndexes,
  inProp, setInProp, transpAnswer, setTranspAnswer,
}: Word) {
  const checkProps = {
    word,
    correct,
    onCorrect,
    setUsersWord,
    usersWord,
    indexes,
    setIndexes,
    setInProp,
    setTranspAnswer,
  };

  if (!word) return null;

  return (
    <>
      <div className={styles.sentenceContainer}>
        <span className={styles.inputContainer}>
          <span className={styles.background}>
            {/*eslint-disable*/
              word.split('').map((el, i) => <span key={i} className={styles.hidden}>{el}</span>)
            /* eslint-enable */}
          </span>

          <span className={styles.wordContainer}>
            {word.split('').map((el, i) => (indexes.includes(i)
              ? (
                /*eslint-disable*/
                <CSSTransition in={inProp} key={i} timeout={1500} classNames="my-node">
                  <span className={styles.mistake}>{el}</span>
                </CSSTransition>
                /* eslint-enable */
              )
              : (
                /*eslint-disable*/
                <CSSTransition in={inProp} key={i} timeout={1500} classNames="my-node">
                  <span className={styles.correct}>{el}</span>
                </CSSTransition>
                /* eslint-enable */
              )))}
          </span>
          {transpAnswer && (
            <span className={styles.transparentWordContainer}>
              {/*eslint-disable*/
                word.split('').map((el, i) => (indexes.includes(i)
                ? <span key={i} className={styles.transparentMistake}>{el}</span>
                : <span key={i} className={styles.transparentCorrect}>{el}</span>))
                /* eslint-enable */}
            </span>
          )}
          {correct && (
            <span className={styles.answerContainer}>
              {/*eslint-disable*/
              word.split('').map((el, i) => <span key={i} className={styles.transparentCorrect}>{el}</span>)
              /* eslint-enable */}
            </span>
          )}
          <input
            className={styles.answerInput}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setUsersWord(e.target.value);
            }}
            onKeyDown={(e: any) => checkWord(e, checkProps)}
            type="text"
            name=""
            id="inputWord"
            value={usersWord}
          />
        </span>
      </div>
    </>
  );
}

export default SentenceWithInput;
