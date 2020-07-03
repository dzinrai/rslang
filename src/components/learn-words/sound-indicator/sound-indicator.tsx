import React, { useContext, useEffect, useState } from 'react';
import styles from './sound-indicator.module.css';
import soundIndicator from '../../../img/sound-indicator.png'
import { Checkbox } from 'antd';

interface SoundIndicatorProps {
  autoplay: boolean,
  setAutoplay: any
}

function SoundIndicator({ autoplay, setAutoplay }: SoundIndicatorProps){
  function onChange(e: any) {
    setAutoplay(!autoplay)
  } 
  
    return (
      <div className={styles.indicatorContainer}>
        <img className={styles.soundIndicator} src={soundIndicator} alt=""/>
        <Checkbox onChange={onChange}></Checkbox>
      </div>
    )
}

export default SoundIndicator;