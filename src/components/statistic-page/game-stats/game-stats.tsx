import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import styles from '../games-statistic/games-statistic.module.css';
import { getStatistic, createStatistic } from '../../../services/statistic'
import GameStatsTable from '../game-stats-table/game-stats-table';

interface GameStatsProps {
    title: string,
    image: string
}

export default ({ title, image }: GameStatsProps) => {
    const [visible, setVisible] = useState(false);

    function info(title: string) {
        // request for getting stats according to title
        getStatistic().then((data: any) => {
          setVisible(true);
          Modal.info({
            title: 'Statistic',
            visible,
            centered: true,
            content: (
              <div>
                <p className={styles.statsTitle}>{title}</p>
                <div className={styles.statsTableContainer}>
                  <GameStatsTable data={data} title={title}/>
                </div>
              </div>
            ),
            onOk() { setVisible(false); },
            okText: 'Close',
          });  
        })
      }
    
    return (
        <button onClick={() => info(title)} className={styles.gameContainer} type="button">
        <div className={styles.gameImage}>
          <img src={image} alt=""/>
        </div>
        <div className={styles.gameInfo}>
          <div className={styles.gameTitle}>{title}</div>
        </div>
      </button>
    )
}