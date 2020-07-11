import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import styles from './play.module.css';

interface Props {
    isResultsOpen: boolean,
    toggleModal: any,
    correctWords: any,
    words: any,
    URL_CONTENT: string
}

export default ({
  isResultsOpen, toggleModal, correctWords, words, URL_CONTENT,
}: Props) => {
  const [unspokenWordsList, setUnspokenWordsList] = useState();
  const [correctWordsList, setCorrectWordsList] = useState();
  const sayWord = (audio: any) => {
    const newSound = new Audio(URL_CONTENT + audio);
    newSound.play();
  };
  /* eslint-disable */
  useEffect(() => {
    const mistakes = words.filter((word: any) => !correctWords.includes(word))
    setCorrectWordsList(correctWords.map((word: any, indexWord: number) => (
      <div
        key={`id__${word.id}`}
        onClick={() => sayWord(word.audio)}
        role="presentation"
      >
        <span>
          {word.word}
          <em>{word.transcription}</em>
        </span>
        <span>{word.wordTranslate}</span>
      </div>
    )));
    setUnspokenWordsList(words.filter((word: any) => !correctWords.includes(word))
      .map((word: any, index: number) => (
        <div
          key={`id__${index}`}
          onClick={() => sayWord(word.audio)}
          role="presentation"
        >
          <span>
            {word.word}
            {' '}
            <em>{word.transcription}</em>
          </span>
          <span>{word.wordTranslate}</span>
        </div>
      )));
  }, [isResultsOpen]);
  /* eslint-enable */
  return (
    <Modal
      title="Results"
      visible={isResultsOpen}
      footer={[<button key="ok" onClick={toggleModal} type="button" className={styles.okButton}>OK</button>]}
    >
      <div className={styles.resultsBlock}>
        <b>Correct words:</b>
        <br />
        {correctWordsList}
        <b>Mistakes:</b>
        <br />
        {unspokenWordsList}
      </div>

    </Modal>
  );
};
