function randomInteger(min = 1, max = 59) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

export default (words: any) => {
  const newWords: any = [];
  const wordsForPlay: any = [];

  words.map((word: any) => newWords.push({ newWord: word.word, newTransl: word.wordTranslate }));

  for (let i = 0; i < newWords.length; i += 1) {
    if (Math.round(Math.random())) {
      wordsForPlay.push({ yes: 1, word: newWords[i].newWord, translate: newWords[i].newTransl });
    } else {
      wordsForPlay.push({
        yes: 0,
        word: newWords[i].newWord,
        translate: newWords[(i + randomInteger(1, 59)) % 60].newTransl,
      });
    }
  }
  return wordsForPlay;
};
