import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'antd';
import moment from 'moment';
import styles from './learn-words.module.css';
import { getWordsFromBackend } from '../../services/getWords';
import { preloadWords } from '../../services/create-user-word';
import { getSettings, createSettings, UserSettings } from '../../services/settings';
import { createStatistic } from '../../services/statistic';
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

  /* eslint-disable */

  useEffect(() => {
    preloadWords({
      page: 4, group: 5, wordsPerExampleSentenceLTE: 10, wordsPerPage: 40,
    })
    createSettings({
      wordsPerDay: 10, optional: {
        cardsPerDay: 50,
        wordTranscription: true,
        spellingOutSentence: false,
        picture: true,
        sentenceExample: true,
        translateDescription: true,
        showResultButton: true,
        moveToDifficult: true,
        difficultyButtons: true,

      }
    });
    createStatistic({
      learnedWords: 0,
      optional: {
        common: {
          wordsToday: 0,
          newWordsToday: 0,
          dayProgress: 0,
          lastWord: {},
          weekDay: moment().format('dddd'),
        },
        games: {
          speakIt: {
            lastPlay: '',
            words: 0,
            percentCorrect: 0,
          },
          savannah: {
            lastPlay: '',
            words: 0,
            percentCorrect: 0,
          },
          audioCall: {
            lastPlay: '',
            words: 0,
            percentCorrect: 0,
          },
          sprint: {
            lastPlay: '',
            words: 0,
            percentCorrect: 0,
          },
          puzzle: {
            lastPlay: '',
            words: 0,
            percentCorrect: 0,
          },
          ownGame: {
            lastPlay: '',
            words: 0,
            percentCorrect: 0,
          },
        }
      }

    })
  }, []);

  /* eslint-enable */
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
      const settings: UserSettings = {
        wordsPerDay: settingsData.wordsPerDa,
        optional: {
          cardsPerDay: settingsData.optional.cardsPerDay,
          wordTranscription: settingsData.optional.wordTranscription,
          spellingOutSentence: settingsData.optional.spellingOutSentence,
          picture: settingsData.optional.picture,
          sentenceExample: settingsData.optional.sentenceExample,
          translateDescription: settingsData.optional.translateDescription,
          showResultButton: settingsData.optional.showResultButton,
          moveToDifficult: settingsData.optional.moveToDifficult,
          difficultyButtons: settingsData.optional.difficultyButtons,
        },
      };
      let filter = '';
      switch (key) {
        case 'new':
          filter = JSON.stringify(
            { 'userWord.optional.newWord': true },
          );
          break;
        case 'repeating':
          filter = JSON.stringify({
            $or: [{
              $and: [{ 'userWord.optional.nextView': moment().format('DD/MM/YY') },
                { 'userWord.optional.newWord': false },
              ],
            },
            { 'userWord.optional.errorInGame': true },
            ],
          });
          break;
        default:
          filter = JSON.stringify({
            $or: [{
              $and: [{ 'userWord.optional.nextView': moment().format('DD/MM/YY') },
                { 'userWord.optional.newWord': false },
              ],
            },
            { 'userWord.optional.newWord': true },
            ],
          });
          break;
      }
      getWordsFromBackend({ filter, settings }, settings.optional.cardsPerDay)
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
          <Button className={styles.modalButtonDifficult} type="primary" loading={loading} onClick={handleOk('repeating')}>
            Words to repeat
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
