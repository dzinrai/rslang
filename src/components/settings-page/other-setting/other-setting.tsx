import React from 'react';
import { Checkbox, Row } from 'antd';
import SettingCheckbox from './setting-checkbox';
import styles from './other-setting.module.css';

type PropsType = {
  otherSettings: any;
  changed: any;
};

const OtherSetting: React.FC<{
  changed: any,
  otherSettings: any
}> = ({ changed, otherSettings }: PropsType) => {
  const defaultValue: any = Object.keys(otherSettings)
    .filter((el: string) => otherSettings[el] === true);

  return (
    <div className={styles.container}>
      <p className={styles.header}>Other Setting</p>
      <Checkbox.Group
        className={styles.settingContainer}
        onChange={(checkedValues) => changed(checkedValues)}
        defaultValue={defaultValue}
      >
        <Row>
          <SettingCheckbox
            span={12}
            value="translateDescription"
            text="Translate sentences for word descriptions"
            specialText=""
            paragraph=""
          />
          <SettingCheckbox
            span={12}
            value="showResultButton"
            text="Display button"
            specialText="Show answer"
            paragraph=""
          />
          <SettingCheckbox
            span={12}
            value="deleteWord"
            text="Display button"
            specialText="Delete word"
            paragraph=""
          />
          <SettingCheckbox
            span={12}
            value="moveToDifficult"
            text="Display button"
            specialText="Move to difficult"
            paragraph=""
          />
          <SettingCheckbox
            span={12}
            value="difficultyButtons"
            text="Display button"
            specialText="Hard, easy, normal"
            paragraph="It appears every time after you check the word"
          />
        </Row>
      </Checkbox.Group>
    </div>
  );
};

export default OtherSetting;
