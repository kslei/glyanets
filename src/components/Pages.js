import React from 'react';
import PageButton from './PageButton';
import styles from '../styles/components/Pages.module.scss';

const Pages = ({page, pages}) => {
  
  return (
  <div className={styles.pages}>
    <PageButton name='<' />
    {pages.map(item => (
      <PageButton key={item} name={item} active={item === page ? true : false}/>
    ))}
    <PageButton name='>' />
  </div>
  );
};
export default Pages;