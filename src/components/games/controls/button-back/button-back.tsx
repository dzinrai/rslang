import React from 'react';
import { useHistory } from 'react-router';
import styles from './button-back.module.css';

export default () => {
  const history = useHistory();
  const EndGameHandler = () => {
    history.push('/mini-games');
  };
  return (
    <button className={styles.button} onClick={EndGameHandler}>
      Back to mini Games
    </button>
  );
};
