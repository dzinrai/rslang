/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable */
import { updateWordById } from '../../../services/getWords';

interface CheckProps {
  word: any,
  correct: boolean,
  onCorrect: any,
  setUsersWord: any,
  usersWord: string,
  setIndexes: any,
  setInProp: any,
  setTranspAnswer: any,

}
function errorsCount(wordObject: any,isTrain?:boolean) {
  wordObject.userWord.optional.errorInGame = isTrain ? false : true;
  wordObject.userWord.optional.errors += 1;

  wordObject.userWord.optional.wordIndicator > 1 ?
   wordObject.userWord.optional.wordIndicator-- :
    wordObject.userWord.optional.wordIndicator;

  wordObject.userWord.optional.repeat = true;
  updateWordById(wordObject._id, wordObject.userWord);
}

function correctCount(wordObject: any) {
  wordObject.userWord.optional.correct += 1;
  wordObject.userWord.optional.errorInGame=false;
  wordObject.userWord.optional.wordIndicator < 5 ?
   wordObject.userWord.optional.wordIndicator++ :
    wordObject.userWord.optional.wordIndicator;

  updateWordById(wordObject._id, wordObject.userWord);
}

function checkWord({
  word, correct, onCorrect, setUsersWord, usersWord, setIndexes,
  setInProp, setTranspAnswer,
}: CheckProps) {
  setInProp(true);
  setTranspAnswer(false);
  if (!correct) {
    const curWord = word.word;
    const inputWord = usersWord.trim();
    setIndexes([]);
    if (inputWord === curWord) {
      correctCount(word);
      onCorrect(true);
      setTranspAnswer(false);
    } else if (inputWord.length !== curWord.length) {
      const newIndexes: any = [];
      errorsCount(word,true);
      curWord.split('').map((el: string, i: number) => el !== inputWord[i] && newIndexes.push(i));
      setIndexes(newIndexes);
      setInProp(false);
      setTranspAnswer(true);
    } else {
      const newIndexes: any = [];
      inputWord.split('').map((el: string, i: number) => el !== curWord[i] && newIndexes.push(i));
      setIndexes(newIndexes);
      setInProp(false);
      setTranspAnswer(true);
    }
    setUsersWord('');
  }
}

export default checkWord;
