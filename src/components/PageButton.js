import React from 'react';
import variable from '../styles/components/PageButton.module.scss';
import styles from '../styles/components/PageButton.module.scss';

const PageButton = ({name, active, onClick}) => {
  let style = {
    '--color': active? variable.colorActive : variable.color,
    '--bg': active? variable.bgActive : variable.bg,
    '--border': active? `1px solid ${variable.bgActive}` : `1px solid ${variable.border}`
  }
  if(name === '...') {
    style.minWidth = 0;
    style.borderColor = 'transparent';
    style.background = 'transparent';
  }

  return (
    <div className={styles.btn} style={style} onClick={(e) => onClick(e)}>{name}</div>
  );
};
export default PageButton;