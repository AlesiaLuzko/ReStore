import React from 'react';
import { Outlet } from 'react-router-dom';

import ShopHeader from '../shop-header/shop-header';

const Layout = () => (
  <div>
    <ShopHeader />
    <Outlet />
  </div>
);

export default Layout;
