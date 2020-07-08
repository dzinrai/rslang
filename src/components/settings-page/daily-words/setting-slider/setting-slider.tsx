import React from 'react';
import { Slider } from 'antd';
import style from './setting-slider.module.css';

type Props = {
  name: string;
  count: number;
  onChange: any;
}

const SettingSlider: React.FC<{
  name: string,
  count: number,
  onChange: any,
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
      defaultValue={20}
      max={50}
      onChange={(value) => onChange(value)}
    />
  </>
);

export default SettingSlider;
