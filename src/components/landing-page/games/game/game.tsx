import React from 'react';
import { Link } from 'react-router-dom';
import styles from './game.module.css';

interface Props {
  text: string;
  Image: any;
  isEven?: boolean;
  caption: string;
  path: string
}

function Game({
  text, Image, isEven = false, caption, path,
}: Props) {
  return (
    <Link to={`/mini-games/${path}`} className={styles.container}>
      <p className={styles.details}>{text}</p>
      <Image className={styles.image} />
      <p className={`${styles.caption} ${isEven ? styles.captionEven : ''}`}>{caption}</p>
    </Link>
  );
}

export default Game;
