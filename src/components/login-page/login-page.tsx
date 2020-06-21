import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { ReactComponent as WaveVector } from '../../img/vector-1.svg';
import loginUser from '../../services/login-user';
import Context from '../../context/context';
import './login-page.css';

interface LoginUser {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const { register, errors, handleSubmit } = useForm<LoginUser>();
  const history = useHistory();
  const { authorize } = useContext(Context);
  const onSubmit = async (data: LoginUser): Promise<void> => {
    loginUser(data).then(() => {
      history.push('/');
      authorize();
    });
  };

  return (
    <div className="container">
      <form onSubmit={(e) => e.preventDefault()}>
        <span className="label">Email address</span>
        <input
          className="input"
          name="email"
          placeholder="Email address"
          ref={register({
            required: 'Email is required',
          })}
        />
        {errors.email && <p className="error-msg">{errors.email.message}</p>}

        <span className="label">Password</span>
        <input
          className="input"
          name="password"
          type="password"
          placeholder="Password"
          ref={register({
            required: 'You must specify a password',
          })}
        />
        {errors.password && <p className="error-msg">{errors.password.message}</p>}

        <button className="btn btn-filled" type="submit" onClick={handleSubmit(onSubmit)}>Login</button>
      </form>
      <WaveVector className="vector-login-wave" />
    </div>
  );
};

export default LoginPage;
