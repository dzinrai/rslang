import React from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";

type User = {
  email: string;
  password: string;
};
function LoginPage() {
  let location = useLocation();
  const { register, errors, handleSubmit } = useForm<User>();
  const onSubmit = async (data: User):Promise<void> => {
		console.log(JSON.stringify(data));
	};

  return (
    <div>
      <form onSubmit={e => e.preventDefault()}>
        <label>Email</label>
        <input
            name="email"
            ref={register({
                required: "Email is required",
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "invalid email address"
                }
            })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <label>Password</label>
        <input
            name="password"
            type="password"
            ref={register({
                required: "You must specify a password",
                minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters"
                },
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/,
                })
            }
        />
        {errors.password && <p>{errors.password.message}</p>}

        <input type="submit" onClick={handleSubmit(onSubmit)} value='Login' />
        </form>
    </div>
  );
}

export default LoginPage;
