/* eslint-disable */
import React, { useEffect } from 'react';
import Card from '../card/card';

interface SliderProps {
  maxWordsCards: number,
  wordIndicator:number,
  setItTimeToNotification:any,
  repeatWords: any,
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
  inProp, setInProp, transpAnswer, setTranspAnswer, repeatWords, maxWordsCards,
   setItTimeToNotification,setIndicator,wordIndicator
}: SliderProps) {

  let curword: any = {};

console.log('card slider word',word)
console.log('card index',index)

 

// if(!word.userWord||!curword) return null;

  /* eslint-disable */
  useEffect(() => {
    if ( index >=maxWordsCards - 1) {
      console.log('все слова для повторения',repeatWords)
      if (repeatWords.length&&repeatWords[0].userWord) {
        curword = repeatWords.shift();
        console.log('а сейчас слово для репита',curword) ;       
        curword.userWord.optional.repeat=false;
      } else {
        setItTimeToNotification(true) ;
        console.log('notification')
      }
  
    } else {
      curword = words[index];
    }},[setIndex])

  useEffect(() => {
    word.userWord?setIndicator(word.userWord.optional.wordIndicator):null;
    curword?setWord(curword):null;
    setAudioWord(word.audio);
    setAudioExample(word.audioExample);
    setAudioMeaning(word.audioMeaning);
  }, [curword, word, setWord, setAudioWord, setAudioExample, setAudioMeaning]);

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
