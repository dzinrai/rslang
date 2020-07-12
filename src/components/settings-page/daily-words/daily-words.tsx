import React, { useState } from 'react';
import SettingSlider from './setting-slider';
import styles from './daily-words.module.css';

type Props = {
  dailyWords: number;
  dailyCards: number;
  changedDailyWords: any;
}

const DailyWords: React.FC<{
  dailyWords: number,
  dailyCards: number,
  changedDailyWords: any,
}> = ({ dailyWords, dailyCards, changedDailyWords }: Props) => {
  const dailyObj = {
    dailyWords,
    dailyCards,
  };
  const [countOfDailyWords, setCountOfDailyWords] = useState(dailyWords);
  const [countOfDailyCards, setCountOfDailyCards] = useState(dailyCards);

  function changeDailyWords(value: number): void {
    dailyObj.dailyWords = value;

    setCountOfDailyWords(value);
    changedDailyWords(dailyObj);
  }

  function changeDailyCards(value: number): void {
    dailyObj.dailyCards = value;

    setCountOfDailyCards(value);
    changedDailyWords(dailyObj);
  }

  return (
    <div className={styles.container}>
      <p className={styles.header}>Daily Learn Words</p>
      <SettingSlider
        name="Daily Learn Words"
        count={countOfDailyWords}
        changed={(value: number) => changeDailyWords(value)}
      />
      <SettingSlider
        name="Daily Learn Cards"
        count={countOfDailyCards}
        changed={(value: number) => changeDailyCards(value)}
      />
    </div>
  );
};

export default DailyWords;
