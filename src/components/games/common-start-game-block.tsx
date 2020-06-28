import React from 'react';
import styles from './page-mini-games.module.css';
import Button from './controls/button-start/button-start';

interface Props {
    color: string;
    name: string;
    buttonText: string;
    setIsStart: any;
}

export default ({
  color, name, buttonText, setIsStart,
} : Props) => {
  const StartGameHandler = () => {
    setIsStart(true);
  };
  return (
    <>
      <Button color={color} text={buttonText} StartGameHandler={StartGameHandler} />
      <p className={styles.buttonDescription}>Push the button to start</p>
      <h3 className={styles.gameName}>{name}</h3>
    </>
  );
};
