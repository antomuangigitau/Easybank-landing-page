import React from 'react';
import styles from '../../styles/SigninSocials.module.css';
const SigninSocials = ({ img, text, arrowIcon }) => {
  return (
    <div className={styles['social__buttons']}>
      <button className={styles['base__basic'] + ' ' + styles['base__white']}>
        <span
          className={styles['base__icon__wrapper'] + ' ' + styles['base__flex']}
        >
          <img src={img} alt='' />
        </span>
        <span className={styles['base__text']}>{text}</span>
        <span
          className={styles['base__arrow__icon'] + ' ' + styles['base__flex']}
        >
          <img src={arrowIcon} alt='' />
        </span>
      </button>
    </div>
  );
};

export default SigninSocials;
