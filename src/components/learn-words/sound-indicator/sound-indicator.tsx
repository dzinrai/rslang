import React, { useContext, useEffect, useState } from 'react';
import styles from './sound-indicator.module.css';
import soundIndicator from '../../../img/sound-indicator.png'
import { Checkbox } from 'antd';

function onChange(e: any) {
  console.log(`checked = ${e.target.checked}`);
}

function SoundIndicator(){
  
    return (
      <div className={styles.indicatorContainer}>
        <img className={styles.soundIndicator} src={soundIndicator} alt=""/>
        <Checkbox onChange={onChange}></Checkbox>
      </div>
    )
}

export default SoundIndicator;