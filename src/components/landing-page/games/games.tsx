import React from 'react';
import Game from './game/game';
import { ReactComponent as Megaphone } from '../../../img/megaphone.svg';
import { ReactComponent as Lion } from '../../../img/lion.svg';
import { ReactComponent as Calling } from '../../../img/calling-man.svg';
import { ReactComponent as Sprinter } from '../../../img/sprinter.svg';
import { ReactComponent as Puzzle } from '../../../img/puzzle.svg';
import { ReactComponent as Surprise } from '../../../img/surprise.svg';

import styles from './games.module.css';

function Games() {
  return (
    <div className={styles.container}>
      <Game path="speakit" text="Improves speech and pronunciation" Image={Megaphone} caption="Speak IT" />
      <Game path="speakit" text="Improve a reaction when you guess words in hurry mode" Image={Lion} caption="Savannah" />
      <Game path="speakit" text="Allows you to improve listening comprehension of English" Image={Calling} caption="Audio Call" />
      <Game path="speakit" text="You need to quickly decide the correct one is the translation of the word" Image={Sprinter} caption="Sprint" />
      <Game path="speakit" text="Build a sentence from words. Effective exercise to understand the structure of sentences" Image={Puzzle} caption="English Puzzle" />
      <Game path="speakit" text="Surprise" Image={Surprise} caption="Special OwnGame" />
    </div>
  );
}

export default Games;
