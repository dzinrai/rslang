import React, { useEffect, useState } from 'react';
import styles from './play.module.css';

interface Props {
    wordRef: any,
    words: any,
    correctWords: any
    setCorrectWords: any,
    URL_CONTENT: string
}
declare const window: any;
export default ({
  wordRef, correctWords, setCorrectWords, URL_CONTENT,
} : Props) => {
  const [currentImage, setCurrentImage] = useState();
  const [currentTranslate, setCurrentTranslate] = useState('');
  const [isSpeak, setIsSpeak] = useState(false);
  const [sayWord, setSayWord] = useState('');
  const styleWave = `${styles.waveContainer} ${isSpeak && styles.animate}`;
  /* eslint-disable */
  useEffect(() => {
    // eslint-disable-next-line new-cap
    const recognition = new window.webkitSpeechRecognition();
    recognition.interimResults = true;
    recognition.addEventListener('end', recognition.start);
    let transcriptArray = [];
    let transcript = '';
    const speechResult = (event: any) => {
      // eslint-disable-next-line max-len
      transcriptArray = Array.from(event.results).map((result: any) => result[0]).map((result) => result.transcript);
      transcript = transcriptArray.join().toLowerCase();
      setSayWord(transcript);
      // eslint-disable-next-line array-callback-return
      wordRef.current.map((item: any) => {
        if ((item && item.dataset.word === transcript) && !item.classList.contains('disable')) {
          item.classList.add('disable');
          const newArray = correctWords;
          newArray.push(+item.dataset.id);
          setCurrentImage(item.dataset.img);
          setCurrentTranslate(item.dataset.translate);
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
    startListen();
    return () => {
      recognition.removeEventListener('end', recognition.start);
      recognition.stop();
    };
  }, []);
  /* eslint-enable */
  return (
    <>
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
      <div className={styles.imageStick}>
        {currentImage ? <img src={URL_CONTENT + currentImage} alt="" /> : ''}
        <span>{currentTranslate}</span>
      </div>
      <div className={styles.correctWords}>
        {' '}
        {correctWords.length}
        {' '}
        <span>correct words</span>
      </div>
    </>
  );
};
