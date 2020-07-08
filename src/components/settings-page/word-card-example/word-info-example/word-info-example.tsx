import React from 'react';
import styles from './word-info-example.module.css';
import { ReactComponent as Trans } from '../../../../img/btnTranslate.svg';

const WordInfoExample: React.FC = () => (
  <div className={styles.infoContainer}>
    <div className={styles.textExample}>
      “To the south there are high mountains, covered in thick spring snow“
    </div>
    <div className={styles.meaningContainer}>
      <div className={styles.textMeaning}>
        atmospheric water vapor frozen into ice crystals and falling in
        light white flakes or lying on the ground as a white layer.
      </div>
      <button
        className={styles.switchShowBtn}
        type="button"
      >
        <Trans />
      </button>
    </div>
  </div>
);

export default WordInfoExample;
