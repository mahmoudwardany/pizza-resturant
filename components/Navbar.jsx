import Image from 'next/image';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
    import styles from "../styles/Navbar.module.css";
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';
import Link from 'next/link';

function Navbars() {
const {products}=useSelector(state=> state.cart)
  return (
        <div className={styles.container}>
          <div className={styles.item}>
          <ul className={styles.list}>
              <Link href={'/'} className='nav-link fs-2 fw-bolder'>
              <li className={styles.listItem}>Homepage</li>
              </Link>
              </ul>
          </div>
          <div className={styles.item}>
            <ul className={styles.list}>
              <li className='fst-italic fs-1'>Pizziera</li>
            </ul>
          </div>
          <Link href='/cart'>
          <div className={styles.item}>
            <div className={styles.cart} >
              <Badge badgeContent={products.length} color="primary" >
                <ShoppingCartOutlinedIcon className='text-slate-100'/>
              </Badge>
            </div>
          </div>
          </Link>
        </div>
      );
    };

export default Navbars;