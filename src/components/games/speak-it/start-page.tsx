import React, { useState } from 'react';
import styles from '../page-mini-games.module.css';
import CommonStartGameBlock from '../common-start-game-block';
import Megaphone from '../../../img/megaphone.svg';
import Play from './play';

export default () => {
  const [isStart, setIsStart] = useState<boolean>(false);
  const blueColor = '#1194C8';
  return (
    <>
      {!isStart
        ? (
          <div className={styles.gamesWrapper}>
            <img className={styles.imageMegaphone} src={Megaphone} alt="The man hold a megaphone" />
            <CommonStartGameBlock setIsStart={setIsStart} color={blueColor} buttonText="start" name="Speak IT" />
          </div>
        )
        : <Play />}
    </>
  );
};
