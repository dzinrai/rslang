import React, { useEffect, useState } from 'react';
import styles from './learn-words.module.css';
import { getWordsFromBackend } from '../../services/getWords';
import ProgressIndicator from './progress-indicator/progress-indicator';
import Buttons from './buttons/buttons';
import CardsSlider from './cards-slider/cards-slider';
import AudioAutoplay from './audio-autoplay/audio-autoplay';

function LearnWords() {
  const [words, setWords] = useState([]);
  const [word, setWord] = useState('');
  const [correct, setCorrect] = useState(false);
  const [usersWord, setUsersWord] = useState('');
  const [indexes, setIndexes] = useState([]);
  const [index, setIndex] = useState(0);
  const [audioWord, setAudioWord] = useState(null);
  const [audioExample, setAudioExample] = useState(null);
  const [audioMeaning, setAudioMeaning] = useState(null);
  const [autoplay, setAutoplay] = useState(false);
  const [inProp, setInProp] = useState(true);
  const [transpAnswer, setTranspAnswer] = useState(false);

  useEffect(() => {
    getWordsFromBackend()
      .then((data) => {
        setWords(data[0].paginatedResults);
      });
  }, []);

  if (words.length === 0) return null;

  const newWord = (word1: any) => setWord(word1);
  const correctCard = (isCorrect: boolean) => setCorrect(isCorrect);
  const newUsersWord = (word1: string) => setUsersWord(word1);
  const newIndex = () => setIndex(index + 1);
  const newAudioWord = (audio: any) => setAudioWord(audio);
  const newAudioExample = (audio: any) => setAudioExample(audio);
  const newAudioMeaning = (audio: any) => setAudioMeaning(audio);
  const controlAutoplay = (isAutoplay: boolean) => setAutoplay(isAutoplay);
  const newInProp = (isInProp: boolean) => setInProp(isInProp);
  const newTranspAnswer = (isTranspAnswer: boolean) => setTranspAnswer(isTranspAnswer);

  return (
    <div className={styles.background}>
      <div className={styles.cardContainer}>
        <ProgressIndicator />
        <CardsSlider
          words={words}
          word={word}
          setWord={newWord}
          index={index}
          setIndex={newIndex}
          onCorrect={correctCard}
          correct={correct}
          setUsersWord={newUsersWord}
          usersWord={usersWord}
          indexes={indexes}
          setIndexes={setIndexes}
          setAudioWord={newAudioWord}
          setAudioExample={newAudioExample}
          setAudioMeaning={newAudioMeaning}
          autoplay={autoplay}
          setAutoplay={controlAutoplay}
          inProp={inProp}
          setInProp={newInProp}
          transpAnswer={transpAnswer}
          setTranspAnswer={newTranspAnswer}
        />
        {(autoplay && correct) && (
        <AudioAutoplay
          audioWord={audioWord}
          audioExample={audioExample}
          audioMeaning={audioMeaning}
        />
        )}
        <Buttons
          word={word}
          onCorrect={correctCard}
          setUsersWord={setUsersWord}
          usersWord={usersWord}
          correct={correct}
          setIndexes={setIndexes}
          setIndex={newIndex}
          audioWord={audioWord}
          audioExample={audioExample}
          audioMeaning={audioMeaning}
          inProp={inProp}
          setInProp={newInProp}
          transpAnswer={transpAnswer}
          setTranspAnswer={newTranspAnswer}
        />
      </div>
    </div>
  );
}

export default LearnWords;
