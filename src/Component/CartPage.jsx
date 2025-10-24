import { NavLink } from "react-router-dom";
import shopcart from "../assets/shopcart2.jpg";
import "./CartPage.css";
import cash from "../assets/cash.webp";



export default function CartPage({count,cartItems, removes }) {
  
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
  const discount=52;
  const serviceCharge = 45; // default service charge
  const grandTotal = totalPrice + serviceCharge - discount;

  return (
    <div className="cart-page">
      <div className="cart-container">
        {/* Cart Items */}

        <div className="cart-items">
          <h4 className="cart-title">Product Details</h4>

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
                  <button onClick={() => removes(product.id)}> x Remove</button>
                  <NavLink to="/buynow" state={{ product }}>
                    <button>Proceed to Buy</button>
                  </NavLink>
                </div>
                <NavLink to="/" className="Continue-Shopping">
                  ← Continue Shopping
                </NavLink>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="cart-summary">
          <h4>Price Details ({count}items)</h4>
          <p className="summary-row">
            <span>Total Product Price </span>
            <span>+₹{totalPrice}</span>
          </p>
          <p className="summary-row">
            <span>Service Charge:</span>
            <span>+₹{serviceCharge}</span>
          </p>
          <p className="summary-row-discount">
            <span>Total Discount</span>
            <span>-₹{discount}</span>
          </p>
          <hr />
          <p className="summary-row total">
            <span>Order Total</span>
            <span>₹{grandTotal}</span>
          </p>
          <p className="offer">
            <span>offer Yay! Your total discount is ₹50</span>
          </p>
          <p className="money">
            {" "}
            Clicking on 'Continue' will not deduct any money
          </p>
          <button className="continue">Continue</button>
          <div>
            <img src={cash} alt="" className="cash" />
          </div>
        </div>
      </div>
    </div>
  );
}
