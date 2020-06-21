import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from './routes/main-router';
import Context from './context/context';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  function authorize() {
    if (!isAuth) {
      setIsAuth(!isAuth);
    }
  }

  return (
    <Router>
      <Context.Provider value={{ authorize }}>
        <MainRouter />
      </Context.Provider>
    </Router>
  );
}

export default App;
