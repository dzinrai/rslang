import React, { useRef, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { useForm } from 'react-hook-form';
import styles from './signup-page.module.css';
import { createSettings } from '../../services/settings';
import { createStatistic } from '../../services/statistic';
import createUser from '../../services/create-user';
import loginUser from '../../services/login-user';
import Context from '../../context/contextUser';

interface RegisterUser {
  email: string;
  password: string;
  repeatPassword: string;
}

const SignUpPage: React.FC = () => {
  const {
    register, errors, handleSubmit, watch,
  } = useForm<RegisterUser>();
  const password = useRef<RegisterUser['password']>();
  const history = useHistory();
  const { authorize } = useContext(Context);
  const [errorMessage, setErrorMessage] = useState<React.ReactNode>(null);

  password.current = watch('password', '');

  const onSubmit = async (data: RegisterUser): Promise<void> => {
    createUser(data)
      .then(() => loginUser(data))
      .then(() => {
        history.push('/');
        authorize();
      })
      .then(() => {
        createSettings(
          {
            wordsPerDay: 20,
            optional: {
              isUserOfOurSuperDuperApp: true,
              lastVisit: '01/01/19',
              cardsPerDay: 10,
              wordTranscription: true,
              spellingOutSentence: false,
              picture: true,
              sentenceExample: true,
              translateDescription: true,
              showResultButton: true,
              moveToDifficult: true,
              difficultyButtons: true,
              deleteWord: true,
            },
          },
        );
        createStatistic({
          learnedWords: 0,
          optional: {
            common: {
              visitDate: [],
              wordsToday: [],
              newWordsToday: 0,
              dayProgress: 0,
              lastWord: {},
              weekDay: [],
              errors: 0,
              correct: [],
            },
            games: {
              speakIt: {
                lastPlay: [],
                words: [],
                percentCorrect: [],
              },
              savannah: {
                lastPlay: [],
                words: [],
                percentCorrect: [],
              },
              audioCall: {
                lastPlay: [],
                words: [],
                percentCorrect: [],
              },
              sprint: {
                lastPlay: [],
                words: [],
                percentCorrect: [],
              },
              puzzle: {
                lastPlay: [],
                words: [],
                percentCorrect: [],
              },
              ownGame: {
                lastPlay: [],
                words: [],
                percentCorrect: [],
              },
            },
          },

        });
      })
      .catch((err) => {
        setErrorMessage(<p className={styles.errorMsg}>{err.message}</p>);
      });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={(e) => e.preventDefault()} autoComplete="off">
        <span className={styles.label}>Email address</span>
        <input
          className={styles.inputForm}
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
        {errorMessage
          || (errors.email && <p className={styles.errorMsg}>{errors.email.message}</p>)}

        <span className={styles.label}>Password</span>
        <input
          className={styles.inputForm}
          name="password"
          type="password"
          placeholder="Password"
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
        {errors.password && <p className={styles.errorMsg}>{errors.password.message}</p>}

        <span className={styles.label}>Repeat Password</span>
        <input
          className={styles.inputForm}
          name="repeatPassword"
          type="password"
          placeholder="Repeat Password"
          ref={register({
            validate: (value) => value === password.current || 'The passwords do not match',
          })}
        />
        {errors.repeatPassword
          && <p className={styles.errorMsg}>{errors.repeatPassword.message}</p>}
        <Button
          className={`${styles.btn} ${styles.btnFilled}`}
          shape="round"
          onClick={handleSubmit(onSubmit)}
          value="large"
        >
          Sign Up
        </Button>
      </form>
      <span className={styles.bgTitle}>
        <span>Get</span>
        <span>Started</span>
      </span>
    </div>
  );
};

export default SignUpPage;
