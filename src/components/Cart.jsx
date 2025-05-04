import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "./contexts/CartContext";
import axios from "axios";

const Cart = () => {
  const { cart, removeFromCart, cartItemCount, clearCart } = useContext(CartContext);
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const img_url = "https://racquel123.pythonanywhere.com/static/images/";

  // Calculate total price
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.product_cost * item.quantity,
    0
  );

  const handlePayment = async (e) => {
    e.preventDefault();
    setMessage("Processing payment...");

    try {
      const data = new FormData();
      data.append("phone", phone);
      data.append("amount", totalPrice);

      const response = await axios.post(
        "https://modcom2.pythonanywhere.com/api/mpesa_payment",
        data
      );

      setMessage(response.data.message);
      
      // Clear cart after successful payment
      setTimeout(() => {
        clearCart();
        navigate("/payment-success");
      }, 5000);
      
    } catch (error) {
      setMessage("Payment failed. Please try again.");
      console.error("Payment error:", error);
    }
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4">
        Your Cart {cartItemCount > 0 && `(${cartItemCount} items)`}
      </h2>

      {cart.length === 0 ? (
        <div className="alert alert-info">
          Your cart is empty. <Link to="/properties">Browse properties</Link>
        </div>
      ) : (
        <div className="row">
          {/* Cart Items */}
          <div className="col-lg-8">
            {cart.map((item) => (
              <div key={item.id} className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={`${img_url}${item.product_photo}`}
                      className="img-fluid rounded-start"
                      alt={item.product_name}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.product_name}</h5>
                      <p className="card-text text-muted">
                        {item.product_description.slice(0, 50)}...
                      </p>
                      <p className="card-text">
                        <span className="text-warning fw-bold">
                          KES {item.product_cost}
                        </span>{" "}
                        × {item.quantity}
                      </p>
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary and Payment */}
          <div className="col-lg-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title border-bottom pb-2">Order Summary</h5>
                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal:</span>
                  <span>KES {totalPrice}</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Total:</span>
                  <span className="fw-bold">KES {totalPrice}</span>
                </div>

                {/* Payment Form */}
                <form onSubmit={handlePayment}>
                  {message && (
                    <div className="alert alert-warning mb-3">{message}</div>
                  )}

                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="phoneNumber"
                      placeholder="Enter Phone Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                    <label htmlFor="phoneNumber">M-PESA Phone Number</label>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-warning w-100 mt-2"
                    disabled={!phone}
                  >
                    Pay with M-PESA
                  </button>
                </form>

                <Link
                  to="/properties"
                  className="btn btn-outline-secondary w-100 mt-2"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;