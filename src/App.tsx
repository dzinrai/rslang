import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from './routes/main-router';
import AppRouter from './routes/app-router';

function App() {
  return (
    <Router>
      <MainRouter />
      <AppRouter />
    </Router>
  );
}

export default App;
