import React from 'react';
import Button from '../header/Button';
import intro from '../../images/bg-intro-desktop.svg';
import mockup from '../../images/image-mockups.png';
import '../../styles/Banking.css';

const header = 'Next generation digital banking';
const paragraph = `Take your financial life online. Your Easybank account will be a one-stop-shop for 
  spending, saving, budgeting, investing, and much more.`;

const Banking = () => {
  return (
    <div className='banking__section'>
      <div className='banking__left'>
        <h3>{header}</h3>
        <p className="header__banking">{paragraph}</p>
        <Button />
      </div>
      <div className='banking__right'>
        <img className='banking__right__intro' src={intro} alt='intro-desktop' />
        <img className='banking__right__mockup' src={mockup} alt='mockup' />
      </div>
    </div>
  );
};

export default Banking;
