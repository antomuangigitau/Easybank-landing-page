import React from 'react';
import SigninForm from './SigninForm';
import styles from '../../styles/SignIn.module.css';
const SignIn = () => {
  return (
    <main className={styles['main__content']}>
      <div className={styles.container}>
        <div className={styles['with__border__container']}>
          <SigninForm />
        </div>
      </div>
    </main>
  );
};

export default SignIn;
