import React from 'react'
import Image from 'next/image'
import styles from '../styles/Featured.module.css'

const Featured = () => {
  return (
 <div id={styles.wrapper} className='w-100'>
<Image  src={'/img/pizza-red-flyer_1284-34366.avif'}
width={500}height={200}
className='min-w-full min-h-fit'
alt=''
/>
    </div>
  )
}

export default Featured