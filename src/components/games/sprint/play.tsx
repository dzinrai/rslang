import React, {
    useEffect, useState, useRef, useContext,
  } from 'react';
  import ButtonBack from '../controls/button-back/button-back';
  import { ReactComponent as CheckedCircle} from '../../../img/checked-circle.svg'
  import { ReactComponent as Circle } from '../../../img/circle.svg'
  import createCouples from './create-couples'
  import Card from './card/card'
  import Timer from './timer/timer'
  import styles from './play.module.css';
  import { storeWords } from '../../../context/contextWords';
  import { getWords } from '../../../services/getWords';
  
export default () => {
    const wordsState = useContext(storeWords);
    const dispatchWords = wordsState.dispatch;
    const [words, setWords] = useState<any>([]);
    const [pageLevel, setPageLevel] = useState<number>(1);
    const [playMode, setPlayMode] = useState(false);
    const [isActive, setIsActive] = useState(true);

    // eslint-disable-next-line no-shadow
    useEffect(() => {
        const preloadWords = async (pageLevel : number) => {
            const wordsFromBackend = await getWords({
              page: pageLevel, group: 0, wordsPerExampleSentenceLTE: 10, wordsPerPage: 60,
            });
            setWords(wordsFromBackend);
            dispatchWords({ type: 'setWords', value: wordsFromBackend });
        }; 
        preloadWords(0)     
    },[])
    console.log(words)
    if (words.length !== 0) createCouples(words)

  return (
    <div className={styles.background}>
    <ButtonBack />
    <div className={styles.cardContainer}>
        <Timer 
            playMode={playMode} 
            setPlayMode={(mode: boolean) => setPlayMode(mode)} 
            isActive={isActive} 
            setIsActive={(active: boolean) => setIsActive(active)} 
        />
        {playMode && <div className={styles.circlesContainer}>
            <CheckedCircle />
            <CheckedCircle />
            <Circle />
        </div>}
        {playMode && <Card />}
    </div>

    <div className={styles.correctWords}>
        {' '}
        {7}
        <span>correct words</span>
    </div>

    </div>
  );
};
