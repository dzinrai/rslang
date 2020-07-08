import React from 'react';
import WordExampleProgressIndicator from './word-example-progress-indicator';
import MoveDeleteWordExample from './move-delete-word-example';
import SentenceWithInputExample from './sentence-with-input-example';
import SoundIndicatorExample from './sound-indicator-example';
import WordInfoExample from './word-info-example';
import styles from './word-card-example.module.css';
import imageSnow from '../../../img/image-snow.png';

const WordCardExample: React.FC = () => (
  <div className={styles.container}>
    <p className={styles.header}>Word Card Example</p>
    <div className={styles.sentenceImg}>
      <div className={styles.sentensewordTranslate}>
        <div className={styles.mainSentenceContainer}>
          <WordExampleProgressIndicator />
          <SentenceWithInputExample />
          <SoundIndicatorExample />
        </div>
        <div className={styles.wordTranscriptionContainer}>
          <span className={styles.wordTranslate}>
            Снег, снегопад
          </span>
          <span className={styles.transcription}>
            [snoʊ]
          </span>
        </div>
      </div>
      <div className={styles.imageMoveDelete}>
        <img style={{ borderRadius: '5px' }} src={imageSnow} width="195" height="150" alt="snow" />
        <MoveDeleteWordExample />
      </div>
    </div>
    <WordInfoExample />
  </div>
);

export default WordCardExample;
