import { NavLink } from "react-router-dom";
import shopcart from "../assets/shopcart2.jpg";
import "./CartPage.css";

export default function CartPage({ cartItems, removes }) {
  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="empty-cart-container">
        <img src={shopcart} alt="" className="shopcart" />
        <h4 className="empty-cart">Your Cart is empty</h4>
        <p>Just relax, let us help you find some first-class products</p>
        <button className="shop-btn">
          <NavLink to="/" className="shop-btns">
            Start Shopping
          </NavLink>
        </button>
      </div>
    );
  }

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
  const serviceCharge = 45; // default service charge
  const grandTotal = totalPrice + serviceCharge;

  return (
    <div className="cart-page">
      <h1 className="cart-title">🛒 Your Cart</h1>
      <div className="cart-container">
        {/* Cart Items */}
        <div className="cart-items">
          {cartItems.map((product) => (
            <div className="cart-item" key={product.id}>
              <img
                src={product.image}
                alt={product.title}
                className="cart-item-img"
              />
              <div className="cart-item-details">
                <h2>{product.title}</h2>
                <p>Price: ₹{product.price}</p>
                <p>Delivery: {product.delivery}</p>
                <div className="cart-item-buttons">
                  <button onClick={() => removes(product.id)}>Remove</button>
                  <NavLink to="/buynow" state={{ product }}>
                    <button>Proceed to Buy</button>
                  </NavLink>
                </div>
                <NavLink to="/">← Continue Shopping</NavLink>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="cart-summary">
          <h3>Cart Summary</h3>
          <p className="summary-row">
            <span>Subtotal:</span>
            <span>₹{totalPrice}</span>
          </p>
          <p className="summary-row">
            <span>Service Charge:</span>
            <span>₹{serviceCharge}</span>
          </p>
          <hr />
          <p className="summary-row total">
            <span>Total:</span>
            <span>₹{grandTotal}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
