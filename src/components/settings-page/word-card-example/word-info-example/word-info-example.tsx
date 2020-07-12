import React from 'react';
import styles from './word-info-example.module.css';
import { ReactComponent as Trans } from '../../../../img/btnTranslate.svg';

type PropsType = {
  translateDescription: any;
}

const WordInfoExample: React.FC<{
  translateDescription: any,
}> = ({ translateDescription }: PropsType) => {
  let translateButton: any = null;

  if (translateDescription) {
    translateButton = (
      <button
        className={styles.switchShowBtn}
        type="button"
      >
        <Trans />
      </button>
    );
  }

  return (
    <div className={styles.infoContainer}>
      <div className={styles.textExample}>
        “To the south there are high mountains, covered in thick spring snow“
      </div>
      <div className={styles.meaningContainer}>
        <div className={styles.textMeaning}>
          atmospheric water vapor frozen into ice crystals and falling in
          light white flakes or lying on the ground as a white layer.
        </div>
        {translateButton}
      </div>
    </div>
  );
};

export default WordInfoExample;
