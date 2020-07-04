import React, { useContext, useEffect, useState } from 'react';
import styles from './cards-slider.module.css';
import Card from '../card/card';
import imgSnow from '../../../img/image-snow.png';
import { storeWords } from '../../../context/contextWords';
import {getWords} from '../../../services/getWords';

interface SliderProps {
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
    autoplay: boolean,
    setAutoplay: any,
    inProp: boolean,
    setInProp: any,
    transpAnswer: boolean,
    setTranspAnswer: any,
  }

function CardsSlider({ word, setWord, index, setIndex, onCorrect, correct, setUsersWord, usersWord, indexes, setIndexes,
    setAudioWord, setAudioExample, setAudioMeaning, autoplay, setAutoplay, inProp, setInProp, transpAnswer, setTranspAnswer }: SliderProps){

    const wordsState = useContext(storeWords);
    const stateWords = wordsState.state;
    console.log(stateWords)

    const curword = stateWords.words ? stateWords.words[index] : null;
    setWord(curword)
    console.log(correct)

    setAudioWord(word.audio)
    setAudioExample(word.audioExample)
    setAudioMeaning(word.audioMeaning)
  
    // const wordsState = useContext(storeWords);
    // const dispatchWords = wordsState.dispatch;

    // const [words, setWords] = useState(Array());

    // useEffect(() => {
    //     const preloadWords = async () => {
    //     const wordsFromBackend = await getWords({ page: 1, group: 0 });
    //     setWords(wordsFromBackend);
    //     dispatchWords({ type: 'setWords', value: wordsFromBackend });
    //     };
    //     preloadWords();
    //     // eslint-disable-next-line
    // }, []);

    // console.log(words)
    // if (words.length === 0) return null

    return(
        <>
        <Card word={word} setWord={setWord} index={index} setIndex={setIndex} onCorrect={onCorrect} correct={correct} 
        setUsersWord={setUsersWord} usersWord={usersWord} indexes={indexes} setIndexes={setIndexes} autoplay={autoplay} 
        setAutoplay={setAutoplay} inProp={inProp} setInProp={setInProp} 
        transpAnswer={transpAnswer} setTranspAnswer={setTranspAnswer}/>
        </>
    )
}

export default CardsSlider;