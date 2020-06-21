import React from 'react';
import Welcome from './welcome/welcome';
import Adaptive from './adaptive/adaptive';
import Advantages from './advantages/advantages';
import Games from './games/games';

import styles from './landing-page.module.css';

function LandingPage() {
  return (
    <div className={styles.container}>
      <Welcome />
      <Adaptive />
      <Advantages />
      <Games />
    </div>
  );
}

export default LandingPage;
