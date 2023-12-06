import React from 'react';
import variable from '../styles/components/MenuItem.module.scss';
import styles from '../styles/components/MenuItem.module.scss';

const MenuItem = ({item}) => {
  
  let style = {
    '--color': item.active ? variable.colorActive : variable.color,
    '--background': item.active ? variable.bgActive : variable.bg,
    '--icon': `url(/images/${item.img}.png) no-repeat center/contain`
  }
  
  return (
  <div className={styles.itemRec} style={style}>
    <div className={styles.item}>
      <div className={styles.item_left}>
        <div className={styles.item_icon} style={style}></div>
        <div className={styles.item_text} style={style}>{item.name}</div>
      </div>
      {item.route &&<div className={styles.item_chevron} style={style}></div>}
    </div>
  </div>
  );
};
export default MenuItem;