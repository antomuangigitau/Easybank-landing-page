import React from 'react';
import '../../styles/Card.css'

const Card = ({ img, author, title, message }) => {
  return (
    <div className='card__container'>
      <div className='img__container'>
        <img src={img} alt={img} />
      </div>
      <div className='card__information'>
        <h5>{author}</h5>
        <h4>{title}</h4>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Card;
