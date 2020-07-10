import React, { useState } from 'react';
import styles from '../page-mini-games.module.css';
import CommonStartGameBlock from '../common-start-game-block';
import Lion from '../../../img/lion.svg';
import Play from './play';
import Koza from '../../../img/gamesImages/savannah_koza.svg';
import Jiraffa from '../../../img/gamesImages/savannah_jiraffa.svg';
import Zebra from '../../../img/gamesImages/savannah_zebra.svg';

export default () => {
  const [isStart, setIsStart] = useState<boolean>(false);
  const orangeColor = '#FF645F';
  return (
    <>
      {!isStart
        ? (
          <div className={styles.gamesWrapper}>
            <img className={styles.imageLion} src={Lion} alt="The man hold a megaphone" />
            <CommonStartGameBlock setIsStart={setIsStart} color={orangeColor} buttonText="Gr-r-r-r" name="Savannah" />
          </div>
        )
        : <Play />}
      <div className={styles.animalsContainer}>
        <img className={styles.koza} src={Koza} alt="" />
        <img className={styles.zebra} src={Zebra} alt="" />
        <img className={styles.jiraffa} src={Jiraffa} alt="" />
      </div>
    </>
  );
};
