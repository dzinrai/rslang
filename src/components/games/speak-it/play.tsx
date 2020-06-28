import React, { useEffect, useState, useRef } from 'react';
import ButtonBack from '../controls/button-back/button-back';
import styles from './play.module.css';
import Modal from './modal-window';

declare const window: any;
export default () => {
  const words = [
    { id: 1, word: 'adventure', transcription: '[ədvéntʃər]' },
    { id: 2, word: 'capital', transcription: '[ədvéntʃər]' },
    { id: 3, word: 'approach', transcription: '[ədvéntʃər]' },
    { id: 4, word: 'chemical', transcription: '[ədvéntʃər]' },
    { id: 5, word: 'laboratory', transcription: '[ədvéntʃər]' },
    { id: 6, word: 'mood', transcription: '[ədvéntʃər]' },
    { id: 7, word: 'evil', transcription: '[ədvéntʃər]' },
    { id: 8, word: 'carefully', transcription: '[ədvéntʃər]' },
  ];

  const wordRef = useRef<any>([]);

  const [isSpeak, setIsSpeak] = useState(false);
  const [sayWord, setSayWord] = useState('');
  const [correctWords, setCorrectWords] = useState<any>([]);
  const [isResultsOpen, setIsResultsOpen] = useState(false);
  const styleWave = `${styles.waveContainer} ${isSpeak && styles.animate}`;
  // eslint-disable-next-line new-cap
  const recognition = new window.webkitSpeechRecognition();
  let transcriptArray = [];
  let transcript = '';

  const speechResult = (event: any) => {
    transcriptArray = Array.from(event.results).map((result: any) => result[0])
      .map((result) => result.transcript);
    transcript = transcriptArray.join().toLowerCase();
    setSayWord(transcript);
    wordRef.current.forEach((item: any) => {
      if ((item && item.dataset.word === transcript) && !item.classList.contains('disable')) {
        item.classList.add('disable');
        const newArray = correctWords;
        newArray.push(transcript);
        setCorrectWords(newArray);
      }
    });
  };

  const startListen = () => {
    recognition.start();
    recognition.addEventListener('result', speechResult);
    recognition.addEventListener('soundstart', () => {
      setIsSpeak(true);
    });
    recognition.addEventListener('end', () => {
      setIsSpeak(false);
    });
  };

  useEffect(() => {
    startListen();
    wordRef.current = new Array(words.length);
    recognition.interimResults = true;
    recognition.addEventListener('end', recognition.start);
    return () => {
      recognition.removeEventListener('end', recognition.start);
      recognition.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleModal = () => {
    setIsResultsOpen(!isResultsOpen);
  };

  const newGame = () => {
    // todo
  };

  return (
    <>
      <ButtonBack />
      <div className={styles.mainContainer}>
        <div className={styleWave}>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className={styles.speakBlock}>
          {sayWord}
        </div>
        <div className={styles.wordsContainer}>
          {words.map((word, index: any) => (
            <div
              key={`speak-it-${word.word}`}
              className={styles.wordElement}
              ref={(el) => { wordRef.current[index] = el; }}
              data-word={word.word}
            >
              <span className={styles.wordTitle}>{word.word}</span>
              <p className={styles.wordTranscription}>{word.transcription}</p>
            </div>
          ))}
        </div>
        <div className={styles.footerButtons}>
          <div className={styles.correctWords}>
            {correctWords.length}
            <span>correct words</span>
          </div>
          <button type="button" onClick={toggleModal} className={styles.btnResults}>Results</button>
        </div>
      </div>

      <Modal
        isResultsOpen={isResultsOpen}
        newGame={newGame}
        toggleModal={toggleModal}
        correctWords={correctWords}
        words={words}
      />

    </>
  );
};
