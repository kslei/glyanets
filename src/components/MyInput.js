import React from 'react';
import styles from '../styles/components/MyInput.module.scss';

const MyInput = ({search, setSearch, placeholder}) => {
  
  return (
  <div className={styles.myInput}>
    <input name='search' type='text' value={search} onChange={e => setSearch(e.target.value)} placeholder={placeholder} className={styles.input}/>
    <div className={styles.input_search}></div>
  </div>
  );
};
export default MyInput;