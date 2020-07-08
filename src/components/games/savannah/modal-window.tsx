import React from 'react';
import { Modal } from 'antd';

interface Props {
  isResultsOpen: boolean,
  toggleModal: any,
  correctWords: string[],
  words: any
}

export default ({
  isResultsOpen, toggleModal, correctWords, words,
}: Props) => (
  <Modal
    title="Results"
    visible={isResultsOpen}
    onCancel={toggleModal}
    okText="New game"
    okButtonProps={{ style: { borderRadius: '30px', backgroundColor: '#1194C8', border: 'none' } }}
    cancelButtonProps={{ style: { borderRadius: '30px' } }}
  >
    <b>Correct words:</b>
    <br />
    {correctWords.map((word) => (
      <div key={`speak-it-${word}`}>
        {word}
      </div>
    ))}
    <b>Unspoken:</b>
    <br />
    {words.filter((word: any) => !correctWords.includes(word.word)).map((word: any) => (
      <div key={`speak-it-${word.word}`}>
        {word.word}
      </div>
    ))}
  </Modal>
);
