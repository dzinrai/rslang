import React from 'react';
import { Slider } from 'antd';
import styles from './setting-slider.module.css';

type Props = {
  name: string;
  count: number;
  changed: (firstArg: any) => void;
}

const SettingSlider: React.FC<{
  name: string,
  count: number,
  changed: (firstArg: any) => void,
}> = ({ name, count, changed }: Props) => (
  <>
    <div className={`${styles.info} ${styles.cardsInfo}`}>
      <span>{name}</span>
      <span>
        {count}
        {' '}
        words
      </span>
    </div>
    <Slider
      className={styles.slider}
      min={5}
      defaultValue={count}
      max={30}
      onChange={(value) => changed(value)}
    />
  </>
);

export default SettingSlider;
