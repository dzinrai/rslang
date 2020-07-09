import React, { useState, useContext } from 'react';
import { storeWords } from '../../../context/contextWords';
import SettingSlider from './setting-slider';
import SettingButton from '../setting-button';
import style from './daily-words.module.css';

const DailyWords: React.FC = () => {
  const wordsState = useContext(storeWords);
  const dispatchWords = wordsState.dispatch;

  const [countOfDailyWords, setCountOfDailyWords] = useState(wordsState.state.countOfDailyWords);
  const [countOfDailyCards, setCountOfDailyCards] = useState(wordsState.state.countOfDailyCards);

  function onChangeWords(value: number) {
    setCountOfDailyWords(value);
    dispatchWords({ type: 'setCountOfDailyWords', value });
  }

  function onChangeCards(value: number) {
    setCountOfDailyCards(value);
    dispatchWords({ type: 'setCountOfDailyCards', value });
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
