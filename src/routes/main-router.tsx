import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../components/landing-page/landing-page';

function MainRouter() {
  return <Switch>
    <Route exact path="/" >
      <LandingPage />
    </Route>
  </Switch >
}

export default MainRouter;