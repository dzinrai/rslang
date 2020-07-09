import React from 'react';

import styles from './interval.module.css';

function Interval() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Interval system</h2>
      <p className={styles.text}>
        We use the technique of memory
        <br />
        retention, it consists in repeating the
        <br />
        memorized learning material at certain,
        <br />
        constantly increasing intervals.
      </p>
      <p className={styles.text}>
        Interval repetitions do not imply learning
        <br />
        by heart without understanding (but do
        <br />
        not rule it out), and are not opposed to
        <br />
        mnemonicity.
      </p>
      <p className={styles.text}>
        The first time you should repeat the word a
        <br />
        couple of minutes
        <br />
        then an hour later, then the next day, then
        <br />
        2 days
        <br />
        5 days
        <br />
        10 days
        <br />
        3 weeks
        <br />
        6 weeks
        <br />
        3 months
        <br />
        6 months etc...
      </p>
    </div>
  );
}

export default Interval;
