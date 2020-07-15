import React from 'react';
import DevTile from './dev-tile/dev-tile';
import styles from './about-us.module.css';
import bear from '../../../img/we/bear.png';
import hippo from '../../../img/we/hippo.png';
import monkey from '../../../img/we/monkey.png';
import pandaBear from '../../../img/we/panda-bear.png';
import tiger from '../../../img/we/tiger.png';
import zebra from '../../../img/we/zebra.png';

function AboutUs() {
  // eslint-disable-next-line
  const animals = [{ picture: bear, name: 'Maria', gh: 'https://github.com/MaryiaBond' }, { picture: hippo, name: 'Nastassia', gh: 'https://github.com/nastassiamilashevskaya' }, { picture: monkey, name: 'Alexander', gh: 'https://github.com/doher' }, { picture: pandaBear, name: 'Anzhelika', gh: 'https://github.com/Jelika' }, { picture: tiger, name: 'Alexander', gh: 'https://github.com/MetaVII' }, { picture: zebra, name: 'Alex', gh: 'https://github.com/dzinrai' }];
  // eslint-disable-next-line
  const listItems = animals.map((el, index) => <DevTile key={index} picture={el.picture} text={el.name} gh={el.gh} />);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>About Us</h2>
          <p className={styles.text}>Yes, we want to say a few words about ourselves =)</p>
        </div>
      </div>
      <div className={styles.tileContainer}>
        {listItems}
      </div>
    </div>
  );
}

export default AboutUs;
