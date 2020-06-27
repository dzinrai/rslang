import React, { useContext, useEffect, useState } from 'react';
import styles from './progress-indicator.module.css';

//import { ReactComponent as RainbowLine } from '../../../img/rainbow-line.svg';


function ProgressIndicator() {

    return (
    <div className={styles.indicatorContainer}><div className={styles.progressIndicator}>
    </div>
    </div>

    )
}

export default ProgressIndicator;