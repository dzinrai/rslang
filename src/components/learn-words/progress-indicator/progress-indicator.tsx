import React, { useContext, useEffect, useState } from 'react';
import styles from './progress-indicator.module.css';

//import { ReactComponent as RainbowLine } from '../../../img/rainbow-line.svg';


function ProgressIndicator() {
    const indWidth = 50

    return (
    <div className={styles.indicatorContainer}>
        <div className={styles.progressIndicator} style={{width: `${indWidth}vw`}}></div>
    </div>

    )
}

export default ProgressIndicator;