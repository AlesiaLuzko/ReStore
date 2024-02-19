import { Outlet } from 'react-router-dom';

import ShopHeader from '../shop-header';

const Layout = () => {
  return(
    <div>
      <ShopHeader />
      <Outlet />
    </div>
  );
};

export default Layout;