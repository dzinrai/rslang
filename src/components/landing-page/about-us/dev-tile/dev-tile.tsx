import React from 'react';
import styles from './dev-tile.module.css';
import { ReactComponent as Hat } from '../../../../img/hat.svg';

interface Props {
  text: string,
  picture: any,
  gh: string,
}

function DevTile({ text, picture, gh }: Props) {
  return (
    <div className={styles.container}>
      <Hat className={styles.hat} />
      <div className={styles.fon}>
        <img className={styles.picture} src={picture} alt="" />
        <a href={gh}>
          {' '}
          <p className={styles.text}>{text}</p>
        </a>
      </div>
    </div>
  );
}

export default DevTile;
