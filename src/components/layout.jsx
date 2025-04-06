
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import Cart from './cart';

function Layout() {
  return (
    <div className='bg-gradient-to-r from-[#9e543f] via-[#b16448] to-[#c98634]'>
      <main className='w-[1200px] max-w-full m-auto p-5'>
        <Header />
        <Outlet />  {/* This will render the nested route content */}
      </main>
      <Cart />
    </div>
  );
}

export default Layout;
