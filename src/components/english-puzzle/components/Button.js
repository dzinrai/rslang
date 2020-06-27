/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../sass/puzzleStyles.scss';

function Button({
  className, onClick, value, text, icon, iconClass,
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      value={value}
    >
      {text}
      {icon && (
      <FontAwesomeIcon
        icon={icon}
        className={iconClass}
      />
      )}
    </button>
  );
}

export default Button;
