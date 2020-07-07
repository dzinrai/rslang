interface CheckProps {
  word: string,
  correct: boolean,
  onCorrect: any,
  setUsersWord: any,
  usersWord: string,
  setIndexes: any,
  setInProp: any,
  setTranspAnswer: any
}

function checkWord(e: any, {
  word, correct, onCorrect, setUsersWord, usersWord, setIndexes,
  setInProp, setTranspAnswer,
}: CheckProps) {
  setInProp(true);
  setTranspAnswer(false);
  if (e.keyCode === 13 && !correct) {
    const inputWord = usersWord.trim();
    setIndexes([]);
    if (inputWord === word) {
      onCorrect(true);
      setTranspAnswer(false);
    } else if (inputWord.length !== word.length) {
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
