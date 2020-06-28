import React, { useContext, useEffect, useState } from 'react';
import styles from './learn-words.module.css';
import { storeWords } from '../../context/contextWords';
import getWords from '../../services/getWords';
import ProgressIndicator from './progress-indicator/progress-indicator';
import Buttons from './buttons/buttons';
import WordsToTraining from './words-to-training/words-to-training';
import Card from './card/card'
import CardsSlider from './cards-slider/cards-slider';

function LearnWords() {
  const wordsState = useContext(storeWords);
  const dispatchWords = wordsState.dispatch;

  const [words, setWords] = useState(Array());
  const [word, setWord] = useState('')
  const [correct, setCorrect] = useState(false)
  const [usersWord, setUsersWord] = useState('')
  const [indexes, setIndexes] = useState(Array())
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const preloadWords = async () => {
      const wordsFromBackend = await getWords({ page: 1, group: 0 });
      setWords(wordsFromBackend);
      dispatchWords({ type: 'setWords', value: wordsFromBackend });
    };
    preloadWords();
    // eslint-disable-next-line
  }, []);

  if (words.length === 0) return null

  const newWord = (newWord: any) => setWord(newWord)
  // console.log(word)

  const correctCard = (isCorrect: boolean) => setCorrect(isCorrect)
  // console.log(correct)

  const newUsersWord = (usersWord: string) => setUsersWord(usersWord)

  // console.log(usersWord)
  const newIndex = () => setIndex(index + 1)

  return (
    <div className={styles.background}>
      <div className={styles.cardContainer}>
        <ProgressIndicator/>
        <CardsSlider word={word} setWord={newWord} index={index} setIndex={newIndex} onCorrect={correctCard} correct={correct} 
        setUsersWord={newUsersWord} usersWord={usersWord} indexes={indexes} setIndexes={setIndexes}/>
        {/* <Card word={word} setWord={newWord} index={0} onCorrect={correctCard} correct={correct} 
        setUsersWord={newUsersWord} usersWord={usersWord} indexes={indexes} setIndexes={setIndexes}/> */}
        <Buttons word={word} onCorrect={correctCard} setUsersWord={setUsersWord} 
        usersWord={usersWord} correct={correct} setIndexes={setIndexes} setIndex={newIndex}/>
        <WordsToTraining />
      </div>
    </div>
    )
}

export default LearnWords;
