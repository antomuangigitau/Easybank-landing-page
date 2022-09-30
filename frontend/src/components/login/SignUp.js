import React from 'react';
import SignUpForm from './SignUpForm';
import styles from '../../styles/SignIn.module.css';
const SignUp = () => {
  return (
    <main className={styles['main__content']}>
      <div className={styles.container}>
        <div className={styles['with__border__container']}>
          <SignUpForm />
        </div>
      </div>
    </main>
  );
};

export default SignUp;
