import React from 'react'
import Image from 'next/image'
import styles from '../styles/Featured.module.css'
const Featured = () => {
  return (
 <div id={styles.wrapper} className='h-50'>
<Image  src={'/img/side-view-pizza-with-slices-bell-pepper-pizza-slices-flour-board-cookware_176474-3185.avif'}
width={500}height={100}
className='w-full max-h-full'
alt=''
/>
    </div>
  )
}

export default Featured