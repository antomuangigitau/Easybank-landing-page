import React from 'react';
import Features from '../main/Features';
import { items } from '../data';
import styles from '../../styles/ChooseEasy.module.css';
const header = 'Why choose Easybank?';
const paragraph = `We leverage Open Banking to turn your bank account into your financial hub. Control 
  your finances like never before.
`;
const ChooseEasy = () => {
  return (
    <section className={styles['choose__easy__bank']}>
      <div className={styles['easy__bank']}>
        <div className={styles['inner__easy__bank']}>
          <h2>{header}</h2>
          <p>{paragraph}</p>
        </div>
        <div className={styles['flex__inner']}>
          {items.map((item) => {
            return <Features key={item.id} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ChooseEasy;
