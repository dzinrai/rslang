import React from 'react';
import styles from './advantage.module.css';

interface Props {
  Image: any;
  title: string;
  text: string;
}

export function Advantage({ Image, title, text }: Props) {
  return (
    <div className={styles.container}>
      <Image className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  );
}

export default Advantage;
