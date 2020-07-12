/* eslint-disable no-underscore-dangle */
/* eslint no-param-reassign: "error" */
import React, { useContext } from 'react';
import { ReactComponent as Trash } from '../../img/trash.svg';
import styles from './library-word.module.css';
import { toggleWordActivity } from '../../services/makeWordDifficult';
import { storeWords } from '../../context/contextWords';

interface DeleteRestoreBtnProps {
  isDeletedPage: boolean;
  word: any;
}

function DeleteRestoreBtn({ isDeletedPage, word }: DeleteRestoreBtnProps) {
  const wordsState = useContext(storeWords);
  const words = wordsState.state.allWords;
  const dispatchWords = wordsState.dispatch;

  const handleClick = () => {
    toggleWordActivity(word._id, word.userWord.optional, isDeletedPage);
    console.log(words);
    words.forEach((wordsInContext: any, i: number) => {
      if (wordsInContext._id === word._id) {
        const newWords = [...words];
        newWords[i].userWord.optional.active = isDeletedPage;
        dispatchWords({ type: 'setAllWords', value: newWords });
      }
    });
  };

  return (
    <button
      className={!isDeletedPage ? styles.trashBtn : styles.restoreBtn}
      type="button"
      onClick={handleClick}
    >
      {!isDeletedPage ? <Trash /> : '+'}
    </button>
  );
}

export default DeleteRestoreBtn;
