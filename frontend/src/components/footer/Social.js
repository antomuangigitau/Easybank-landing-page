import React from 'react';

const Social = ({ img, link }) => {
  return (
    <a href={link}>
      <span>
        <img src={img} alt={img} />
      </span>
    </a>
  );
};

export default Social;
