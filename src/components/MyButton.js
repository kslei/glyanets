import React from 'react';
import variable from '../styles/components/MyButton.module.scss';
import styles from '../styles/components/MyButton.module.scss';

const MyButton = ({item}) => {

  let style = {
    '--color': item.status === 'Active' ? variable.colorActive : variable.color,
    '--bg': item.status === 'Active' ? variable.bgActive : variable.bg,
    '--border': item.status === 'Active' ? `1px solid ${variable.colorActive}` : `1px solid ${variable.color}`,
  }
  
  return (
    <div className={styles.myButton} style={style}>{item.status}</div>
  );
};
export default MyButton;