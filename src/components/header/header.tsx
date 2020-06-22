import React, { useState } from 'react';
// @ts-ignore
import { NavLink } from 'react-router-dom';
import styles from './header.module.css';
// @ts-ignore
import Logo from '../../img/HeaderLogo.svg';
import MenuLink from './menu-link';
// @ts-ignore
import IMG_SETTINGS from '../../img/menuIcons/settings.svg';
// @ts-ignore
import IMG_LIBRARY from '../../img/menuIcons/library.svg';
// @ts-ignore
import IMG_STATISTIC from '../../img/menuIcons/statistic.svg';
// @ts-ignore
import IMG_GAMES from '../../img/menuIcons/puzzle.svg';
// @ts-ignore
import IMG_ABOUT_US from '../../img/menuIcons/aboutUs.svg'
import { ILink } from './interface'
const pathArray: Array<ILink> = [

    {path: '/library', name: 'Library', image: IMG_LIBRARY},
    {path: '/statistic', name: 'Statistic', image: IMG_STATISTIC},
    {path: '/mini-games', name: 'Mini Games', image: IMG_GAMES},
    {path: '/settings', name: 'Settings', image: IMG_SETTINGS},
    {path: '/about-us', name: 'About Us', image: IMG_ABOUT_US}];

const pathArray: Array<ILink> = [
  { path: 'library', name: 'Library', image: IMG_LIBRARY },
  { path: 'statistic', name: 'Statistic', image: IMG_STATISTIC },
  { path: 'mini-games', name: 'Mini Games', image: IMG_GAMES },
  { path: 'settings', name: 'Settings', image: IMG_SETTINGS },
  { path: 'about-us', name: 'About Us', image: IMG_ABOUT_US }];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const [menuButtonStyle, menuContainerStyle] = [`${styles.menuButton} 
      ${isOpen && styles.active}`, `${styles.menuContainer} 
      ${isOpen && styles.active}`];

  const toggleMenu = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };
  return (
    <>
      <div className={styles.headerContainer}>
        <NavLink to="main-page"><img src={Logo} alt="Logo" /></NavLink>
        <div className={menuButtonStyle} onClick={toggleMenu}>
          <span> </span>
          <span> </span>
          <span> </span>
        </div>
      </div>
      <div className={`${menuContainerStyle} menu-container`}>
        <div className={styles.menuScreenBackground} onClick={toggleMenu}> </div>
        <div className={styles.menuBlock}>
          <MenuLink link={pathArray} />
          <div className={styles.btnLogOut}>
            Log Out
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
