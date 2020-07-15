import React, { useState } from 'react';
import VideoGuide from '../../video-guide';
import { ReactComponent as Logo } from '../../../img/logo.svg';
import { ReactComponent as Arrow } from '../../../img/arrow-right.svg';

import styles from './contacts.module.css';

function Contacts() {
  const [visible, setVisible] = useState(false);

  function clickArrowButton(): void {
    const value = visible;

    setVisible(!value);
  }

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <p className={`${styles.text} ${styles.textBold}`}>And that&#39;s the way the news goes!</p>
        <p className={styles.text}>You can contact us here</p>
      </div>
      <div className={styles.main}>
        <div className={styles.logoContainer}>
          <Logo className={styles.logoIcon} />
          <span className={styles.logo}>RS LANG</span>
        </div>
        <div className={styles.contactsContainer}>
          <p className={styles.contact}>
            <span className={styles.caption}>Telegram:</span>
            +375(29) 333-33-33
          </p>
          <p className={styles.contact}>
            <span className={styles.caption}>Discord:</span>
            discord.com/channels
          </p>
          <p className={styles.contact}>
            <span className={styles.caption}>Github:</span>
            <a href="https://github.com/MetaVII/rslang">metavii/rslang</a>
          </p>
        </div>
        <VideoGuide visible={visible} onOk={clickArrowButton} />
        <button className={styles.button} type="button" onClick={clickArrowButton}>
          <Arrow />
        </button>
      </div>
    </div>
  );
}

export default Contacts;
