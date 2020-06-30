import React from 'react';
import { Checkbox, Col } from 'antd';
import style from './setting-checkbox.module.css';

type Props = {
  span: number;
  value: string;
  text: string;
  specialText: string;
  paragraph: string;
}

const SettingCheckbox: React.FC<{
  span: number,
  value: string,
  text: string,
  specialText: string,
  paragraph: string,
}> = ({
  span, value, text, specialText, paragraph,
}: Props) => (
  <Col span={span} className={style.checkboxContainer}>
    <Checkbox value={value}>
      {text}
      {specialText ? <span className={style.text}>{` "${specialText}"`}</span> : null}
      {paragraph ? <p className={style.tooltip}>{paragraph}</p> : null}
    </Checkbox>
  </Col>
);

export default SettingCheckbox;
