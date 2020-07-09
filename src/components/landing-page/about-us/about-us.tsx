import React from 'react';
import DevTile from './dev-tile/dev-tile';

import styles from './about-us.module.css';

function AboutUs() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>About Us</h2>
          <p className={styles.text}>Yes, we want to say a few words about ourselves =)</p>
        </div>
      </div>
      <div className={styles.tileContainer}>
        <DevTile text="Инженер программист" />
        <DevTile text="Инженер программист" />
        <DevTile text="Инженер программист" />
        <DevTile text="Инженер программист" />
        <DevTile text="Инженер программист" />
      </div>
    </div>
  );
}

export default AboutUs;
