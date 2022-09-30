import React from 'react';
import styles from '../../styles/SigninForm.module.css';
const LoginButton = (props) => {
  const { children, type } = props;
  return (
    <>
      <button className={styles['base__btn']} type={type || 'button'}>
        <span className={styles['base__text']}>{children}</span>
      </button>
    </>
  );
};

export default LoginButton;
