import React from 'react';
import styles from '../../styles/Button.module.css';
const Button = ({ type }) => {
  return (
    <button className={styles['btn']} type={type || 'submit'}>
      Request Invite
    </button>
  );
};

export default Button;
