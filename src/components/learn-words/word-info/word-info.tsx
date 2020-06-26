import React, { useContext, useEffect, useState } from 'react';
import styles from './word-info.module.css';
import { ReactComponent as Trans } from '../../../img/btnTranslate.svg';

interface InfoSentences {
  word: string,
  sentenceExample: string,
  sentenceMeaning: string,
  sentenceExampleTrans: string,
  sentenceMeaningTrans: string
}

function WordInfo(props: InfoSentences){
  const { word, sentenceExample, sentenceMeaning, sentenceExampleTrans, sentenceMeaningTrans } = props

  const [isTranslation, setIsTranslation] = useState(false);
  function showTranslation() {
    setIsTranslation(!isTranslation);
  }

  
    return(
      <div className={styles.infoContainer}>
        <div className={styles.sentenceExample}>
          {/* “To the south there are high mountains, covered in thick spring<span> </span>
          <span>_</span>
          <span>_</span>
          <span>_</span>
          <span>_</span>
          “ */}
          "{isTranslation ? sentenceExampleTrans : sentenceExample}"
        </div>
        <div className={styles.meaningContainer}>
          <div className={styles.sentenceMeaning}>
            {isTranslation ? sentenceMeaningTrans : sentenceMeaning}
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