import React from 'react';
import logo from '../../images/logo.svg';
import Social from './Social';
import { socials } from '../data';
import Button from '../header/Button';
import styles from '../../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['contacts__container']}>
        <div className={styles['contact__container']}>
          <img src={logo} alt={logo} />
          <div className={styles['socials']}>
            {socials.map((social) => {
              return <Social key={social.id} {...social} />;
            })}
          </div>
        </div>
        <ul className={styles['contact__links']}>
          <li className={styles['contact__list']}>
            <a className={styles['contact__link']} href='#aboutus'>
              About Us
            </a>
          </li>
          <li className={styles['contact__list']}>
            <a className={styles['contact__link']} href='#contact'>
              Contact
            </a>
          </li>
          <li className={styles['contact__list']}>
            <a className={styles['contact__link']} href='#blog'>
              Blog
            </a>
          </li>
        </ul>
        <ul className='contact__links'>
          <li className={styles['contact__list']}>
            <a className={styles['contact__link']} href='#careers'>
              Careers
            </a>
          </li>
          <li className={styles['contact__list']}>
            <a className={styles['contact__link']} href='#support'>
              Support
            </a>
          </li>
          <li className={styles['contact__list']}>
            <a className={styles['contact__link']} href='#privacy-policy'>
              Privacy Policy
            </a>
          </li>
        </ul>
        <div className={styles['request__invite']}>
          <Button />
          <p> © Easybank. All Rights Reserved {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
