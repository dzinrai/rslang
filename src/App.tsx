import React from 'react';
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
  const routes: any = (
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
      <Route exact path="/" />
      <Redirect to="/" />
    </Switch>
  );

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
