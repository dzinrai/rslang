import React from 'react';
import { Checkbox, Row } from 'antd';
import SettingCheckbox from './setting-checkbox';
import style from './other-setting.module.css';

const OtherSetting: React.FC = () => {
  function onChange(checkedValues: any) {
    console.log('checked = ', checkedValues);
  }

  return (
    <div className={style.container}>
      <p className={style.header}>Other Setting</p>
      <Checkbox.Group className={style.settingContainer} onChange={onChange}>
        <Row>
          <SettingCheckbox span={12} value="A" text="Pronounce the word in English after typing" specialText="" paragraph="" />
          <SettingCheckbox span={12} value="B" text="Translate sentences for word descriptions" specialText="" paragraph="" />
          <SettingCheckbox span={12} value="C" text="Display button" specialText="Show answer" paragraph="" />
          <SettingCheckbox span={12} value="D" text="Display button" specialText="Delete word" paragraph="" />
          <SettingCheckbox span={12} value="E" text="Display button" specialText="Move to difficult" paragraph="" />
          <SettingCheckbox span={12} value="F" text="Display button" specialText="Hard, easy, normal" paragraph="It appears every time after you check the word" />
        </Row>
      </Checkbox.Group>
    </div>
  );
};

export default OtherSetting;
