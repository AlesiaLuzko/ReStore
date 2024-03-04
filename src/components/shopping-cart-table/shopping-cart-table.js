import { useDispatch, useSelector } from 'react-redux';

import {
  bookAddedToCart,
  bookRemovedToCart,
  allBooksRemovedToCart } from '../../actions';
import './shopping-cart-table.css';

const ShoppingCartTable = () => {

  const {cartItems: items, orderTotal: total} = useSelector(state => state.shoppingCart);
  const dispatch = useDispatch();

  const onIncrease = (id) => dispatch(bookAddedToCart(id));
  const onDecrease = (id) => dispatch(bookRemovedToCart(id));
  const onDelete = (id) => dispatch(allBooksRemovedToCart(id));

  const renderRow = (item, idx) => {
    const { id, title, count, total } = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button
            onClick={() => onDecrease(id)}
            className="btn btn-outline-warning btn-sm">
            <i className="bi bi-patch-minus"></i>
          </button>
          <button
            onClick={() => onIncrease(id)}
            className="btn btn-outline-success btn-sm">
            <i className="bi bi-patch-plus"></i>
          </button>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger btn-sm">
            <i className="bi bi-trash"></i>
          </button>
        </td>
      </tr>
    )
  }

  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          { items.map(renderRow) }
        </tbody>
      </table>
      <div className="total">
        Total: ${total}
      </div>
    </div>
  );
};

export default ShoppingCartTable;