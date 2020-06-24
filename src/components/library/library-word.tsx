import React, { useContext, useState } from 'react';
import { storeWords } from '../../context/contextWords';
import styles from './library-word.module.css';
import WordRate from './word-rate';
import { ReactComponent as Ear } from '../../img/ear.svg';
import { ReactComponent as Trash } from '../../img/trash.svg';
import { ReactComponent as Arrow } from '../../img/arrowDown.svg';
import WordMoreInfo from './word-more-info';

interface LibraryWordProps {
  index: number;
}

function LibraryWord({ index }: LibraryWordProps) {
  const wordsState = useContext(storeWords);
  const stateWords = wordsState.state;
  const word = stateWords.words ? stateWords.words[index] : null;
  const [isFullInfo, setIsFullInfo] = useState(false);

  if (!word || !word.word) return null;
  function moreInfo() {
    setIsFullInfo(!isFullInfo);
  }

  return (
    <div className={styles.libraryLine}>
      <div className={styles.wordBlock}>
        <span className={styles.wordAndTranslation}>
          <p className={styles.word}>{`${word.word.slice(0, 1).toUpperCase()}${word.word.slice(1)}`}</p>
          <p className={styles.translation}>{word.wordTranslate}</p>
        </span>
        <div className={styles.transcriptAndRate}>
          <span className={styles.transcript}>
            <Ear />
            {`[${word.word}]`}
          </span>
          <WordRate rate={word.group + 1} wordId={word.id} />
        </div>
      </div>
      <img className={styles.wordImage} src={`https://raw.githubusercontent.com/dzinrai/rslang-data/master/${word.image}`} alt={word.word} />
      <div className={styles.wordInfo}>
        <button className={styles.systemInfoBtn} type="button">Interval system Info</button>
        <div className={styles.repeatDate}>
          <span>Last time repeat:</span>
          <b className={styles.date}>25/08/20</b>
        </div>
        <div className={styles.nextDate}>
          <span>Next time:</span>
          <b className={styles.date}>in 10 minutes</b>
        </div>
        <div className={styles.repeatCount}>
          <span>
            Repeated&nbsp;
            <b className={styles.count}>6</b>
            &nbsp;
            times
          </span>
        </div>
      </div>
      <button className={styles.trashBtn} type="button">
        <Trash />
      </button>

      <button
        className={`${styles.arrowBtn} ${isFullInfo ? styles.close : ''}`}
        type="button"
        onClick={() => moreInfo()}
      >
        <Arrow />
      </button>

      {isFullInfo
        && (
          <div className={`${styles.moreInfo} ${isFullInfo ? styles.opened : ''}`}>
            <WordMoreInfo
              textExample={word.textExample}
              textExampleTranslate={word.textExampleTranslate}
              textMeaning={word.textMeaning}
              textMeaningTranslate={word.textMeaningTranslate}
            />
          </div>
        )}
    </div>
  );
}

export default LibraryWord;
