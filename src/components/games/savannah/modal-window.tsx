import React from 'react';
import { Modal } from 'antd';

interface Props {
  isResultsOpen: boolean,
  toggleModal: any,
  statistic: any,
  words: any
}

export default ({
  isResultsOpen, toggleModal, statistic, words,
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
    {/* {statistic.correctWords.map((word : any) => ( */}
    {/*  <div key={`speak-it-${word.word}`}> */}
    {/*    {word.word} */}
    {/*  </div> */}
    {/* ))} */}
    <b>Unspoken:</b>
  </Modal>
);
