import React, { useContext } from 'react';
import Button from '../Button';
import GameHeadControls from './game-head/GameHeadControls';
import { storeGame } from '../storeGame';
import BottomControls from './bottom-controls/BottomControls';
import Board from './board/Board';
import Messages from './messages/Messages';
import preloadRound from '../../assets/preloadRound';
import Results from './results/Results';
import settingsStored from '../../localStorage/settings';
import bg from '../../img/100.svg';
import styles from './game-main.module.css';

const gameStyles = {
  backgroundImage: `url(${bg})`,
  backgroundSize: 'cover',
  height: '100vh',
  minHeight: '786px',
};

function Game() {
  const gameState = useContext(storeGame);
  const dispatchGame = gameState.dispatch;
  const stateGame = gameState.state;

  function handleClick(types) {
    const importStore = settingsStored.load();
    if (importStore.isLocalStoreExist) {
      preloadRound(dispatchGame, stateGame, importStore.difficulty, importStore.page);
    } else preloadRound(dispatchGame, stateGame);
    dispatchGame({ type: 'activateHint', value: importStore.hints });
    dispatchGame(types);
  }

  return (
    <div style={{ ...gameStyles }}>
      {!stateGame.isStarted && (
      <div className="puzzle__start">
        <Button
          text="Start"
          className={styles.startBtn}
          onClick={() => handleClick({ type: 'start' })}
        />
      </div>
      )}
      {stateGame.isStarted && !stateGame.isEnded
        && (
        <div className={styles.gameContainer}>
          <GameHeadControls />
          {!stateGame.isRoundFinished && <Messages />}

          {!stateGame.isShowResults && <Board />}

          {stateGame.isShowResults && <Results />}

          {!stateGame.isShowResults && <BottomControls />}
        </div>
        )}
    </div>

  );
}

export default Game;
