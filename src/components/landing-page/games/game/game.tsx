import React from 'react';
import styles from './game.module.css';

interface Props {
  text: string;
  Image: any;
  isEven?: boolean;
  caption: string;
}

function Game({
  text, Image, isEven = false, caption,
}: Props) {
  return (
    <div className={styles.container}>
      <p className={styles.details}>{text}</p>
      <Image className={styles.image} />
      <p className={`${styles.caption} ${isEven ? styles.captionEven : ''}`}>{caption}</p>
    </div>
  );
}

export default Game;
