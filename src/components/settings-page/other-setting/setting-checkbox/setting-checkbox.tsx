import React from 'react';
import { Checkbox, Col } from 'antd';
import styles from './setting-checkbox.module.css';

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
  <Col span={span} className={styles.checkboxContainer}>
    <Checkbox
      value={value}
    >
      {text}
      {specialText ? <span className={styles.text}>{` "${specialText}"`}</span> : null}
      {paragraph ? <p className={styles.tooltip}>{paragraph}</p> : null}
    </Checkbox>
  </Col>
);

export default SettingCheckbox;
