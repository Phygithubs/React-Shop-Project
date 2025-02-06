import React from "react";
import { useCart } from "../context/CartContext"; // Ensure this path is correct

function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shippingCost = 10.0; // Set shipping cost

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Cart Items */}
        <div className="col-12 col-md-8 mb-4">
          <h2 className="mb-4">Shopping Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Item</th>
                    <th scope="col">Price</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Subtotal</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="img-fluid me-3"
                            style={{ width: "80px" }}
                          />
                          <div>
                            <h6>{item.name}</h6>
                            <p>
                              <strong>Color:</strong> {item.color}
                            </p>
                            <p>
                              <strong>Size:</strong> {item.size}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>${item.price.toFixed(2)}</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <button
                            className="btn btn-sm btn-outline-primary"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <span className="mx-2">{item.quantity}</span>
                          <button
                            className="btn btn-sm btn-outline-primary"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td>${(item.price * item.quantity).toFixed(2)}</td>
                      <td>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="btn btn-danger btn-sm"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Summary Section */}
        <div className="col-12 col-md-4">
          <div className="card p-3 shadow-sm border-light">
            <h5>Summary</h5>
            <p>
              <strong>Subtotal:</strong> ${totalPrice.toFixed(2)}
            </p>
            <p>
              <strong>Shipping:</strong> ${shippingCost.toFixed(2)}
            </p>
            <p>
              <strong>Total:</strong> ${(totalPrice + shippingCost).toFixed(2)}
            </p>

            {/* Coupon Input */}
            <div className="mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter coupon code here"
              />
            </div>

            <button className="btn btn-dark w-100 mt-3">
              Proceed to Checkout
            </button>
          </div>

          {/* Shipping and Payment Icons */}
          <div className="mt-3">
            <p>
              <strong>Expected shipping delivery:</strong> 12.10.2020 - 14.10.2020
            </p>
            <div className="d-flex justify-content-between mb-1">
              <img
                src="/image/payments.jpg"
                alt="Visa"
                className="payment-icon"
                style={{ width: "60%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
