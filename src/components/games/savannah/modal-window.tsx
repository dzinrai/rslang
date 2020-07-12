import React from 'react';
import { Modal } from 'antd';
import { useHistory } from 'react-router-dom';
import styles from './play.module.css';

interface Props {
    isResultsOpen: boolean,
    toggleModal: any,
    statistic: any,
    modalText: any
}

export default ({
  isResultsOpen, toggleModal, statistic, modalText,
}: Props) => {
  const history = useHistory();
  const goToMiniGames = () => {
    history.push('/mini-games');
  };
  return (
    <>
      <Modal
        title={modalText.title}
        visible={isResultsOpen}
        onCancel={() => toggleModal(true)}
        onOk={goToMiniGames}
        okText="Back to mini-games"
        cancelText={modalText.btn}
        okButtonProps={{ style: { borderRadius: '30px', backgroundColor: '#1194C8', border: 'none' } }}
        cancelButtonProps={{ style: { borderRadius: '30px' } }}
      >

        {console.log('stats', statistic)}
        <ul className={styles.tableHeader}>
          <li>Word:</li>
          <li>Translation:</li>
          <li>Errors:</li>
        </ul>

        {statistic.filter((word: any) => word.guessed).map((word: any) => (
          <ul className={styles.tableContainer} key={`speak-it-${word.info.id}`}>
            <li>
              {word.info.word}
            </li>
            <li>
              {word.info.wordTranslate}
            </li>
            <li>
              {word.errors}
            </li>
          </ul>
        ))}
      </Modal>
    </>
  );
};
