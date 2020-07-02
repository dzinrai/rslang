import React from 'react';
import Welcome from './welcome/welcome';
import Adaptive from './adaptive/adaptive';
import Advantages from './advantages/advantages';
import Progress from './progress/progress';
import Games from './games/games';
import AboutUs from './about-us/about-us';
import Interval from './interval/interval';
import Contacts from './contacts/contacts';

import styles from './landing-page.module.css';

function LandingPage() {
  return (
    <div className={styles.container}>
      <Welcome />
      <Adaptive />
      <Advantages />
      <Progress />
      <Games />
      <AboutUs />
      <Interval />
      <Contacts />
    </div>
  );
}

export default LandingPage;
