import React from 'react';
import {
  Switch, Route, Redirect, useLocation,
} from 'react-router-dom';
import Header from '../components/header/header';

import AuthPage from '../components/auth-page';
import LoginPage from '../components/login-page';
import SignUpPage from '../components/signup-page';
import MainPage from '../components/main-page/main-page';
import LearnWords from '../components/learn-words/learn-words';
import Library from '../components/library/library';
import EnglishPuzzle from '../components/english-puzzle/english-puzzle';

function AppRouter() {
  const landingPath = useLocation();
  return (
    <div className="App">
      {landingPath.pathname !== '/' ? <Header /> : null}
      <main className="app-main">
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
          <Route path="/learn-words">
            <LearnWords />
          </Route>
          <Route path="/library">
            <Library />
          </Route>
          <Route path="/mini-games/puzzle">
            <EnglishPuzzle />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </div>
  );
}

export default AppRouter;
