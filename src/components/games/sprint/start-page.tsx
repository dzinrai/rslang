import React, { useState } from 'react';
import styles from '../page-mini-games.module.css';
import CommonStartGameBlock from '../common-start-game-block';
import Sprinter from '../../../img/sprinter.svg';
import Play from './play';

export default () => {
  const [isStart, setIsStart] = useState<boolean>(false);
  const pinkColor = '#FF645F';
  return (
    <>
      {!isStart
        ? (
          <div className={styles.gamesWrapper}>
            <img className={styles.imageSprinter} src={Sprinter} alt="The running man" />
            <CommonStartGameBlock setIsStart={setIsStart} color={pinkColor} buttonText="start" name="Sprint" />
          </div>
        )
        : <Play />}
    </>
  );
};
