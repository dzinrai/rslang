import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './welcome.module.css';
import { ReactComponent as Logo } from '../../../img/logo.svg';
import { ReactComponent as Gradient } from '../../../img/gradient.svg';
import { ReactComponent as WelcomeImage } from '../../../img/layer-2.svg';

function Welcome() {
  const history = useHistory();

  return (
    <div className={styles.container}>
      <h1>
        <Logo />
        <span className={styles.logo}>RS LANG</span>
      </h1>
      <h2 className={styles.title}>
        App for learning English
      </h2>
      <p className={styles.text}>with interval repetition and mini-games</p>
      <button
        type="button"
        className={styles.button}
        onClick={() => {
          history.push('/auth');
        }}
      >
        Get Started
      </button>
      <Gradient className={styles.gradient} />
      <WelcomeImage className={styles.image} />
    </div>
  );
}

export default Welcome;
