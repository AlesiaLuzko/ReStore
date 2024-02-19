import { Outlet } from 'react-router-dom';

import ShopHeader from '../shop-header';

const Layout = () => {
  return(
    <div>
      <ShopHeader numItems={5} total={210}/>
      <Outlet />
    </div>
  );
};

export default Layout;