import React from 'react';
import { Switch } from 'antd';
import styles from './setting-switch.module.css';

type Props = {
  text: string;
  checked: boolean;
  changed: () => void;
}

const SettingSwitch: React.FC<{
  text: string,
  checked: boolean,
  changed: () => void;
}> = ({
  text, checked, changed,
}: Props) => (
  <div className={styles.switchContainer}>
    <span>{text}</span>
    <Switch
      defaultChecked={checked}
      onClick={() => changed()}
    />
  </div>
);

export default SettingSwitch;
