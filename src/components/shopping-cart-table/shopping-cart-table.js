import './shopping-cart-table.css';

const ShoppingCartTable = () => {
  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Harry Potter</td>
            <td>1</td>
            <td>$22</td>
            <td>
              <button className="btn btn-outline-danger btn-sm">
                <i className="bi bi-trash"></i>
              </button>
              <button className="btn btn-outline-success btn-sm">
                <i className="bi bi-patch-plus"></i>
              </button>
              <button className="btn btn-outline-warning btn-sm">
                <i className="bi bi-patch-minus"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="total">
        Total: $201
      </div>
    </div>
  );
};

export default ShoppingCartTable;