import React, { useEffect, useState } from 'react';
import styles from './learn-words.module.css';
import { getWordsFromBackend } from '../../services/getWords';
// import { getCardsAmount } from '../../services/settings';
import ProgressIndicator from './progress-indicator/progress-indicator';
import Buttons from './buttons/buttons';
import CardsSlider from './cards-slider/cards-slider';
import AudioAutoplay from './audio-autoplay/audio-autoplay';
import { Modal, Button } from 'antd';

function LearnWords() {
  const [words, setWords] = useState([]);
  const [word, setWord] = useState('');
  const [correct, setCorrect] = useState(false);
  const [usersWord, setUsersWord] = useState('');
  const [indexes, setIndexes] = useState([]);
  const [index, setIndex] = useState(0);
  const [audioWord, setAudioWord] = useState(null);
  const [audioExample, setAudioExample] = useState(null);
  const [audioMeaning, setAudioMeaning] = useState(null);
  const [autoplay, setAutoplay] = useState(false);
  const [inProp, setInProp] = useState(true);
  const [transpAnswer, setTranspAnswer] = useState(false);

  const [visible, setVisible] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setVisible(true);
    getWordsFromBackend()
      .then((data) => {
        setWords(data[0].paginatedResults);
      });
  }, []);

  const newWord = (word1: any) => setWord(word1);
  const correctCard = (isCorrect: boolean) => setCorrect(isCorrect);
  const newUsersWord = (word1: string) => setUsersWord(word1);
  const newIndex = () => setIndex(index + 1);
  const newAudioWord = (audio: any) => setAudioWord(audio);
  const newAudioExample = (audio: any) => setAudioExample(audio);
  const newAudioMeaning = (audio: any) => setAudioMeaning(audio);
  const controlAutoplay = (isAutoplay: boolean) => setAutoplay(isAutoplay);
  const newInProp = (isInProp: boolean) => setInProp(isInProp);
  const newTranspAnswer = (isTranspAnswer: boolean) => setTranspAnswer(isTranspAnswer);


  // function handleOkFactory(key: string): () => void | Promise<void> {
  //   setLoading(true);
  //   return async function (): Promise<void> {
  //     const settingsData = await getCardsAmount();
  //     // const cardsDayAmount = await settingsData.optional.cardsPerDay;
  //     const filter = key === 'new' ? {
  //       "$or": [
  //         { "userWord.optional.newWord": true },
  //         { "userWord.optional.newWord": false }
  //       ]
  //     } : (key === 'complicated' ? {
  //       "$or": [
  //         { "userWord.difficulty": "hard" },
  //         { "userWord.difficulty": "normal" }
  //       ]
  //     } : '');
  //     getWordsFromBackend() //this will be request with params.
  //       .then((data) => {
  //         setWords(data[0].paginatedResults);
  //       })
  //       .then(()=>{
  //         setLoading(false);
  //         setVisible(false)
  //       })
  //   }
  // }

  function handleCancel() {
    setVisible(false)
  };

  function handleOk() {
    setLoading(true);
      setTimeout(() => {
      setLoading(false);
      setVisible(false)
    }, 2000);
};

  if (words.length === 0) return null;

  return (
    <div className={styles.background}>
      <Modal className={styles.modal}
        visible={visible}
        title="Almost everything is ready"
        centered
        onCancel={handleCancel}
        footer={[
        <Button className={styles.modalButtonNew} type="primary" loading={loading} onClick={handleOk}>
            Only new words
            </Button>,
          <Button className={styles.modalButtonAll} type="primary" loading={loading} onClick={handleOk}>
            All words
            </Button>,
          <Button className={styles.modalButtonDifficult} type="primary" loading={loading} onClick={handleOk}>
            Complicated words
           </Button>,
        ]}
      >
      <div>Please, choose which words you want to learn or repeat</div>
      </Modal>
      <div className={styles.cardContainer}>
        <ProgressIndicator />
        <CardsSlider
          words={words}
          word={word}
          setWord={newWord}
          index={index}
          setIndex={newIndex}
          onCorrect={correctCard}
          correct={correct}
          setUsersWord={newUsersWord}
          usersWord={usersWord}
          indexes={indexes}
          setIndexes={setIndexes}
          setAudioWord={newAudioWord}
          setAudioExample={newAudioExample}
          setAudioMeaning={newAudioMeaning}
          autoplay={autoplay}
          setAutoplay={controlAutoplay}
          inProp={inProp}
          setInProp={newInProp}
          transpAnswer={transpAnswer}
          setTranspAnswer={newTranspAnswer}
        />
        {(autoplay && correct) && (
          <AudioAutoplay
            audioWord={audioWord}
            audioExample={audioExample}
            audioMeaning={audioMeaning}
          />
        )}
        <Buttons
          word={word}
          onCorrect={correctCard}
          setUsersWord={setUsersWord}
          usersWord={usersWord}
          correct={correct}
          setIndexes={setIndexes}
          setIndex={newIndex}
          audioWord={audioWord}
          audioExample={audioExample}
          audioMeaning={audioMeaning}
          inProp={inProp}
          setInProp={newInProp}
          transpAnswer={transpAnswer}
          setTranspAnswer={newTranspAnswer}
        />
      </div>
    </div>
  );
}

export default LearnWords;
