import React, { useState, useEffect } from 'react';
import DailyWords from './daily-words';
import WordInfoSetting from './word-info-setting';
import OtherSetting from './other-setting';
import TodayProgress from '../today-progress';
import WordCardExample from './word-card-example';
import { getSettings, createSettings } from '../../services/settings';
import styles from './settings-page.module.css';

const SettingsPage: React.FC<any> = () => {
  const [dailyWords, setDailyWords] = useState<any>(null);
  const [dailyCards, setDailyCards] = useState<any>(null);
  const [wordInfoSettings, setWordInfoSettings] = useState<any>(null);
  const [otherSettings, setOtherSettings] = useState<any>(null);

  let settings = null;

  useEffect(() => {
    getSettings().then((data) => {
      setDailyWords(data.wordsPerDay);
      setDailyCards(data.optional.cardsPerDay);
      setWordInfoSettings({
        wordTranscription: data.optional.wordTranscription,
        spellingOutSentence: data.optional.spellingOutSentence,
        picture: data.optional.picture,
        sentenceExample: data.optional.sentenceExample,
      });
      setOtherSettings({
        translateDescription: data.optional.translateDescription,
        showResultButton: data.optional.showResultButton,
        moveToDifficult: data.optional.moveToDifficult,
        deleteWord: data.optional.deleteWord,
        difficultyButtons: data.optional.difficultyButtons,
      });
    });
    // eslint-disable-next-line
  }, []);

  function saveSettings(): void {
    const newUserSetting = {
      wordsPerDay: dailyWords,
      optional: {
        cardsPerDay: dailyCards,
        ...wordInfoSettings,
        ...otherSettings,
      },
    };

    createSettings(newUserSetting);
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

    switch (id) {
      case 'wordTranscription':
        newWordInfoSettings.wordTranscription = !newWordInfoSettings.wordTranscription;
        break;

      case 'spellingOutSentence':
        newWordInfoSettings.spellingOutSentence = !newWordInfoSettings.spellingOutSentence;
        break;

      case 'picture':
        newWordInfoSettings.picture = !newWordInfoSettings.picture;
        break;

      case 'sentenceExample':
        newWordInfoSettings.sentenceExample = !newWordInfoSettings.sentenceExample;
        break;

      default:
        break;
    }

    setWordInfoSettings(newWordInfoSettings);
  }

  if (dailyWords && wordInfoSettings && wordInfoSettings && otherSettings) {
    settings = (
      <>
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
      </>
    );
  }

  return (
    <div className={styles.container}>
      {settings}
    </div>
  );
};

export default SettingsPage;
