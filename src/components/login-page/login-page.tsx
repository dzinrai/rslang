import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Button, Modal } from 'antd';
// import { Alert } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';

import loginUser from '../../services/login-user';
import Context from '../../context/contextUser';
import styles from './login-page.module.css';
import { getStatistic, createStatistic } from '../../services/statistic';
import { getSettings } from '../../services/settings';

interface LoginUser {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const { register, errors, handleSubmit } = useForm<LoginUser>();
  const history = useHistory();
  const { authorize } = useContext(Context);
  const [errorMessage, setErrorMessage] = useState<React.ReactNode>(null);
  const [alert, setAlert] = useState<boolean>(false);
  /* eslint-disable */
  const onSubmit = async (data: LoginUser): Promise<void> => {
    loginUser(data)
      .then(() => {
        authorize();
      })
      .then(() => {
        getSettings()
          .then((settings: any) => {
            if (settings && settings.optional && !settings.optional.isUserOfOurSuperDuperApp) {
              history.push('/auth');
              Modal.info({
                title: 'Sorry',
                visible: alert,
                centered: true,
                content: (
                  <div>
                    <p className={styles.statsTitle}>{''}</p>
                    <div className={styles.statsTableContainer}>
                      <span>Your e-mail is already taken by another rs-lang</span>
                    </div>
                  </div>
                ),
                onOk() { () => setAlert(true); },
                okText: 'Close',
              });
              return;
            } else {
              history.push('/main-page');
             // createSettings(settings);
            }
          });
      })
      .then(() => {
        getStatistic().then((statistic: any) => {
          statistic.optional.common.weekDay = moment().format('dddd');
          createStatistic(statistic);
        });
      })
      .catch((err) => {

        setErrorMessage(<p className={styles.errorMsg}>{err.message}</p>);
      });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={(e) => e.preventDefault()}>
        <span className={styles.label}>Email address</span>
        <input
          className={styles.inputForm}
          name="email"
          placeholder="Email address"
          ref={register({
            required: 'Email is required',
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
          })}
        />
        {errors.password && <p className={styles.errorMsg}>{errors.password.message}</p>}

        <Button
          className={`${styles.btn} ${styles.btnFilled}`}
          shape="round"
          onClick={handleSubmit(onSubmit)}
          value="large"
        >
          Login
        </Button>
      </form>
      <span className={styles.bgTitle}>
        <span>Welcome</span>
        <span>Back</span>
      </span>
    </div>
  );
};

export default LoginPage;
