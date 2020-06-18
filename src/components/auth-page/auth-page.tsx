import React from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as AuthVector1 } from '../../img/layer-2.svg';
import { ReactComponent as WaveVector } from '../../img/vector-1.svg';
import './auth-page.css';

function AuthPage() {
  const history = useHistory();

  return (
    <div className="container">
      <div className="auth-container">
        <AuthVector1 className="vector-auth-present" />

        <button
          className="btn btn-filled"
          type="button"
          onClick={() => {
            history.push('/signup');
          }}
        >
          Sign Up
        </button>

        <button
          className="btn"
          type="button"
          onClick={() => {
            history.push('/login');
          }}
        >
          Log In
        </button>

      </div>
      <span className="bg-title">
        <span>Online</span>
        <span>English</span>
        <span>portal</span>
      </span>
      <WaveVector className="vector-auth-wave" />
    </div>
  );
}

export default AuthPage;
