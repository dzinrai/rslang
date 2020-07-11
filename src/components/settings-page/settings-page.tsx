import React, { useState } from 'react';
import DailyWords from './daily-words';
import WordInfoSetting from './word-info-setting';
import OtherSetting from './other-setting';
import TodayProgress from '../today-progress';
import WordCardExample from './word-card-example';
import styles from './settings-page.module.css';

const SettingsPage: React.FC = () => {
  const wordInfoSettingsObj = {
    wordTranscription: true,
    spellingOutSentence: true,
    picture: true,
    sentenceExample: true,
  };
  const otherSettingsObj = {
    translateDescription: true,
    showResultButton: true,
    moveToDifficult: true,
    deleteWord: true,
    difficultyButtons: true,
  };
  const defaultSettings = {
    wordsPerDay: 10,
    optional: {
      cardsPerDay: 10,
      wordTranscription: true,
      spellingOutSentence: true,
      picture: true,
      sentenceExample: true,
      translateDescription: true,
      showResultButton: true,
      moveToDifficult: true,
      deleteWord: true,
      difficultyButtons: true,
    },
  };
  const [userSettings, setUserSettings] = useState(defaultSettings);
  const [dailyWords, setDailyWords] = useState(12);
  const [dailyCards, setDailyCards] = useState(10);
  const [wordInfoSettings, setWordInfoSettings] = useState(wordInfoSettingsObj);
  const [otherSettings, setOtherSettings] = useState(otherSettingsObj);

  function saveSettings(): void {
    const newUserSetting = {
      wordsPerDay: dailyWords,
      optional: {
        cardsPerDay: dailyCards,
        ...wordInfoSettings,
        ...otherSettings,
      },
    };

    console.log(userSettings);
    console.log(newUserSetting);

    setUserSettings(newUserSetting);
  }

  function getDailyValues(dailyObj: any) {
    setDailyWords(dailyObj.dailyWords);
    setDailyCards(dailyObj.dailyCards);
  }

  function getOtherSettings(otherObj: any) {
    const newOtherSettings = { ...otherSettings };

    newOtherSettings.translateDescription = false;
    newOtherSettings.showResultButton = false;
    newOtherSettings.moveToDifficult = false;
    newOtherSettings.deleteWord = false;
    newOtherSettings.difficultyButtons = false;

    otherObj.forEach((el: string) => {
      console.log('el:', el);

      switch (el) {
        case 'translateDescription':
          newOtherSettings.translateDescription = true;
          break;
        case 'showResultButton':
          newOtherSettings.showResultButton = true;
          break;
        case 'moveToDifficult':
          newOtherSettings.moveToDifficult = true;
          break;
        case 'deleteWord':
          newOtherSettings.deleteWord = true;
          break;
        case 'difficultyButtons':
          newOtherSettings.difficultyButtons = true;
          break;

        default:
          break;
      }

      setOtherSettings(newOtherSettings);
    });
  }

  function getWordInfoSettings(id: string): void {
    const newWordInfoSettings = { ...wordInfoSettings };
    const {
      wordTranscription, spellingOutSentence, picture, sentenceExample,
    } = newWordInfoSettings;

    switch (id) {
      case 'wordTranscription':
        newWordInfoSettings.wordTranscription = !wordTranscription;
        break;

      case 'spellingOutSentence':
        newWordInfoSettings.spellingOutSentence = !spellingOutSentence;
        break;

      case 'picture':
        newWordInfoSettings.picture = !picture;
        break;

      case 'sentenceExample':
        newWordInfoSettings.sentenceExample = !sentenceExample;
        break;

      default:
        break;
    }

    setWordInfoSettings(newWordInfoSettings);
  }

  return (
    <div className={styles.container}>
      <div className={styles.item1}>
        <DailyWords
          dailyWords={dailyWords}
          dailyCards={dailyCards}
          changedDailyWords={getDailyValues}
        />
      </div>
      <div className={styles.item2}>
        <TodayProgress />
      </div>
      <div className={styles.item3}>
        <OtherSetting
          otherSettings={otherSettings}
          changed={getOtherSettings}
        />
      </div>
      <div className={styles.item4}>
        <WordInfoSetting
          wordInfoSettings={wordInfoSettings}
          clicked={saveSettings}
          changed={getWordInfoSettings}
        />
      </div>
      <div className={styles.item5}>
        <WordCardExample />
      </div>
    </div>
  );
};

export default SettingsPage;
