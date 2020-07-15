/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faImage, faVolumeUp, faFileAlt, faMusic, faCaretDown,
} from '@fortawesome/free-solid-svg-icons';
import { AudioPlayerProvider } from 'react-use-audio-player';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Game from './components/gameComponents/Game';
import { StateOfGameProvider } from './components/storeGame';
import './sass/puzzleStyles.scss';
import { Modal } from 'antd';
import { useHistory } from 'react-router-dom';

library.add(faImage, faVolumeUp, faFileAlt, faMusic, faCaretDown);

function EnglishPuzzle() {
  const hasWindow = typeof window !== 'undefined';
  const [windowWidth, ] = useState<any>(hasWindow ? window.innerWidth : null);
  const history = useHistory();
  useEffect(() => {
    if (windowWidth < 820) {
      Modal.info({
        title: 'Sorry',
        visible: true,
        centered: true,
        content: (
          <div>
            <span>Screen is not supported</span>
          </div>
        ),
        onOk() { history.push('/main-page'); },
        okText: 'Close',
      });
    }
  }, [windowWidth]);
  if (windowWidth < 820) {
    return null;
  } else return (
    <div className="appPuzzle">
      <StateOfGameProvider>
        <AudioPlayerProvider>
          <DndProvider backend={HTML5Backend}>
            <Game />
          </DndProvider>
        </AudioPlayerProvider>
      </StateOfGameProvider>
    </div>
  );
}

export default EnglishPuzzle;
