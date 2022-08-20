import React from 'react';
import logo from '../../images/logo.svg';
import Button from './Button';
import Login from './Login';
const Nav = () => {
  return (
    <nav className='nav__container'>
      <a href='index.html'>
        <img src={logo} alt='logo' />
      </a>
      <ul className='nav__header'>
        <li className='nav__header__list'>
          <a className='nav__header__link' href='#home'>
            Home
          </a>
        </li>
        <li className='nav__header__list'>
          <a className='nav__header__link' href='#about'>
            About
          </a>
        </li>
        <li className='nav__header__list'>
          <a className='nav__header__link' href='#contact'>
            Contact
          </a>
        </li>
        <li className='nav__header__list'>
          <a className='nav__header__link' href='#blog'>
            Blog
          </a>
        </li>
        <li className='nav__header__list'>
          <a className='nav__header__link' href='#careers'>
            Careers
          </a>
        </li>
      </ul>
      <div className='nav__buttons'>
        <Button />
        <Login />
      </div>
    </nav>
  );
};

export default Nav;
