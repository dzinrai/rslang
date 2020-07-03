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

// function MiniPlay(props) {
//   const [audioElx, setAudioElx] = useState(null);

//   function handleClick() {
//     audioElx.audioEl.current.play();
//   }

//   return (
//     <div>
//       <ReactAudioPlayer
//         src={props.src}
//         autoPlay={false}
//         controls={false}
//         ref={(element) => setAudioElx(element)}
//       />
//       <button
//         onClick={() => handleClick()}
//       />
//     </div>
//   );
// }
function WordInfo(props: InfoSentences){
  const { word, textExample, textMeaning, textExampleTranslate, textMeaningTranslate,
  audio, audioExample, audioMeaning, correct } = props

  const [isTranslation, setIsTranslation] = useState(false);

  function showTranslation() {
    setIsTranslation(!isTranslation);
  }
    return(
      <div className={styles.infoContainer}>

        <div className={styles.textExample}>
          "{isTranslation ? textExampleTranslate : (word ? 
            (correct ? textExample.replace(`<b>${word}</b>`, `${word}`) : textExample.replace(`<b>${word}</b>`, '___')) : null)}"
        </div>
        <div className={styles.meaningContainer}>
          <div className={styles.textMeaning}>
            {isTranslation ? textMeaningTranslate : (word ? 
            (correct ? textMeaning.replace(`<i>${word}</i>`, `${word}`) : textMeaning.replace(`<i>${word}</i>`, '___')) : null)}
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