import React from 'react';
import {
  Switch, Route, Redirect,
} from 'react-router-dom';
import Header from '../components/header/header';
import AuthPage from '../components/auth-page';
import LoginPage from '../components/login-page';
import SignUpPage from '../components/signup-page';
import MainPage from '../components/main-page/main-page';
import SettingsPage from '../components/settings-page';
import LearnWords from '../components/learn-words/learn-words';
import Library from '../components/library/library';
import GamesPage from '../components/games/page-mini-games';
import SpeakIt from '../components/games/speak-it/start-page';
import Sprint from '../components/games/sprint/start-page';
import Savannah from '../components/games/savannah/start-page';
import MemoryGame from '../components/games/memory-game/start-page';
import EnglishPuzzle from '../components/games/english-puzzle/english-puzzle';
import StatisticPage from '../components/statistic-page/statistic-page';

function AppRouter() {
  const userToken = sessionStorage.getItem('userId');

  let routes: any = (
    <Switch>
      <Route path="/auth">
        <AuthPage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/signup">
        <SignUpPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );

  if (userToken) {
    routes = (
      <Switch>
        <Route path="/auth">
          <AuthPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/signup">
          <SignUpPage />
        </Route>
        <Route path="/main-page">
          <MainPage />
        </Route>
        <Route path="/settings">
          <SettingsPage />
        </Route>
        <Route path="/learn-words">
          <LearnWords />
        </Route>
        <Route path="/library">
          <Library />
        </Route>
        <Route path="/statistic">
          <StatisticPage />
        </Route>
        <Route path="/mini-games" exact>
          <GamesPage />
        </Route>
        <Route path="/mini-games/speakit">
          <SpeakIt />
        </Route>
        <Route path="/mini-games/savannah">
          <Savannah />
        </Route>
        <Route path="/mini-games/puzzle">
          <EnglishPuzzle />
        </Route>
        <Route path="/mini-games/sprint">
          <Sprint />
        </Route>
        <Route path="/mini-games/memory-game">
          <MemoryGame />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <div className="App">
      <Header />
      <main className="app-main">
        <Switch>
          <Route path="/auth">
            <AuthPage />
          </Route>
          <Route path="/error-page">
            <AuthPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/signup">
            <SignUpPage />
          </Route>
          <Route path="/main-page">
            <MainPage />
          </Route>
          <Route path="/settings">
            <SettingsPage />
          </Route>
          <Route path="/learn-words">
            <LearnWords />
          </Route>
          <Route path="/library">
            <Library />
          </Route>
          <Route path="/statistic">
            <StatisticPage />
          </Route>
          <Route path="/mini-games" exact>
            <GamesPage />
          </Route>
          <Route path="/mini-games/speakit">
            <SpeakIt />
          </Route>
          <Route path="/mini-games/savannah">
            <Savannah />
          </Route>
          <Route path="/mini-games/puzzle">
            <EnglishPuzzle />
          </Route>
          <Route path="/mini-games/sprint">
            <Sprint />
          </Route>
          <Route path="/mini-games/memory-game">
            <MemoryGame />
          </Route>
          <Redirect to="/" />
        </Switch>
        {routes}
      </main>
    </div>
  );
}

export default AppRouter;
