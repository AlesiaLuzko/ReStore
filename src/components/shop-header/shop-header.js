import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './shop-header.css';

const ShopHeader = () => {
  const { orderTotal: total, countItem: count } = useSelector(state => state.shoppingCart);

  return (
    <header className="shop-header d-flex justify-content-between">
      <Link to="/" className="logo text-dark">
        <div>ReStore</div>
      </Link>
      <Link to="/cart" className="shopping-cart text-dark">
        <div>
          <i className="bi bi-bag-heart cart-icon"></i>
          {count} items (${total})
        </div>
      </Link>
    </header>
  );
};

export default ShopHeader;