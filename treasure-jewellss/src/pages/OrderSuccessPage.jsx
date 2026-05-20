import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSuccessPage = () => {
  const navigate = useNavigate();

  // 🔌 Replace with real backend data
  const order = {
    id: "ORD123456",
    amount: 6998,
    email: "customer@email.com",
  };

  return (
    <div className="success-page">
      <div className="success-container">

        {/* ICON */}
        <div className="success-icon">✓</div>

        {/* TEXT */}
        <h1>Order Confirmed</h1>
        <p className="success-subtext">
          Thank you for your purchase. Your order has been successfully placed.
        </p>

        {/* ORDER INFO */}
        <div className="order-info">
          <p><strong>Order ID:</strong> {order.id}</p>
          <p><strong>Total Paid:</strong> ₹{order.amount}</p>
          <p><strong>Confirmation sent to:</strong> {order.email}</p>
        </div>

        {/* BUTTONS */}
        <div className="success-actions">
          <button
            className="btn primary"
            onClick={() => navigate("/collections")}
          >
            Continue Shopping
          </button>

          <button
            className="btn secondary"
            onClick={() => navigate("/orders")}
          >
            View Orders
          </button>
        </div>

      </div>
    </div>
  );
};

export default OrderSuccessPage;