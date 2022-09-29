import React from 'react';
import styles from '../../styles/Features.module.css';
const Features = ({ img, title, description }) => {
  // const { img, title, description } = props;
  return (
    <article className={styles['articles']}>
      <img src={img} alt={img} />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
};

export default Features;
