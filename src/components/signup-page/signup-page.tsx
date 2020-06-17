import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

interface RegisterUser {
  email: string;
  password: string;
  repeatPassword: string;
}

function SignUpPage() {
  const {
    register, errors, handleSubmit, watch,
  } = useForm<RegisterUser>();
  const password = useRef<RegisterUser['password']>();
  password.current = watch('password', '');

  const onSubmit = async (data: RegisterUser): Promise<void> => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()} autoComplete="off">
        <span>Email</span>
        <input
          name="email"
          ref={register({
            required: 'Email is required',
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
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/,
              message: 'Password must have at least 1 digit, 1 lowercase letter, 1 uppercase letter, 1 special character',
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <span>Repeat password</span>
        <input
          name="repeatPassword"
          type="password"
          ref={register({
            validate: (value) => value === password.current || 'The passwords do not match',
          })}
        />
        {errors.repeatPassword && <p>{errors.repeatPassword.message}</p>}

        <button type="submit" onClick={handleSubmit(onSubmit)}>Register</button>
      </form>
    </div>
  );
}

export default SignUpPage;
