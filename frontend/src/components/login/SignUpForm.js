import React, { useState } from 'react';
import Socials from './SigninSocials';
import LoginButton from './LoginButton';
import { buttonName } from '../data';
import { socialContainers } from '../data';
import styles from '../../styles/SigninForm.module.css';
const SigninForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <>
      <form className={styles['form__container']} onSubmit={handleSubmit}>
        <div className={styles['title__container']}>
          <h3>Sign up</h3>
          <div className={styles['small__clicked__link']}>
            <a href='/signin' className={styles['link__link']}>
              I have an account
            </a>
          </div>
        </div>
        <div className={styles['signin__text__container']}>
          <div>
            <div className={styles['input__placeholder__container']}>
              <label
                htmlFor='email'
                className={`${styles['default__placeholder']} ${styles['default__minimized']}`}
              >
                Email
              </label>
              <div className={styles['default__input__container']}>
                <input
                  className={`${styles['base__input']} ${styles['default__input']}`}
                  type='email'
                  name='email'
                  id='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-required='true'
                />
              </div>
            </div>
            <div className={styles['default__message']}>Required</div>
          </div>
          <div className={styles['signin__password__container']}>
            <div>
              <div className={styles['input__placeholder__container']}>
                <label
                  htmlFor='password'
                  className={`${styles['default__placeholder']} ${styles['default__minimized']}`}
                >
                  Password
                </label>
                <div className={styles['default__input__container']}>
                  <input
                    className={`${styles['base__input']} ${styles['default__input']}`}
                    type='password'
                    name='password'
                    id='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    aria-required='true'
                  />
                </div>
              </div>
              <div className={styles['default__message']}>Required</div>
            </div>
          </div>
        </div>
        <LoginButton title={buttonName[1].title} />
        <div style={{ height: '12px', flexShrink: '0' }}></div>
        <div style={{ height: '16px', flexShrink: '0' }}></div>
        <div className={styles['social__container']}>
          {socialContainers.map((items) => {
            return <Socials key={items.id} {...items} />;
          })}
        </div>
      </form>
    </>
  );
};

export default SigninForm;
