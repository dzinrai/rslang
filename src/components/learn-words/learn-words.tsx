import React, { useContext, useEffect, useState } from 'react';
import styles from './learn-words.module.css';
import { storeWords } from '../../context/contextWords';
import {getWordsFromBackend} from '../../services/getWords';
import  {preloadWords,createUserWord}  from '../../services/createUserWord';
import getWords from '../../services/getWords';
import ProgressIndicator from './progress-indicator/progress-indicator';
import Buttons from './buttons/buttons';
import WordsToTraining from './words-to-training/words-to-training';
import Card from './card/card'
import CardsSlider from './cards-slider/cards-slider';
import ReactAudioPlayer from 'react-audio-player';
import AudioAutoplay from './audio-autoplay/audio-autoplay'

function LearnWords() {
  const wordsState = useContext(storeWords);
  const dispatchWords = wordsState.dispatch;

  const [words, setWords] = useState(Array());
  const [word, setWord] = useState('')
  const [correct, setCorrect] = useState(false)
  const [usersWord, setUsersWord] = useState('')
  const [indexes, setIndexes] = useState(Array())
  const [index, setIndex] = useState(0)
  const [audioWord, setAudioWord] = useState(null)
  const [audioExample, setAudioExample] = useState(null)
  const [audioMeaning, setAudioMeaning] = useState(null)
  const [autoplay, setAutoplay] = useState(false)
  const [inProp, setInProp] = useState(true);
  const [transpAnswer, setTranspAnswer] = useState(false)
  preloadWords({page:0,group:1, wordsPerExampleSentenceLTE:10, wordsPerPage:10 });

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
  const correctCard = (isCorrect: boolean) => setCorrect(isCorrect)
  const newUsersWord = (usersWord: string) => setUsersWord(usersWord)
  const newIndex = () => setIndex(index + 1)
  const newAudioWord = (audio: any) => setAudioWord(audio)
  const newAudioExample = (audio: any) => setAudioExample(audio)
  const newAudioMeaning = (audio: any) => setAudioMeaning(audio)
  const controlAutoplay = (autoplay: boolean) => setAutoplay(autoplay)
  const newInProp = (inProp: boolean) => setInProp(inProp)
  const newTranspAnswer = (transpAnswer: boolean) => setTranspAnswer(transpAnswer)

  return (
    <div className={styles.background}>
      <div className={styles.cardContainer}>
        <ProgressIndicator/>
        <CardsSlider word={word} setWord={newWord} index={index} setIndex={newIndex} onCorrect={correctCard} correct={correct} 
        setUsersWord={newUsersWord} usersWord={usersWord} indexes={indexes} setIndexes={setIndexes} 
        setAudioWord={newAudioWord} setAudioExample={newAudioExample} setAudioMeaning={newAudioMeaning}
        autoplay={autoplay} setAutoplay={controlAutoplay} inProp={inProp} setInProp={newInProp} 
        transpAnswer={transpAnswer} setTranspAnswer={newTranspAnswer} />
        {(autoplay && correct) && <AudioAutoplay audioWord={audioWord} audioExample={audioExample} audioMeaning={audioMeaning}/>}
        <Buttons word={word} onCorrect={correctCard} setUsersWord={setUsersWord} usersWord={usersWord} correct={correct} 
        setIndexes={setIndexes} setIndex={newIndex} audioWord={audioWord} audioExample={audioExample} audioMeaning={audioMeaning}
        inProp={inProp} setInProp={newInProp} transpAnswer={transpAnswer} setTranspAnswer={newTranspAnswer}/>
        <WordsToTraining />
      </div>
    </div>
    )
}

export default LearnWords;
