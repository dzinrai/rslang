import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from './routes/main-router';
import ContextUser from './context/contextUser';
import { WordsProvider } from './context/contextWords';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  function authorize() {
    if (!isAuth) {
      setIsAuth(!isAuth);
    }
  }

  return (
    <Router>
      <ContextUser.Provider value={{ authorize }}>
        <WordsProvider>
          <MainRouter />
        </WordsProvider>
      </ContextUser.Provider>
    </Router>
  );
}

export default App;
