import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import Header from './../components/header/header'

import AuthPage from '../components/auth-page';
import LoginPage from '../components/login-page';
import SignUpPage from '../components/signup-page';
import MainPage from '../components/main-page/main-page';

function AppRouter() {
  const landingPath = useLocation()
  return <div className="App">
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
        <Redirect to="/" />
      </Switch>
    </main>
  </div>
}

export default AppRouter;
