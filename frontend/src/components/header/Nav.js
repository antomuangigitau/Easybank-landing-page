import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Button from './Button';
import Login from './Login';
const Nav = () => {
  return (
    <nav className='nav__container'>
      <a href='/'>
        <img src={logo} alt='logo' />
      </a>
      <ul className='nav__header'>
        <li className='nav__header__list'>
          <Link className='nav__header__link' to='/'>
            Home
          </Link>
        </li>
        <li className='nav__header__list'>
          <Link className='nav__header__link' to='/about'>
            About
          </Link>
        </li>
        <li className='nav__header__list'>
          <Link className='nav__header__link' to='/contact'>
            Contact
          </Link>
        </li>
        <li className='nav__header__list'>
          <Link className='nav__header__link' to='/blog'>
            Blog
          </Link>
        </li>
        <li className='nav__header__list'>
          <Link className='nav__header__link' to='/careers'>
            Careers
          </Link>
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
