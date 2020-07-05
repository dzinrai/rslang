import React, { useContext, useEffect, useState } from 'react';
import styles from './word-info.module.css';
import { ReactComponent as Trans } from '../../../img/btnTranslate.svg';
import ReactAudioPlayer from 'react-audio-player';

interface InfoSentences {
  word: string,
  textExample: string,
  textMeaning: string,
  textExampleTranslate: string,
  textMeaningTranslate: string,
  audio: string,
  audioExample: string,
  audioMeaning: string,
  correct: boolean
}

function WordInfo(props: InfoSentences){
  const { word, textExample, textMeaning, textExampleTranslate, textMeaningTranslate,
  audio, audioExample, audioMeaning, correct } = props

  const [isTranslation, setIsTranslation] = useState(false);

  function showTranslation() {
    setIsTranslation(!isTranslation);
  }

  function defineWord(sentence: string) {
    const firstIndex = sentence.indexOf('<') + 3
    const lastIndex = (sentence.lastIndexOf('>') - 3)
    return sentence.slice(firstIndex, lastIndex)
  }

  function hiddenWord(sentence: string, tag: string) {
    const word = defineWord(sentence)
    return sentence.replace(`<${tag}>${word}</${tag}>`, '____')
  }

  function showedWord(sentence: string, tag: string) {
    const word = defineWord(sentence)
    return sentence.replace(`<${tag}>${word}</${tag}>`, `${word}`)
  }

    return(
      <div className={styles.infoContainer}>

        <div className={styles.textExample}>
          "{isTranslation ? textExampleTranslate : (word ? 
            (correct ? showedWord(textExample, 'b') : hiddenWord(textExample, 'b')) : null)}"
        </div>
        <div className={styles.meaningContainer}>
          <div className={styles.textMeaning}>
            {isTranslation ? textMeaningTranslate : (word ? 
            (correct ? showedWord(textMeaning, 'i') : hiddenWord(textMeaning, 'i')) : null)}
          </div>
          <button
            className={styles.switchShowBtn}
            type="button"
            onClick={() => showTranslation()}
          >
            <Trans />
          </button>
        </div>
      </div>
    )
}

export default WordInfo;