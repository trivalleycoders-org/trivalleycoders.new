// TechLogo

import React from 'react';
import classNames from 'classnames'
import styles from './style.css';

const TechLogo = (props) => {
  const imageStyle = classNames(
    {
      // 'tech-logo-image': true,
      [props.style]: true,
      'logoHeight': true,
    }
  )
  return (
    <div className={styles.techLogo}>
      <img className={imageStyle} src={props.url} alt="logo" />
      <div className={styles.logoText}>{props.name}</div>
    </div>
  );
};

export default TechLogo;
