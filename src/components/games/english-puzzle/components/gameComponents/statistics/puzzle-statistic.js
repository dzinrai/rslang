import React, { useState, useEffect, useContext } from 'react';
import { Modal } from 'antd';
import styles from './puzzle-statistic.module.css';
import { storeGame } from '../../storeGame';

function PuzzleStatistic() {
  const gameState = useContext(storeGame);
  const dispatchGame = gameState.dispatch;
  const stateGame = gameState.state;
  const [visible, setVisible] = useState(stateGame.showStats);

  useEffect(() => {
    if (stateGame.showStats) puzzleStatInfo();
    // eslint-disable-next-line
  }, [stateGame.showStats]);

  function closeStat() {
    setVisible(false);
    dispatchGame({ type: 'showStats', value: false });
  }

  function puzzleStatInfo() {
    const statsObject = { title: '', date: '' };
    setVisible(true);
    Modal.info({
      title: 'Statistic',
      visible,
      centered: true,
      content: (
        <div>
          <p className={styles.statsTitle}>{statsObject.title}</p>
          <div className={styles.statsTableContainer}>
            {[...stateGame.statistics].map( (stat, i) =>
              <div className={styles.statsGameLine} key={'stats_' + i}>
                <span>{stat.date}</span>
                <span>{`know: ${String(stat.result.know)} dont: ${String(stat.result.notKnow)}`}</span>
              </div>
            )}
          </div>
        </div>
      ),
      onOk() { closeStat(); },
      okText: 'Close',
    });
  }

  return (
    <div className={styles.container}>
    </div>
  );
}

export default PuzzleStatistic;
