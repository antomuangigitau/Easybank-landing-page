import React from 'react';
import styles from '../../styles/Button.module.css';
const Button = () => {
  return (
    <button className={styles['btn']} type='submit'>
      Request Invite
    </button>
  );
};

export default Button;
