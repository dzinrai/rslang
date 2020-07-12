import React, { useState } from 'react';
import { Modal } from 'antd';
import styles from '../games-statistic/games-statistic.module.css';
import { getStatistic } from '../../../services/statistic';
import GameStatsTable from '../game-stats-table/game-stats-table';

interface GameStatsProps {
    title: string,
    image: string
}

export default ({ title, image }: GameStatsProps) => {
  const [visible, setVisible] = useState(false);

  function info(curtitle: string) {
    // request for getting stats according to title
    getStatistic().then((data: any) => {
      setVisible(true);
      Modal.info({
        title: 'Statistic',
        visible,
        centered: true,
        content: (
          <div>
            <p className={styles.statsTitle}>{curtitle}</p>
            <div className={styles.statsTableContainer}>
              <GameStatsTable data={data} title={curtitle} />
            </div>
          </div>
        ),
        onOk() { setVisible(false); },
        okText: 'Close',
      });
    });
  }

  return (
    <button onClick={() => info(title)} className={styles.gameContainer} type="button">
      <div className={styles.gameImage}>
        <img src={image} alt="" />
      </div>
      <div className={styles.gameInfo}>
        <div className={styles.gameTitle}>{title}</div>
      </div>
    </button>
  );
};
