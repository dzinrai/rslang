/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable */
import { updateWordById } from '../../../services/getWords';
import { getStatistic, createStatistic } from '../../../services/statistic';

interface CheckProps {
  word: string,
  correct: boolean,
  onCorrect: any,
  setUsersWord: any,
  usersWord: string,
  setIndexes: any,
  setInProp: any,
  setTranspAnswer: any,
  wordObject: any
}

export function errorsCount(wordObject: any) {
  getStatistic()
  .then((statistic: any) => {
      statistic.optional.common.errors+=1;
      createStatistic(statistic);
    })
  
  wordObject.userWord.optional.errors += 1;

  wordObject.userWord.optional.wordIndicator > 1 ?
   wordObject.userWord.optional.wordIndicator-- :
    wordObject.userWord.optional.wordIndicator;

  wordObject.userWord.optional.repeat = true;
  updateWordById(wordObject._id, wordObject.userWord);
}
export function correctCount(wordObject: any) {
  getStatistic()
  .then((statistic: any) => {
      statistic.optional.common.correct[statistic.optional.common.correct.length-1]+=1;
      createStatistic(statistic);
    })
  wordObject.userWord.optional.correct += 1;
  wordObject.userWord.optional.wordIndicator < 5 ?
   wordObject.userWord.optional.wordIndicator+=1 :
   updateWordById(wordObject._id, wordObject.userWord);
}

function checkWord(e: any, {
  wordObject, word, correct, onCorrect, setUsersWord, usersWord, setIndexes,
  setInProp, setTranspAnswer,
}: CheckProps) {
  setInProp(true);
  setTranspAnswer(false);
  if (e.keyCode === 13 && !correct) {
    const inputWord = usersWord.trim();
    setIndexes([]);
    if (inputWord === word) {
      onCorrect(true);
      correctCount(wordObject);
      setTranspAnswer(false);
    } else if (inputWord.length !== word.length) {
      errorsCount(wordObject);
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

export default checkWord;
