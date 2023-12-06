import React, {useState, useEffect} from 'react';
import MyInput from './MyInput';
import ProductItem from './ProductItem';
import Pages from './Pages';
import styles from '../styles/components/Product.module.scss';

const Product = ({search, setSearch, data}) => {
  const [mobile, setMobile] = useState(false)
  const pages = [1, 2, 3, 4, '...', 40]
  const page = 1;

  window.addEventListener('resize', function () {
    width();
  });

  useEffect(() => {
    width()
  }, [])
  const width = () => {
    let w = window.innerWidth;
    if (w >= 992) {
      setMobile(false)
    } else {
      setMobile(true)
    }
  }
  
  return (
    <div className={styles.product}>
      <div className={styles.product_title}>Hello Evano 👋🏼,</div>
      <div className={styles.product__block}>
        <div className={styles.product__row}>
          <div className={styles.product__row_text}>
            <div className={styles.product__row_title}>All Customers</div>
            <div className={styles.product__row_active}>Active Members</div>
          </div>
          <div className={styles.search}>
            <MyInput search={search} setSearch={setSearch} placeholder='Search' />
          </div>
        </div>
        {mobile 
          ?<div className={styles.product__header}>
            <div>Customer Name</div>
            <div>Status</div>
          </div>
          :<div className={styles.product__header}>
            <div>Customer Name</div>
            <div>Company</div>
            <div>Phone Number</div>
            <div>Email</div>
            <div>Country</div>
            <div>Status</div>
          </div>
        }
        <div className={styles.product__items}>
          {data.map(item => (
            <ProductItem key={item.id} item={item} mobile={mobile}/>
          ))}
        </div>
        <div className={styles.product__futor}>
          <div className={styles.product__futor_show}>Showing data 1 to 8 of <span style={{marginLeft: '3px'}}>256K entries</span></div>
          <div className={styles.product__futor_pagination}>
            <Pages pages={pages} page={page}/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;