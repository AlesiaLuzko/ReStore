import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  bookAddedToCart,
  bookRemovedToCart,
  allBooksRemovedToCart,
} from '../../actions';
import './shopping-cart-table.css';

const ShoppingCartTable = () => {
  const { cartItems: items, orderTotal: total } = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();

  const onIncrease = (id) => dispatch(bookAddedToCart(id));
  const onDecrease = (id) => dispatch(bookRemovedToCart(id));
  const onDelete = (id) => dispatch(allBooksRemovedToCart(id));

  const renderRow = (item, idx) => {
    const {
      id, title, count, total,
    } = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td className="name-item">{title}</td>
        <td>{count}</td>
        <td>
          $
          {total}
        </td>
        <td className="action">
          <button
            onClick={() => onDecrease(id)}
            className="btn btn-outline-warning btn-sm"
          >
            <i className="bi bi-patch-minus" />
          </button>
          <button
            onClick={() => onIncrease(id)}
            className="btn btn-outline-success btn-sm"
          >
            <i className="bi bi-patch-plus" />
          </button>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger btn-sm"
          >
            <i className="bi bi-trash" />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col" className="name-item">Item</th>
            <th scope="col">Count</th>
            <th scope="col">Total</th>
            <th scope="col" className="action">Action</th>
          </tr>
        </thead>
        <tbody>
          { items.map(renderRow) }
        </tbody>
      </table>
      <div className="total">
        Total: $
        {total}
      </div>
    </div>
  );
};

export default ShoppingCartTable;
