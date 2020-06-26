import React, { useContext, useEffect, useState } from 'react';
import styles from './word-info.module.css';
import { ReactComponent as Trans } from '../../../img/btnTranslate.svg';

interface InfoSentences {
  word: string,
  textExample: string,
  textMeaning: string,
  textExampleTranslate: string,
  textMeaningTranslate: string
}

function WordInfo(props: InfoSentences){
  const { word, textExample, textMeaning, textExampleTranslate, textMeaningTranslate } = props

  const [isTranslation, setIsTranslation] = useState(false);
  function showTranslation() {
    setIsTranslation(!isTranslation);
  }

  
    return(
      <div className={styles.infoContainer}>
        <div className={styles.textExample}>
          {/* “To the south there are high mountains, covered in thick spring<span> </span>
          <span>_</span>
          <span>_</span>
          <span>_</span>
          <span>_</span>
          “ */}
          "{isTranslation ? textExampleTranslate : textExample}"
        </div>
        <div className={styles.meaningContainer}>
          <div className={styles.textMeaning}>
            {isTranslation ? textMeaningTranslate : textMeaning}
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