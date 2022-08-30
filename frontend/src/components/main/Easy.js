import React from 'react';
import Features from '../main/Features';
import { items } from '../data';
import '../../styles/Easy.css'
const header = 'Why choose Easybank?';
const paragraph = `We leverage Open Banking to turn your bank account into your financial hub. Control 
  your finances like never before.
`;
const Easy = () => {
  return (
    <div className='easy__bank'>
      <div className='inner__easy__bank'>
        <h2>{header}</h2>
        <p>{paragraph}</p>
      </div>
      <div className='flex__inner'>
        {items.map((item) => {
          return <Features key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Easy;
