import React from 'react';
import styles from './button-start.module.css';

interface Props {
    color: string;
    text: string;
    StartGameHandler: any;
}

export default ({ color, text, StartGameHandler }: Props) => {
  const style = {
    backgroundColor: color,
  };

  return (
    <button style={style} className={styles.button} onClick={StartGameHandler} type="button">
      {text}
    </button>
  );
};
