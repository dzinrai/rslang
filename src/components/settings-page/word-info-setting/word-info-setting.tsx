import React from 'react';
import SettingButton from '../setting-button';
import SettingSwitch from './setting-switch';
import style from './word-info-setting.module.css';

type Props = {
  wordInfoSettings: any;
  clicked: () => void;
  changed: (firstArg: string) => void;
}

const WordInfoSetting: React.FC<{
  wordInfoSettings: any,
  clicked: () => void,
  changed: (firstArg: string) => void
}> = ({ wordInfoSettings, clicked, changed }: Props) => {
  const infoSettingsSwitch = {
    key: [
      'wordTranscription',
      'spellingOutSentence',
      'picture',
      'sentenceExample',
    ],
    text: [
      'Word transcription',
      'Spelling out sentence',
      'Picture association',
      'Sentence with an example of the word',
    ],
    checked: [
      wordInfoSettings.wordTranscription,
      wordInfoSettings.spellingOutSentence,
      wordInfoSettings.picture,
      wordInfoSettings.sentenceExample,
    ],
  };

  const switchButtons = infoSettingsSwitch.key.map((key, index) => (
    <SettingSwitch
      key={key}
      text={infoSettingsSwitch.text[index]}
      checked={infoSettingsSwitch.checked[index]}
      changed={() => changed(key)}
    />
  ));

  return (
    <div className={style.container}>
      <p className={style.header}>Word Info Setting</p>
      <div className={style.settingContainer}>
        {switchButtons}
        <SettingButton clicked={clicked} />
      </div>
    </div>
  );
};

export default WordInfoSetting;
