import React, {
  useEffect, useState, useRef,
} from 'react';
import moment from 'moment';
import ButtonBack from '../controls/button-back/button-back';
import { getStatistic, createStatistic } from '../../../services/statistic';
import { ReactComponent as CheckedCircle } from '../../../img/checked-circle.svg';
import { ReactComponent as Circle } from '../../../img/circle.svg';
import ModalWindow from './modal-window';
import Card from './card/card';
import Timer from './timer/timer';
import styles from './play.module.css';

  interface PlayProps {
      allWords: any,
      words: any
  }

export default ({ allWords, words }: PlayProps) => {
  const [playMode, setPlayMode] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [wordsIndex, setWordsIndex] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [points, setPoints] = useState(10);
  const [correctWords, setCorrectWords] = useState(0);
  const [checkedCircles, setCheckedCircles] = useState(0);
  const [isResultsOpen, setIsResultsOpen] = useState(false);
  const openedResults: any = useRef(false);
  const fullWordsList: any = useRef([]);
  const fullCorrectList: any = useRef([]);
  const URL_CONTENT = 'https://raw.githubusercontent.com/dzinrai/rslang-data/master/';

  /*eslint-disable*/
  useEffect(() => {
    if (!isActive && playMode && !openedResults.current) {
      for (let i = 0; i <= wordsIndex; i += 1) {
        fullWordsList.current.push(allWords[i]);
      }
      setIsResultsOpen(true);
      openedResults.current = true;
      const loadStats = async () => {
        const gettedStats = await getStatistic();
        console.log('getted stats', gettedStats)
        const percentCorrect = Math.round((fullCorrectList.current.length*100)/fullWordsList.current.length)
        gettedStats.optional.games.sprint.lastPlay.push(moment().format('DD/MM/YY'))
        gettedStats.optional.games.sprint.percentCorrect.push(percentCorrect)
        gettedStats.optional.games.sprint.words.push(fullWordsList.current.length)
        console.log('put stats', gettedStats)

        const newStats = async (stats: any) => await createStatistic(stats)
        newStats(gettedStats)

      };
      loadStats();  
    }
  });
  /* eslint-enable */

  return (
    <div className={styles.background}>
      {isResultsOpen
    && (
    <ModalWindow
      isResultsOpen={isResultsOpen}
      toggleModal={() => setIsResultsOpen(false)}
      correctWords={fullCorrectList.current}
      words={fullWordsList.current}
      URL_CONTENT={URL_CONTENT}
    />
    )}
      <ButtonBack />
      <div className={styles.cardContainer}>
        <Timer
          playMode={playMode}
          setPlayMode={(mode: boolean) => setPlayMode(mode)}
          isActive={isActive}
          setIsActive={(active: boolean) => setIsActive(active)}
        />
        {playMode && <div className={styles.pointsContainer}>{totalPoints}</div>}
        {playMode && (
        <div className={styles.circlesContainer}>
          {(checkedCircles % 4 === 1) || (checkedCircles % 4 === 2) || (checkedCircles % 4 === 3
          || checkedCircles >= 12) ? <CheckedCircle /> : <Circle />}
          {(checkedCircles % 4 === 2) || (checkedCircles % 4 === 3 || checkedCircles >= 12)
            ? <CheckedCircle /> : <Circle />}
          {(checkedCircles % 4 === 3 || checkedCircles >= 12) ? <CheckedCircle /> : <Circle />}
        </div>
        )}
        {playMode
        && (
        <Card
          couple={words[wordsIndex]}
          wordsIndex={wordsIndex}
          setWordsIndex={() => setWordsIndex(wordsIndex + 1)}
          isActive={isActive}
          setTotalPoints={() => setTotalPoints(totalPoints + points)}
          setCorrectWords={() => setCorrectWords(correctWords + 1)}
          points={points}
          setPoints={(newPoints: number) => setPoints(newPoints)}
          checkedCircles={checkedCircles}
          setCheckedCircles={(circles: number) => setCheckedCircles(circles)}
          allWords={allWords}
          fullCorrectList={fullCorrectList.current}
        />
        )}
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
