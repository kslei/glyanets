import React, {useState} from 'react';
import Menu from '../components/Menu';
import Product from '../components/Product';
import styles from '../styles/pages/Page.module.scss';

const Page = () => {
const [search, setSearch] = useState()

  const sideMenu = [
    { id: 0, name: 'Dashboard', img: 'key-square', route: '', active: false },
    { id: 1, name: 'Product', img: '3d-square', route: 'Product', active: false },
    { id: 2, name: 'Customers', img: 'user-square', route: 'Customers', active: true },
    { id: 3, name: 'Income', img: 'wallet-money', route: 'Income', active: false },
    { id: 4, name: 'Promote', img: 'discount-shape', route: 'Promote', active: false },
    { id: 5, name: 'Help', img: 'message-question', route: 'Help', active: false },
  ]
  const data = [
    { id: 0, name: 'Jane Cooper', company: 'Microsoft', phone: '(225) 555-0118', email: 'jane@microsoft.com', country: 'United States', status: 'Active' },
    { id: 1, name: 'Floyd Miles', company: 'Yahoo', phone: '(205) 555-0100', email: 'floyd@yahoo.com', country: 'Kiribati', status: 'Inactive' },
    { id: 2, name: 'Ronald Richards', company: 'Adobe', phone: '(302) 555-0107', email: 'ronald@adobe.com', country: 'Israel', status: 'Inactive' },
    { id: 3, name: 'Marvin McKinney', company: 'Tesla', phone: '(252) 555-0126', email: 'marvin@tesla.com', country: 'Iran', status: 'Active' },
    { id: 4, name: 'Jerome Bell', company: 'Google', phone: '(629) 555-0129', email: 'jerome@google.com', country: 'Réunion', status: 'Active' },
    { id: 5, name: 'Kathryn Murphy', company: 'Microsoft', phone: '(406) 555-0120', email: 'kathryn@microsoft.com', country: 'Curaçao', status: 'Active' },
    { id: 6, name: 'Jacob Jones', company: 'Yahoo', phone: '(208) 555-0112', email: 'jacob@yahoo.com', country: 'Brasil', status: 'Active' },
    { id: 7, name: 'Kristin Watson', company: 'Facebook', phone: '(704) 555-0127', email: 'kristin@facebook.com', country: 'Åland Islands', status: 'Inactive' },
  ]

  return (
  <div className={styles.page}>
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.sideMenu}>
          <Menu sideMenu={sideMenu}/>
        </div>
          <Product search={search} setSearch={setSearch} data={data}/>
      </div>
    </div>
  </div>
  );
}
export default Page;