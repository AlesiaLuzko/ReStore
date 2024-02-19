import './shop-header.css';

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="shop-header d-flex justify-content-between">
      <a href="#" className="logo text-dark">ReStore</a>
      <a className="shopping-cart text-dark">
        <i className="bi bi-bag-heart cart-icon"></i>
        {numItems} items (${total})
      </a>
    </header>
  );
};

export default ShopHeader;