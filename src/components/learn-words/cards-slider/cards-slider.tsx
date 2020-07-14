/* eslint-disable */
import React, { useEffect } from 'react';
import Card from '../card/card';

interface SliderProps {
  maxWordsCards: number,
  wordIndicator:number,
  words: any,
  word: any,
  setWord: any,
  index: number,
  setIndex: any,
  onCorrect: any,
  correct: boolean,
  setUsersWord: any,
  usersWord: string,
  indexes: any,
  setIndexes: any,
  setAudioWord: any,
  setAudioExample: any,
  setAudioMeaning: any,
  setIndicator:any,
  autoplay: boolean,
  setAutoplay: any,
  inProp: boolean,
  setInProp: any,
  transpAnswer: boolean,
  setTranspAnswer: any,
}

function CardsSlider({
  words, word, setWord, index, setIndex, onCorrect, correct, setUsersWord,
  usersWord, indexes, setIndexes,
  setAudioWord, setAudioExample, setAudioMeaning, autoplay, setAutoplay,
  inProp, setInProp, transpAnswer, setTranspAnswer, maxWordsCards,
 setIndicator,wordIndicator
}: SliderProps) {



console.log('card slider word',word)
console.log('card index',index)



  /* eslint-disable */
      let curword = words[index];
  
   
  useEffect(() => {
    word.userWord?setIndicator(word.userWord.optional.wordIndicator):null;
    curword?setWord(curword):null;
    setAudioWord(word.audio);
    setAudioExample(word.audioExample);
    setAudioMeaning(word.audioMeaning);
  }, [curword, word,index]);

  /* eslint-enable */
  return (
    <>
      {' '}
      {word.length !== 0
        ? (
          <Card
            indicator={wordIndicator}
            word={word}
            setWord={setWord}
            index={index}
            setIndex={setIndex}
            onCorrect={onCorrect}
            correct={correct}
            setUsersWord={setUsersWord}
            usersWord={usersWord}
            indexes={indexes}
            setIndexes={setIndexes}
            autoplay={autoplay}
            setAutoplay={setAutoplay}
            inProp={inProp}
            setInProp={setInProp}
            transpAnswer={transpAnswer}
            setTranspAnswer={setTranspAnswer}
          />
        ) : null}
    </>
  );
}

export default CardsSlider;
