import React from 'react';
import styles from '../../styles/Social.module.css';
const Social = ({ img, link }) => {
  return (
    <a className={styles.social} href={link}>
      <span>
        <img src={img} alt={img} />
      </span>
    </a>
  );
};

export default Social;
