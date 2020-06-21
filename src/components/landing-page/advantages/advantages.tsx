import React from 'react';
import styles from './advantages.module.css';
import Advantage from './advantage/advantage';
import { ReactComponent as MiniGames } from '../../../img/mini-games.svg';
import { ReactComponent as ManySettings } from '../../../img/many-settings.svg';
import { ReactComponent as IntervalRepetition } from '../../../img/interval-repetition.svg';

function Advantages() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Advantages</h2>
      <div className={styles.advantagesContainer}>
        <Advantage Image={MiniGames} title="Mini Games" text="Mini-games are used for help you track progress and gamification of learning" />
        <Advantage Image={ManySettings} title="Many settings" text="You can change the appearance and details of the application according to your preferences" />
        <Advantage Image={IntervalRepetition} title="Interval repetition" text="Helps you memorize foreign words. This is a very useful learning technology." />
      </div>
    </div>
  );
}

export default Advantages;
