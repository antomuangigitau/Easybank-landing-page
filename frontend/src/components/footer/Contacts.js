import React from 'react';
import logo from '../../images/logo.svg';
import Social from './Social';
import { socials } from '../data';
import Button from '../header/Button';

const Contacts = () => {
  return (
    <section className='contacts__container'>
      <div className='contact__container'>
        <img src={logo} alt={logo} />
        <div className='socials'>
          {socials.map((social) => {
            return <Social key={social.id} {...social} />;
          })}
        </div>
      </div>
      <ul className='contact__links'>
        <li className='contact__list'>
          <a className='contact__link' href='#aboutus'>
            About Us
          </a>
        </li>
        <li className='contact__list'>
          <a className='contact__link' href='#contact'>
            Contact
          </a>
        </li>
        <li className='contact__list'>
          <a className='contact__link' href='#blog'>
            Blog
          </a>
        </li>
      </ul>
      <ul className='contact__links'>
        <li className='contact__list'>
          <a className='contact__link' href='#careers'>
            Careers
          </a>
        </li>
        <li className='contact__list'>
          <a className='contact__link' href='#support'>
            Support
          </a>
        </li>
        <li className='contact__list'>
          <a className='contact__link' href='#privacy-policy'>
            Privacy Policy
          </a>
        </li>
      </ul>
      <div className='request__invite'>
        <Button />
        <p> © Easybank. All Rights Reserved {new Date().getFullYear()}</p>
      </div>
    </section>
  );
};

export default Contacts;
