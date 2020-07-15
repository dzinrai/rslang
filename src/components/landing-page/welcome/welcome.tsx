import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './welcome.module.css';
import { ReactComponent as Logo } from '../../../img/logo.svg';

function Welcome() {
  const history = useHistory();
  const userToken = sessionStorage.getItem('userToken');

  function redirect(): void {
    if (userToken) {
      history.push('/main-page');
    } else {
      history.push('/auth');
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>
        <Logo className={styles.logoIcon} />
        <span className={styles.logo}>RS LANG</span>
      </h1>
      <h2 className={styles.title}>
        App for learning English
      </h2>
      <p className={styles.text}>with interval repetition and mini-games</p>
      <button
        type="button"
        className={styles.button}
        onClick={redirect}
      >
        Get Started
      </button>
    </div>
  );
}

export default Welcome;
