import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.module.css';
import { ILink } from './interface';

interface LinkProps {
  link: ILink[]
  toggleMenu: () => void
}

const MenuLink: React.FC<LinkProps> = ({ link, toggleMenu }: LinkProps) => (
  <ul>
    {link.map((item) => (
      <li key={item.id}>
        <NavLink className={styles.link} exact to={`/${item.path}`} onClick={toggleMenu}>
          <img src={item!.image} alt="" />
          <span>
            {item.name}
          </span>
        </NavLink>
      </li>
    ))}

  </ul>
);

export default MenuLink;
