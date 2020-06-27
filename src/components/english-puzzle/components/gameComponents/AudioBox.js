import React, { useEffect, useState, useContext } from 'react';
import { useAudioPlayer } from 'react-use-audio-player';
import Button from '../Button';
import { storeGame } from '../storeGame';
import styles from './audio-box.module.css';

function AudioBox(props) {
  const gameState = useContext(storeGame);
  const stateGame = gameState.state;
  const [sourceSrc, setSourceSrc] = useState(props.src);
  const [afterPlay, setAfterPlay] = useState(false);
  const {
    ready, loading, playing, load, play, stop,
  } = useAudioPlayer({
    src: sourceSrc,
    format: 'mp3',
    autoplay: false,
  });

  function handleClick() {
    if (ready) {
      stop();
      play();
    }
  }
  useEffect(() => {
    if (!loading && !ready) {
      load(sourceSrc);
    }
  }, [sourceSrc, loading, load, ready]);
  useEffect(() => {
    setSourceSrc(props.src);
    if (sourceSrc !== props.src) setAfterPlay(false);
  }, [props.src, sourceSrc]);
  useEffect(() => {
    if (stateGame.hints.autoAudio && stateGame.readyToContinue && ready && !playing
            && stateGame.sentenceHasMistake === false && !afterPlay) {
      stop();
      play();
      setAfterPlay(true);
    }
  }, [afterPlay, play, playing, ready, stateGame.hints.autoAudio, stateGame.readyToContinue, stateGame.sentenceHasMistake, stop]);

  return (

    <div className={`${styles.audioPlay} ${props.hideBtn ? 'hidden' : ''}`}>
      <Button
        icon="volume-up"
        className={`${styles.audioBoxBtn} ${loading ? styles.loading : ''} ${playing ? styles.playing : ''}`}
        onClick={() => handleClick()}
      />
    </div>

  );
}

export default AudioBox;
