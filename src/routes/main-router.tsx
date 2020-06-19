import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppRouter from './app-router';
import LandingPage from '../components/landing-page/landing-page';

function MainRouter() {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route>
        <AppRouter />
      </Route>
    </Switch>
  );
}

export default MainRouter;
