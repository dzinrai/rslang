import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './button-back.module.css';

export default () => {
  const history = useHistory();
  const EndGameHandler = () => {
    history.push('/mini-games');
  };
  return (
    <button type="button" className={styles.button} onClick={EndGameHandler}>
      Back to mini Games
    </button>
  );
};
