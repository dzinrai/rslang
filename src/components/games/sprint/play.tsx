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

  interface PlayProps {
      words: any
  }
  
export default ({ words }: PlayProps) => {
    const [playMode, setPlayMode] = useState(false);
    const [isActive, setIsActive] = useState(true);
    const [wordsIndex, setWordsIndex] = useState(0);
    const [totalPoints, setTotalPoints] = useState(0);
    const [points, setPoints] = useState(10)
    const [correctWords, setCorrectWords] = useState(0)
    const [checkedCircles, setCheckedCircles] = useState(0)
    let wordsForPlay: any = []

    if (words.length !== 0) wordsForPlay = createCouples(words)

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
            {(checkedCircles % 4 === 1) || (checkedCircles % 4 === 2) || (checkedCircles % 4 === 3) ? <CheckedCircle /> : <Circle />}
            {(checkedCircles % 4 === 2) || (checkedCircles % 4 === 3) ? <CheckedCircle /> : <Circle />}
            {(checkedCircles % 4 === 3) ? <CheckedCircle /> : <Circle />}
        </div>}
        {playMode && 
        <Card 
        couple={wordsForPlay[wordsIndex]} 
        wordsIndex={wordsIndex}
        setWordsIndex={() => setWordsIndex(wordsIndex + 1)}
        isActive={isActive}
        setTotalPoints={() => setTotalPoints(totalPoints + points)}
        setCorrectWords={() => setCorrectWords(correctWords + 1)}
        points={points}
        setPoints={(newPoints: number) => setPoints(newPoints)}
        checkedCircles={checkedCircles}
        setCheckedCircles={(circles: number) => setCheckedCircles(circles)}
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
