import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'antd';
import styles from './learn-words.module.css';
import { getWordsFromBackend } from '../../services/getWords';
import { getSettings, createSettings } from '../../services/settings';
import ProgressIndicator from './progress-indicator/progress-indicator';
import Buttons from './buttons/buttons';
import CardsSlider from './cards-slider/cards-slider';
import AudioAutoplay from './audio-autoplay/audio-autoplay';

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
    createSettings({ wordsPerDay: 20, optional: { cardsPerDay: 10 } });
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

  function handleOk(key: string): () => void | Promise<void> {
    return async function (): Promise<void> {
      setLoading(true);
      const settingsData = await getSettings();
      const cardsDayAmount = await settingsData.optional.cardsPerDay;
      let filter: string = '';
      switch (key) {
        case 'new':
          filter = JSON.stringify({
            $or: [
              { 'userWord.optional.newWord': true },
              { userWord: null },
            ],
          });
          break;
        case 'complicated':
          filter = JSON.stringify({
            $or: [
              { 'userWord.difficulty': 'hard' },
              { userWord: null },
            ],
          });
          break;
        default:
          break;
      }
      getWordsFromBackend({ filter, cardsDayAmount }) // this will be request with params.
        .then((data) => {
          setWords(data[0].paginatedResults);
        })
        .then(() => {
          setLoading(false);
          setVisible(false);
        });
    };
  }

  return (
    <div className={styles.background}>
      <Modal
        className={styles.modal}
        visible={visible}
        title="Almost everything is ready"
        centered
        footer={[
          <Button className={styles.modalButtonNew} type="primary" loading={loading} onClick={handleOk('new')}>
            Only new words
          </Button>,
          <Button className={styles.modalButtonAll} type="primary" loading={loading} onClick={handleOk('all')}>
            All words
          </Button>,
          <Button className={styles.modalButtonDifficult} type="primary" loading={loading} onClick={handleOk('complicated')}>
            Complicated words
          </Button>,
        ]}
      >
        <div>Please, choose which words you want to learn or repeat</div>
      </Modal>
      {words.length !== 0
        ? (
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
        ) : null}
    </div>
  );
}

export default LearnWords;
