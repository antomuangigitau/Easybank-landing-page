import React from 'react';
import styles from '../../styles/Card.module.css';

const Card = ({ img, author, title, message }) => {
  return (
    <div className={styles['card__container']}>
      <div className={styles['img__container']}>
        <img src={img} alt={img} />
      </div>
      <div className={styles['card__information']}>
        <h5>{author}</h5>
        <h4>{title}</h4>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Card;
