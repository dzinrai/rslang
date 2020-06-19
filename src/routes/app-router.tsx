import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import AuthPage from '../components/auth-page';
import LoginPage from '../components/login-page';
import SignUpPage from '../components/signup-page';

function AppRouter() {
  return <div className="App">
    <header className="App-header" > </header>
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
        <Redirect to="/" />
      </Switch>
    </main>
  </div>

}

export default AppRouter;