import React from 'react';
import { NavLink } from 'react-router-dom';
// @ts-ignore
import styles from './header.module.css';
import { ILink } from './interface';

interface LinkProps {
    link: ILink[]
    toggleMenu: () => void
}

const MenuLink: React.FC<LinkProps> = ({ link, toggleMenu }) => (
  <ul>
    {link.map((item, index) => (
      <li key={index}>
        <NavLink className={styles.link} to={item.path} onClick={toggleMenu}>
          <img src={item!.image} alt="" />
          {' '}
          <span>
            {' '}
            {item.name}
            {' '}
          </span>
        </NavLink>
      </li>
    ))}

  </ul>
);

export default MenuLink;
