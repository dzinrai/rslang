import React, { useContext, useEffect, useState } from 'react';
import styles from './cards-slider.module.css';
import Card from '../card/card';
import imgSnow from '../../../img/image-snow.png';
import { storeWords } from '../../../context/contextWords';
import getWords from '../../../services/getWords';

// const TestWord = 
//   {
//     word: 'snow',
//     wordTranslate: 'Снег, снегопад',
//     transcription: '[snoʊ]',
//     image: imgSnow,
//     textExample: "To the south there are high mountains, covered in thick spring snow",
//     textMeaning: 'atmospheric water vapor frozen into ice crystals and falling in light white flakes or lying on the ground as a white layer.',
//     textExampleTranslate: 'AAAAAAAAAAAAAAAAAAAA',
//     textMeaningTranslate: 'aaaaaaaaaaaaaaaaaaaa'
//   }

function CardsSlider(){
    const wordsState = useContext(storeWords);
    const dispatchWords = wordsState.dispatch;

    const [words, setWords] = useState(Array());

    useEffect(() => {
        const preloadWords = async () => {
        const wordsFromBackend = await getWords({ page: 1, group: 0 });
        setWords(wordsFromBackend);
        dispatchWords({ type: 'setWords', value: wordsFromBackend });
        };
        preloadWords();
        // eslint-disable-next-line
    }, []);

    console.log(words)
    if (words.length === 0) return null

    return(
        // <Card word={word} wordTranslate={wordTranslate} transcription={transcription} image={image} textExample={textExample} 
        // textMeaning={textMeaning} textExampleTranslate={textExampleTranslate} textMeaningTranslate={textMeaningTranslate} />
        <Card key={words[0].id} index={0} />
    )
}

export default CardsSlider;