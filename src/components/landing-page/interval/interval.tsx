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
      For this, we developed a convenient functional 
        <br />
        for interacting with the user 
        <br/>
        and for determining his own complexity of words.
        <br/>
        <br/>
In train mode after learning the word our user 
<br/>
gives mark of difficulty of the word as he decided.
<br/>
Interval  repetition based on this data
<br/>
<br/>
It's characteristic:
        <br />
      Word is complicated: the nex repeat in next day
        <br />
        Word do not cause difficulties: the next repeat in 1-2 days
        <br />
        User know this word perfectly: the interval initially 4 days
        <br/>
         and after get 2 times longer...
      </p>
    </div>
  );
}

export default Interval;
