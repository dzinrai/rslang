import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import AuthPage from './components/auth-page/auth-page';
import LoginPage from './components/login-page/login-page';
import SignUpPage from './components/signup-page/signup-page';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
            <Link to="/auth">Auth Page</Link>
            <Switch>
              <Route exact path="/auth">
                <AuthPage />
              </Route>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Route exact path="/signup">
                <SignUpPage />
              </Route>
              <Route exact path="/">
              </Route>
            </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
