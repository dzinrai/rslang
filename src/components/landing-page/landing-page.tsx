import React from 'react';
import styles from './landing-page.module.css';
import { ReactComponent as Logo } from '../../img/logo.svg';

function LandingPage() {
  return <div className={styles.welcomeContainer}>
    <h1>
      <Logo />
      <span className={styles.logo}>RS LANG</span>
    </h1>
    <p className={styles.welcomeTitle}>
      App for learning English
    </p>
    <p className={styles.welcomeText}>with interval repetition and mini-games</p>
    <button className={styles.welcomeButton}>Get Started</button>
  </div>
}

export default LandingPage;