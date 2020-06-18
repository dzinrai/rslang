import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import AuthPage from './components/auth-page';
import LoginPage from './components/login-page';
import SignUpPage from './components/signup-page';

function App() {
  const [isSignUp, setIsSignUp] = useState(false);

  function isRegistred(): void {
    setIsSignUp(!isSignUp);
  }

  let routes: React.ReactNode = (
    <Switch>
      <Route path="/auth">
        <AuthPage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/signup">
        <SignUpPage isSignUp={() => isRegistred()} />
      </Route>
      <Route exact path="/" />
      <Redirect to="/" />
    </Switch>
  );

  if (isSignUp) {
    routes = (
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Switch>
    );
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/auth">Auth Page</Link>
          {routes}
        </header>
      </div>
    </Router>
  );
}

export default App;
