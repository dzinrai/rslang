import React from 'react';
import { Link } from 'react-router-dom';

function AuthPage() {
  return (
      <div className="container">
        <h1>RS LANG</h1>
        <Link to="/login">Log In</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
  );
}

export default AuthPage;
