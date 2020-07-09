import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './sentence-with-input.module.css';
import './styles.css';
import { updateWordById} from '../../../services/getWords'

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
  wordObject:any,
  setTranspAnswer: any
}

function errorsCount( wordObject:any){
  wordObject.userWord.optional.errors+=1;
  wordObject.userWord.optional.repeat=true;
  updateWordById(wordObject._id, wordObject.userWord)
}
function correctCount( wordObject:any){
  wordObject.userWord.optional.correct+=1;
  updateWordById(wordObject._id, wordObject.userWord)
}

function SentenceWithInput({
  wordObject,word, correct, onCorrect, setUsersWord, usersWord, indexes, setIndexes,
  inProp, setInProp, transpAnswer, setTranspAnswer,
}: Word) {
  function checkWord(e: any) {
    setInProp(true);
    setTranspAnswer(false);
    if (e.keyCode === 13 && !correct) {
      setIndexes([]);
      const inputWord = usersWord.toLowerCase().trim();
      if (inputWord === word) {
        onCorrect(true);
        correctCount( wordObject)
        setTranspAnswer(false);
      } else if (inputWord.length !== word.length) {  
        errorsCount(wordObject)
        const newIndexes: any = [];
        word.split('').map((el: string, i: number) => (el !== inputWord[i]) && newIndexes.push(i));
        setIndexes(newIndexes);
        setInProp(false);
        setTranspAnswer(true);
      } else {
        const newIndexes: any = [];
        inputWord.split('').map((el: string, i: number) => (el !== word[i]) && newIndexes.push(i));
        setIndexes(newIndexes);
        setInProp(false);
        setTranspAnswer(true);
      }
      setUsersWord('');
    }
  }

  if (!word) return null;

  return (
    <>
      <div className={styles.sentenceContainer}>
        <span className={styles.inputContainer}>
          <span className={styles.background}>
            {word.split('').map((el, i) => <span key={i} className={styles.hidden}>{el}</span>)}
          </span>

          <span className={styles.wordContainer}>
            {word.split('').map((el, i) => (indexes.includes(i)
              ? (
                <CSSTransition in={inProp} key={i} timeout={1500} classNames="my-node">
                  <span className={styles.mistake}>{el}</span>
                </CSSTransition>
              )
              : (
                <CSSTransition in={inProp} key={i} timeout={1500} classNames="my-node">
                  <span className={styles.correct}>{el}</span>
                </CSSTransition>
              )))}
          </span>
          {transpAnswer && (
            <span className={styles.transparentWordContainer}>
              {word.split('').map((el, i) => (indexes.includes(i)
                ? <span key={i} className={styles.transparentMistake}>{el}</span>
                : <span key={i} className={styles.transparentCorrect}>{el}</span>))}
            </span>
          )}
          {correct && (
            <span className={styles.answerContainer}>
              {word.split('').map((el, i) => <span key={i} className={styles.transparentCorrect}>{el}</span>)}
            </span>
          )}
          <input
            className={styles.answerInput}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setUsersWord(e.target.value);
            }}
            onKeyDown={(e: any) => checkWord(e)}
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
