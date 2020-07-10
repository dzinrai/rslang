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
    const [wordsIndex, setWordsIndex] = useState(0);
    const [totalPoints, setTotalPoints] = useState(0);
    const [points, setPoints] = useState(10)
    const [correctWords, setCorrectWords] = useState(0)
    let wordsForPlay: any = []

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

    if (words.length !== 0) wordsForPlay = createCouples(words)
    console.log('AAAAA', wordsForPlay)

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
        {playMode && <div className={styles.pointsContainer}>{totalPoints}</div>}
        {playMode && <div className={styles.circlesContainer}>
            <CheckedCircle />
            <CheckedCircle />
            <Circle />
        </div>}
        {playMode && 
        <Card 
        couple={wordsForPlay[wordsIndex]} 
        setWordsIndex={() => setWordsIndex(wordsIndex + 1)}
        isActive={isActive}
        setTotalPoints={() => setTotalPoints(totalPoints + points)}
        setCorrectWords={() => setCorrectWords(correctWords + 1)}
        />}
    </div>

    <div className={styles.correctWords}>
        {' '}
        {correctWords}
        {' '}
        <span>correct words</span>
    </div>

    </div>
  );
};
