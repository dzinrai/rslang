import React from 'react';
import { Slider } from 'antd';
import style from './setting-slider.module.css';

type Props = {
  name: string;
  count: number;
  onChange: (firstArg: any) => void;
}

const SettingSlider: React.FC<{
  name: string,
  count: number,
  onChange: (firstArg: any) => void,
}> = ({ name, count, onChange }: Props) => (
  <>
    <div className={`${style.info} ${style.cardsInfo}`}>
      <span>{name}</span>
      <span>
        {count}
        {' '}
        words
      </span>
    </div>
    <Slider
      className={style.slider}
      min={5}
      defaultValue={10}
      max={30}
      onChange={(value) => onChange(value)}
    />
  </>
);

export default SettingSlider;
