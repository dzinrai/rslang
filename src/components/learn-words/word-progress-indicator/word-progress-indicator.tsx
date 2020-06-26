import React, { useContext, useEffect, useState } from 'react';
import styles from './word-progress-indicator.module.css';
import progressIndicator2 from '../../../img/progress-indicator-2.png'

function WordProgressIndicator(){
  
    return(
      <>
        <img src={progressIndicator2} width='61' height='9' alt=""/>
      </>
    )
}

export default WordProgressIndicator;