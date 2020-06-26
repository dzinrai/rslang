import React, { useContext, useEffect, useState } from 'react';
import styles from './cards-slider.module.css';
import Card from '../card/card';
import imgSnow from '../../../img/image-snow.png'

const TestWord = 
  {
    word: 'snow',
    translation: 'Снег, снегопад',
    transcription: '[snoʊ]',
    image: imgSnow,
    sentenceExample: "To the south there are high mountains, covered in thick spring snow",
    sentenceMeaning: 'atmospheric water vapor frozen into ice crystals and falling in light white flakes or lying on the ground as a white layer.',
    sentenceExampleTrans: 'AAAAAAAAAAAAAAAAAAAA',
    sentenceMeaningTrans: 'aaaaaaaaaaaaaaaaaaaa'
  }

function CardsSlider(){
    const { word, translation, transcription, image, sentenceExample, 
        sentenceMeaning, sentenceExampleTrans, sentenceMeaningTrans } = TestWord
  
    return(
        <Card word={word} translation={translation} transcription={transcription} image={image} sentenceExample={sentenceExample} 
        sentenceMeaning={sentenceMeaning} sentenceExampleTrans={sentenceExampleTrans} sentenceMeaningTrans={sentenceMeaningTrans} />
    )
}

export default CardsSlider;