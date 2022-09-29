import React from 'react';
import styles from '../../styles/SigninForm.module.css';
const LoginButton = (props) => {
  const { title } = props;
  return (
    <>
      <button className={styles['base__btn']} type='submit'>
        <span className={styles['base__text']}>{title}</span>
      </button>
    </>
  );
};

export default LoginButton;
