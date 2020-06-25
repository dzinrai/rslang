import React, { useContext, useEffect, useState } from 'react';
import styles from './card.module.css';
import WordProgressIndicator from '../word-progress-indicator/word-progress-indicator';
import SentenceWithInput from '../sentence-with-input/sentence-with-input';
import SoundIndicator from '../sound-indicator/sound-indicator';
import WordInfo from '../word-info/word-info';
import MoveDeleteWord from '../move-delete-word/move-delete-word'

function Card(){
  
    return(
        <>
        <div>
       <WordProgressIndicator/>
       <SentenceWithInput/>
       <SoundIndicator/>
       <div>
    <span>
        {/* {word} */}
        </span>
        <span>
          {/* transcription*/}
            </span> 
       </div>
       </div>
       <img></img>
       <WordInfo/>
       <MoveDeleteWord/>
       </>
    )
}

export default Card;