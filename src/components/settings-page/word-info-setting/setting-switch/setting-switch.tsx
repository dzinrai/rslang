import React from 'react';
import { Switch } from 'antd';
import style from './setting-switch.module.css';

type Props = {
  text: string;
  checked: boolean;
}

const SettingSwitch: React.FC<{
  text: string,
  checked: boolean,
}> = ({ text, checked }: Props) => (
  <div className={style.switchContainer}>
    <span>{text}</span>
    <Switch defaultChecked={checked} />
  </div>
);

export default SettingSwitch;
