import React from 'react';
import Button from '../header/Button';
// import mockup from '../../images/image-mockups.png';
// import intro from '../../images/bg-intro-desktop.svg';
// import introMobile from '../../images/bg-intro-mobile.svg';
import styles from '../../styles/Banking.module.css';

const header = 'Next generation digital banking';
const paragraph = `Take your financial life online. Your Easybank account will be a one-stop-shop for 
  spending, saving, budgeting, investing, and much more.`;

const Banking = () => {
  return (
    <section className={styles['main__banking__section']}>
      <div className={styles['banking__section']}>
        <div className={styles['image__container']}></div>
        <div className={styles['banking__content'] + ' ' + styles['container']}>
          <h1>{header}</h1>
          <p>{paragraph}</p>
          <Button />
        </div>
      </div>
    </section>
  );
};

export default Banking;

// {/* <div className='background__image'>
//           <img
//             className={styles['intro__desktop']}
//             src={intro}
//             alt='intro-desktop'
//           />
//           <img
//             className={styles['intro__mobile']}
//             src={introMobile}
//             alt='Mobile-Intro'
//           />
//         </div>
//         <img className={styles['mockup__image']} src={mockup} alt='mockup' /> */}
