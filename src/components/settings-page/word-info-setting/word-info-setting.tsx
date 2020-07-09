import React from 'react';
import SettingButton from '../setting-button';
import SettingSwitch from './setting-switch';
import style from './word-info-setting.module.css';

const WordInfoSetting: React.FC = () => (
  <div className={style.container}>
    <p className={style.header}>Word Info Setting</p>
    <div className={style.settingContainer}>
      <SettingSwitch text="Word transcription" checked={false} />
      <SettingSwitch text="Spelling out sentence" checked={false} />
      <SettingSwitch text="Picture association" checked />
      <SettingSwitch text="Sentence with an example of the word" checked={false} />
      <SettingButton />
    </div>
  </div>
);

export default WordInfoSetting;
