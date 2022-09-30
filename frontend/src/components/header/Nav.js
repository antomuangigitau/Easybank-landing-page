import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Button from './Button';
import Login from './Login';
import { useGlobalContext } from '../../Context';
import styles from '../../styles/Nav.module.css';
const Nav = () => {
  const { open, openModal } = useGlobalContext();
  return (
    <header className={styles['header__container']}>
      <div
        className={`${
          open ? styles['overlay'] + ' ' + styles['open'] : styles['overlay']
        }`}
      ></div>
      <nav className={styles['nav']}>
        <div className={styles['nav__container']}>
          <a href='/'>
            <img src={logo} alt='logo' />
          </a>
          <div
            className={`${
              open
                ? styles['nav__contents'] + ' ' + styles['show__modal']
                : styles['nav__contents']
            }`}
          >
            <ul className={styles['nav__header']}>
              <li className={styles['nav__header__list']}>
                <Link className={styles['nav__header__link']} to='/'>
                  Home
                </Link>
              </li>
              <li className={styles['nav__header__list']}>
                <Link className={styles['nav__header__link']} to='/about'>
                  About
                </Link>
              </li>
              <li className={styles['nav__header__list']}>
                <Link className={styles['nav__header__link']} to='/contact'>
                  Contact
                </Link>
              </li>
              <li className={styles['nav__header__list']}>
                <Link className={styles['nav__header__link']} to='/blog'>
                  Blog
                </Link>
              </li>
              <li className={styles['nav__header__list']}>
                <Link className={styles['nav__header__link']} to='/careers'>
                  Careers
                </Link>
              </li>
            </ul>
            <div className={styles['nav__buttons']}>
              <Button type='submit' />
              <Login />
            </div>
          </div>
          <button
            className={`${
              open
                ? styles['hamburger'] + ' ' + styles['menu']
                : styles['hamburger']
            }`}
            onClick={openModal}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
