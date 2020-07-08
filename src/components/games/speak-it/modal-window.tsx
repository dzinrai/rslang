import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import styles from './play.module.css';

interface Props {
    isResultsOpen: boolean,
    newGame: any,
    toggleModal: any,
    correctWords: string[],
    words: any,
    URL_CONTENT: string
}

export default ({
  isResultsOpen, newGame, toggleModal, correctWords, words, URL_CONTENT,
}: Props) => {
  const [unspokenWordsList, setUnspokenWordsList] = useState();
  const [correctWordsList, setCorrectWordsList] = useState();
  const sayWord = (audio: any) => {
    const newSound = new Audio(URL_CONTENT + audio);
    newSound.play();
  };
  useEffect(() => {
    setCorrectWordsList(correctWords.map((indexWord) => (
      <div
        key={`id__${indexWord}`}
        onClick={() => sayWord(words[indexWord].audio)}
        role="presentation"
      >
        <span>
          {words[indexWord].word}
          <em>{words[indexWord].transcription}</em>
        </span>
        <span>{words[indexWord].wordTranslate}</span>
      </div>
    )));
    setUnspokenWordsList(words.filter((word: any, index: any) => !correctWords.includes(index))
      .map((word: any) => (
        <div
          key={`id__${word}`}
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

  return (
    <Modal
      title="Results"
      visible={isResultsOpen}
      onOk={newGame}
      onCancel={toggleModal}
      okText="New game"
      okButtonProps={{ style: { borderRadius: '30px', backgroundColor: '#1194C8', border: 'none' } }}
      cancelButtonProps={{ style: { borderRadius: '30px' } }}
    >
      <div className={styles.resultsBlock}>
        <b>Correct words:</b>
        <br />
        {correctWordsList}
        <b>Unspoken:</b>
        <br />
        {unspokenWordsList}
      </div>

    </Modal>
  );
};
