import React from 'react'
import Footer from './Footer'
import Navbars from './Navbar'

const Layout = ({children}) => {
  return (
    <div>
        <Navbars/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout