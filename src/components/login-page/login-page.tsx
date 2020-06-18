import React from 'react';
import { useForm } from 'react-hook-form';

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
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <span>Email</span>
        <input
          name="email"
          ref={register({
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'invalid email address',
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <span>Password</span>
        <input
          name="password"
          type="password"
          ref={register({
            required: 'You must specify a password',
            minLength: {
              value: 8,
              message: 'Password must have at least 8 characters',
            },
            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/,
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <button type="submit" onClick={handleSubmit(onSubmit)}>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
