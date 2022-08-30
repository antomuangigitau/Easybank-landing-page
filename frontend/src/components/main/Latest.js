import React from 'react';
import Card from './Card';
import { moreItems } from '../data';
const heading = 'Latest Articles';
const Latest = () => {
  return (
    <div className='outer'>
      <h3>{heading}</h3>
      <div className='outer__section__container'>
        {moreItems.map((moreItem) => {
          return <Card key={moreItem.id} {...moreItem} />;
        })}
      </div>
    </div>
  );
};

export default Latest;
