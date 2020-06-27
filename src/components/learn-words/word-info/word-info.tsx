import React, { useContext, useEffect, useState } from 'react';
import styles from './word-info.module.css';
import { ReactComponent as Trans } from '../../../img/btnTranslate.svg';

interface InfoSentences {
  word: string,
  textExample: string,
  textMeaning: string,
  textExampleTranslate: string,
  textMeaningTranslate: string,
  audio: string,
  audioExample: string,
  audioMeaning: string
}

const useAudio = (url: string) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

function WordInfo(props: InfoSentences){
  const { word, textExample, textMeaning, textExampleTranslate, textMeaningTranslate,
  audio, audioExample, audioMeaning } = props

  // const correctWord = word.split('').map(el => <span>{el}</span>)
  // const uncorrectWord = Array(word.length).map(el => <span>_</span>)

  const [playing, toggle] = useAudio(`https://raw.githubusercontent.com/dzinrai/rslang-data/master/${audio}`);
  console.log(audio)

  const [isTranslation, setIsTranslation] = useState(false);

  function showTranslation() {
    setIsTranslation(!isTranslation);
  }
    return(
      <div className={styles.infoContainer}>

      {/* <div>
        <button onClick={() => toggle}>{playing ? "Pause" : "Play"}</button>
      </div> */}

        <div className={styles.textExample}>
          {/* “To the south there are high mountains, covered in thick spring<span> </span>
          <span>_</span>
          <span>_</span>
          <span>_</span>
          <span>_</span>
          “ */}
          "{isTranslation ? textExampleTranslate : (word ? textExample.replace(`<b>${word}</b>`, '___') : null)}"
        </div>
        <div className={styles.meaningContainer}>
          <div className={styles.textMeaning}>
            {isTranslation ? textMeaningTranslate : (word ? textMeaning.replace(`<i>${word}</i>`, '___') : null)}
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