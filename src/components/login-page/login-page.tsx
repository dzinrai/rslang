import React from 'react';
import { useForm } from 'react-hook-form';
import { ReactComponent as WaveVector } from '../../img/vector-1.svg';
import './login-page.css';

interface LoginUser {
  email: string;
  password: string;
}

function LoginPage() {
  const { register, errors, handleSubmit } = useForm<LoginUser>();
  const onSubmit = async (data: LoginUser): Promise<void> => {
    console.log(JSON.stringify(data));
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
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'invalid email address',
            },
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
            minLength: {
              value: 8,
              message: 'Password must have at least 8 characters',
            },
            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/,
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
