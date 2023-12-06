import React, {useEffect, useState} from 'react';
import MyButton from './MyButton';
import PageButton from './PageButton';
import styles from '../styles/components/ProductItem.module.scss';

const ProductItem = ({item, mobile}) => {
  const [vis, setVis] = useState(false);
  
  useEffect(()=>{
    if(!mobile) setVis(false);
  }, [mobile])
  
  if(mobile) {
    return (
      <div>
        <div className={styles.productItem_mobile}>
          <div>{item.name}</div>
          <div className={styles.btn} style={{width: '50px'}}>
            <PageButton name={vis ? 'Less <':'More >'} onClick={() => setVis(!vis)} active={vis}/>
          </div>
          <div className={styles.btn}>
            <MyButton item={item} /> 
          </div>
        </div>
        {vis &&
          <div>
            <div className={styles.menuVis}>
              <div className={styles.menuVis_head}>Company</div>
              <div>{item.company}</div>
            </div>
            <div className={styles.menuVis}>
              <div className={styles.menuVis_head}>Phone Number</div>
              <div>{item.phone}</div>
            </div>
            <div className={styles.menuVis}>
              <div className={styles.menuVis_head}>Email</div>
              <div>{item.email}</div>
            </div>
            <div className={styles.menuVis}>
              <div className={styles.menuVis_head}>Country</div>
              <div>{item.country}</div>
            </div>
          </div>
        }
      </div>
    
    );
  } else {
    return (
    <div className={styles.productItem}>
      <div>{item.name}</div>
      <div>{item.company}</div>
      <div>{item.phone}</div>
      <div>{item.email}</div>
      <div>{item.country}</div>
      <MyButton item={item} /> 
    </div>
    );
  }
};
export default ProductItem;