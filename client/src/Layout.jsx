import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navbar />
          <div className='max-w-[1440px] mx-auto px-4'>
              <Outlet />
          </div>
          
    </>
  );
}

export default Layout
