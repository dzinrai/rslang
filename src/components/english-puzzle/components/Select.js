import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './select.module.css';

function Select(props) {
  const [value, setValue] = useState(0);
  const { values } = props;
  function handleChange(e) {
    const difficulty = parseInt(e.target.value);
    setValue(difficulty);
    props.onChange(difficulty);
  }
  useEffect(() => {
    if (props.value !== value) setValue(props.value);
  }, [props.value, value]);

  return (
    <div className={styles.switch}>
      <select
        value={value}
        onChange={handleChange}
      >

        {values.map((value, i) => (
          <option key={i} value={value}>
            {value}
          </option>
        ))}

      </select>
      <FontAwesomeIcon icon="caret-down" />
    </div>
  );
}

export default Select;
