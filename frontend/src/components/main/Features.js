import React from 'react';

const Features = ({ img, title, description }) => {
  // const { img, title, description } = props;
  return (
    <article className='articles'>
      <img src={img} alt={img} />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
};

export default Features;
