import React from 'react';
import { Checkbox } from 'antd';
import styles from './sound-indicator.module.css';
import soundIndicator from '../../../img/sound-indicator.png';

interface SoundIndicatorProps {
  autoplay: boolean,
  setAutoplay: any
}

function SoundIndicator({ autoplay, setAutoplay }: SoundIndicatorProps) {
  function onChange() {
    setAutoplay(!autoplay);
  }

  return (
    <div className={styles.indicatorContainer}>
      <img className={styles.soundIndicator} src={soundIndicator} alt="" />
      <Checkbox onChange={onChange} />
    </div>
  );
}

export default SoundIndicator;
