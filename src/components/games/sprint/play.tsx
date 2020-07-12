import React, {
  useEffect, useState, useRef,
} from 'react';
import moment from 'moment';
import ButtonBack from '../controls/button-back/button-back';
import { getStatistic, createStatistic } from '../../../services/statistic'
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

  const intStats = {
    learnedWords: 0,
    optional: {
      common:{
      wordsToday: 0,
      newWordsToday: 0,
      lastWord: '',
      weekDay:  '',
      dayProgress: 0,// wordsToday/wordsTodayPlan
      //(get this one from setting's back)*100% and put it in progress rainbow line style
     // this may be week days progress
      },
      games:{
        speakIt:{
          lastPlay: [],
          words: [],
          percentCorrect: []// correct/words*100%
        },
        savannah:{
          lastPlay: [],
          words: [],
          percentCorrect: []// correct/words*100%
        },
        audioCall:{
          lastPlay: [],
          words: [],
          percentCorrect: []// correct/words*100%
        },
        sprint:{
          lastPlay: [],
          words: [],
          percentCorrect: []// correct/words*100%
        },
        puzzle:{
          lastPlay: [],
          words: [],
          percentCorrect: []// correct/words*100%
        },
        ownGame:{
          lastPlay: [],
          words: [],
          percentCorrect: []// correct/words*100%
       },
      }
    }
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
  const [stats, setStats] = useState<any>({})
  const openedResults: any = useRef(false);
  const fullWordsList: any = useRef([]);
  const fullCorrectList: any = useRef([]);
  // const stats: any = useRef([])
  const URL_CONTENT = 'https://raw.githubusercontent.com/dzinrai/rslang-data/master/';

  /*eslint-disable*/
  useEffect(() => {
    if (!isActive && playMode && !openedResults.current) {
      for (let i = 0; i <= wordsIndex; i += 1) {
        fullWordsList.current.push(allWords[i]);
      }
      setIsResultsOpen(true);
      openedResults.current = true;

      // const newStats = async (stats: any) => await createStatistic(stats)
      // newStats(intStats)

      const loadStats = async () => {
        const gettedStats = await getStatistic();
        console.log('getted stats', gettedStats)
        // setStats(gettedStats)
        const percentCorrect = Math.round((fullCorrectList.current.length*100)/fullWordsList.current.length)
        gettedStats.optional.games.sprint.lastPlay.push(moment().format('DD/MM/YY'))
        gettedStats.optional.games.sprint.percentCorrect.push(percentCorrect)
        gettedStats.optional.games.sprint.words.push(fullWordsList.current.length)
        console.log('put stats', gettedStats)

        const newStats = async (stats: any) => await createStatistic(stats)
        newStats(gettedStats)

        // const newGettedStats = await getStatistic();
        // console.log('new getted stats', newGettedStats)
      };
      loadStats();  
      console.log('stats', stats)

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
