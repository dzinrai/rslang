import React from 'react';
import WordExampleProgressIndicator from './word-example-progress-indicator';
import MoveDeleteWordExample from './move-delete-word-example';
import SentenceWithInputExample from './sentence-with-input-example';
import SoundIndicatorExample from './sound-indicator-example';
import WordInfoExample from './word-info-example';
import styles from './word-card-example.module.css';
import imageSnow from '../../../img/image-snow.png';

type PropsType = {
  wordInfoSettings: any;
  otherSettings: any;
}

const WordCardExample: React.FC<{
  wordInfoSettings: any,
  otherSettings: any
}> = ({ wordInfoSettings, otherSettings }: PropsType) => {
  const {
    wordTranscription,
    spellingOutSentence,
    picture,
    sentenceExample,
  } = wordInfoSettings;
  const {
    translateDescription,
    moveToDifficult,
    deleteWord,
  } = otherSettings;

  let transcription: any = null;

  if (wordTranscription) {
    transcription = (
      <span className={styles.transcription}>
        [snoʊ]
      </span>
    );
  }

  let image: any = null;

  if (picture) {
    image = (
      <div className={styles.imageMoveDelete}>
        <img style={{ borderRadius: '5px' }} src={imageSnow} width="195" height="150" alt="snow" />
        <MoveDeleteWordExample
          moveToDifficult={moveToDifficult}
          deleteWord={deleteWord}
        />
      </div>
    );
  }

  let sentence: any = null;

  if (sentenceExample) {
    sentence = (
      <WordInfoExample
        translateDescription={translateDescription}
      />
    );
  }

  let indicator: any = <div className={styles.emptyBlock}> </div>;

  if (spellingOutSentence) {
    indicator = <SoundIndicatorExample />;
  }

  return (
    <div className={styles.container}>
      <p className={styles.header}>Word Card Example</p>
      <div className={styles.sentenceImg}>
        <div className={styles.sentenceTranslation}>
          <div className={styles.mainSentenceContainer}>
            <WordExampleProgressIndicator />
            <SentenceWithInputExample />
            {indicator}
          </div>
          <div className={styles.wordTranscriptionContainer}>
            <span className={styles.wordTranslate}>
              Снег, снегопад
            </span>
            {transcription}
          </div>
        </div>
        {image}
      </div>
      {sentence}
    </div>
  );
};

export default WordCardExample;
