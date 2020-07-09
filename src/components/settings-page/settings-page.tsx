import React from 'react';
import DailyWords from './daily-words';
import WordInfoSetting from './word-info-setting';
import OtherSetting from './other-setting';
import TodayProgress from '../today-progress';
import WordCardExample from './word-card-example';
import style from './settings-page.module.css';

const SettingsPage: React.FC = () => (
  <div className={style.container}>
    <div className={style.item1}>
      <DailyWords />
    </div>
    <div className={style.item2}>
      <TodayProgress />
    </div>
    <div className={style.item3}>
      <OtherSetting />
    </div>
    <div className={style.item4}>
      <WordInfoSetting />
    </div>
    <div className={style.item5}>
      <WordCardExample />
    </div>
  </div>
);

export default SettingsPage;
