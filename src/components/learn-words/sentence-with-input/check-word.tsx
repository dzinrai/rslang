function checkWord(e: any, props: any) {
    const {
        word, correct, onCorrect, setUsersWord, usersWord, indexes, setIndexes, 
        setInProp, setTranspAnswer
    } = props

    setInProp(true);
    setTranspAnswer(false);
    if (e.keyCode === 13 && !correct) {
      const inputWord = usersWord.toLowerCase().trim();
      setIndexes([]);
      if (inputWord === word) {
        onCorrect(true);
        setTranspAnswer(false);
      } else if (inputWord.length !== word.length) {
        const newIndexes: any = [];
        word.split('').map((el: string, i: number) => (el !== inputWord[i]) && newIndexes.push(i));
        setIndexes(indexes.concat(newIndexes));
        setInProp(false);
        setTranspAnswer(true);
      } else {
        const newIndexes: any = [];
        inputWord.split('').map((el: string, i: number) => (el !== word[i]) && newIndexes.push(i));
        setIndexes(indexes.concat(newIndexes));
        setInProp(false);
        setTranspAnswer(true);
      }
      setUsersWord('');
    }
}

export default checkWord