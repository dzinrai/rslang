import React from 'react';
import { Checkbox } from 'antd';
import styles from './sound-indicator-example.module.css';
import soundIndicator from '../../../../img/sound-indicator.png';

const SoundIndicatorExample: React.FC = () => (
  <div className={styles.indicatorContainer}>
    <img className={styles.soundIndicator} src={soundIndicator} alt="sound indicator" />
    <Checkbox checked />
  </div>
);

export default SoundIndicatorExample;
