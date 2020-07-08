import React, { useState } from 'react';
import SettingSlider from './setting-slider';
import SettingButton from '../setting-button';
import style from './daily-words.module.css';

const DailyWords: React.FC = () => {
  const [countOfDailyWords, setCountOfDailyWords] = useState(10);
  const [countOfDailyCards, setCountOfDailyCards] = useState(10);

  function onChangeWords(value: number) {
    setCountOfDailyWords(value);
  }

  function onChangeCards(value: number) {
    setCountOfDailyCards(value);
  }

  return (
    <div className={style.container}>
      <p className={style.header}>Daily Learn Words</p>
      <SettingSlider name="Daily Learn Words" count={countOfDailyWords} onChange={onChangeWords} />
      <SettingSlider name="Daily Learn Cards" count={countOfDailyCards} onChange={onChangeCards} />
      <SettingButton />
    </div>
  );
};

export default DailyWords;
