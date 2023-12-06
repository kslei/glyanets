import React from 'react';
import MenuItem from './MenuItem';
import styles from '../styles/components/Menu.module.scss';

const Menu = ({sideMenu}) => {
  
  return (
  <div className={styles.menu}>
    <div className={styles.descMob}>
      <div className={styles.group31}>
        <div className={styles.vector31}>
          <div className={styles.vector31_1}>
            <div className={styles.vector31_2}></div>
          </div>
        </div>
        <div className={styles.text}>Dashboard</div>
      </div>
      <div className={styles.version}>v.01</div>
      <div className={styles.menuItem}>
        {sideMenu.map(item => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
      <div className={styles.group300}>
          <img src={require('../images/Ellipse.png')} className={styles.ellipse} alt='name' />
          <div className={styles.group300_block}>
            <div className={styles.group300_name}>Evano</div>
            <div className={styles.group300_position}>Project Manager</div>
          </div>
      </div>
    </div>
    
    <div className={styles.menuRow}>
      {sideMenu.map(item => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  </div>
  );
};
export default Menu;