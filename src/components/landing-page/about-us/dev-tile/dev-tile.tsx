import React from 'react';
import styles from './dev-tile.module.css';
import { ReactComponent as Hat } from '../../../../img/hat.svg';

interface Props {
  text: string
}

function DevTile({ text }: Props) {
  return (
    <div className={styles.container}>
      <Hat className={styles.hat} />
      <div className={styles.picture} />
      <p className={styles.text}>{text}</p>
    </div>
  );
}

export default DevTile;
