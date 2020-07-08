import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
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
  const history = useHistory();
  const landingPath = useLocation();
  const HandleClick = () => {
    if (landingPath.pathname !== '/') { history.push(`/mini-games/${path}`); }
  };
  return (
    <div className={styles.container} onClick={HandleClick}>
      <p className={styles.details}>{text}</p>
      <Image className={styles.image} />
      <p className={`${styles.caption} ${isEven ? styles.captionEven : ''}`}>{caption}</p>
    </div>
  );
}

export default Game;
