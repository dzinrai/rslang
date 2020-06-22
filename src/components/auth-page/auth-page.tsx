import React from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as AuthVector1 } from '../../img/layer-2.svg';
import style from './auth-page.module.css';

function AuthPage() {
  const history = useHistory();
  const btnClasses = `${style.btn} ${style.btnFilled}`;

  return (
    <div className={style.container}>
      <div className={style.authContainer}>
        <AuthVector1 className={style.vectorAuthPresent} />

        <button
          className={btnClasses}
          type="button"
          onClick={() => {
            history.push('/signup');
          }}
        >
          Sign Up
        </button>

        <button
          className={style.btn}
          type="button"
          onClick={() => {
            history.push('/login');
          }}
        >
          Log In
        </button>

      </div>
      <span className={style.bgTitle}>
        <span>Online</span>
        <span>English</span>
        <span>portal</span>
      </span>
    </div>
  );
}

export default AuthPage;
