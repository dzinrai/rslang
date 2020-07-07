function checkWord(props: any) {
    const {
        word, correct, onCorrect, setUsersWord, usersWord, setIndexes, 
        setInProp, setTranspAnswer
    } = props

    setInProp(true);
    setTranspAnswer(false);
    if (!correct) {
      const curWord = word.word;
      const inputWord = usersWord.toLowerCase().trim();
      setIndexes([]);
      if (inputWord === curWord) {
        onCorrect(true);
        setTranspAnswer(false);
      } else if (inputWord.length !== curWord.length) {
        const newIndexes: any = [];
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


export default checkWord