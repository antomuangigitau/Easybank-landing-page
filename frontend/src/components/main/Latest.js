import React from 'react';
import Card from './Card';
import { moreItems } from '../data';
import styles from '../../styles/Latest.module.css';
const heading = 'Latest Articles';
const Latest = () => {
  return (
    <section className={styles['latest__articles']}>
      <div className={styles['latest']}>
        <h3>{heading}</h3>
        <div className={styles['latest__section__container']}>
          {moreItems.map((moreItem) => {
            return <Card key={moreItem.id} {...moreItem} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Latest;
