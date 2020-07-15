import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import styles from './header.module.css';
import Logo from '../../img/HeaderLogo.svg';
import MenuLink from './menu-link';
import IMG_SETTINGS from '../../img/menuIcons/settings.svg';
import IMG_LIBRARY from '../../img/menuIcons/library.svg';
import IMG_STATISTIC from '../../img/menuIcons/statistic.svg';
import IMG_GAMES from '../../img/menuIcons/puzzle.svg';
import IMG_ABOUT_US from '../../img/menuIcons/aboutUs.svg';
import { ILink } from './interface';

const pathArray: Array<ILink> = [
  {
    id: 1, path: 'library', name: 'Library', image: IMG_LIBRARY,
  },
  {
    id: 2, path: 'statistic', name: 'Statistic', image: IMG_STATISTIC,
  },
  {
    id: 3, path: 'mini-games', name: 'Mini Games', image: IMG_GAMES,
  },
  {
    id: 4, path: 'settings', name: 'Settings', image: IMG_SETTINGS,
  },
  {
    id: 5, path: 'about-us', name: 'About Us', image: IMG_ABOUT_US,
  }];

const Header: React.FC = () => {
  const path = useLocation();
  const noMenu = ['/auth', '/login', '/signup'];
  const isMenuShow = !noMenu.includes(path.pathname);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [menuButtonStyle, menuContainerStyle] = [`${styles.menuButton}
      ${isOpen && styles.active}`, `${styles.menuContainer}
      ${isOpen && styles.active}`];
  const history = useHistory();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const logout = () => {
    history.push('/');

    localStorage.removeItem('userId');
    localStorage.removeItem('userToken');

    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('userToken');
  };

  return (
    <>
      <div className={styles.headerContainer}>
        <NavLink to={isMenuShow ? 'main-page' : '/'}><img src={Logo} alt="Logo" /></NavLink>
        {isMenuShow
          && (
            <button type="button" className={menuButtonStyle} onClick={toggleMenu}>
              <span> </span>
              <span> </span>
              <span> </span>
            </button>
          )}
      </div>
      {isMenuShow
        && (
          <div className={`${menuContainerStyle} menu-container`}>
            <div className={styles.menuScreenBackground} />
            <div className={styles.menuBlock}>
              <MenuLink link={pathArray} toggleMenu={toggleMenu} />
              <button
                className={styles.btnLogOut}
                type="button"
                onClick={logout}
              >
                Log Out
              </button>
            </div>
          </div>
        )}
    </>
  );
};

export default Header;
