import { useLocation, NavLink } from "react-router-dom";
import "./CartPage.css";
import cash from "../assets/cash.webp"; // ensure this import is correct

export default function BuyNowPage() {
  const location = useLocation();
  const { product } = location.state || {};

  if (!product) {
  return <h2>No product selected for purchase!</h2>;
  }

  const totalPrice = product.price;
  const discount = 52;
  const serviceCharge = 45;
  const grandTotal = totalPrice + serviceCharge - discount;

  return (
    <div className="cart-page">
      <div className="cart-container">
        {/* Product Details */}
        <div className="cart-items">
          <h4 className="cart-title">Purchase Product Details</h4>

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

              <NavLink to="/" className="Continue-Shopping">
                Confirm order
              </NavLink>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="cart-summary">
          <h4>Price Details </h4>
          <p className="summary-row">
            <span>Total Product Price</span>
            <span>₹{totalPrice}</span>
          </p>
          <p className="summary-row">
            <span>Service Charge:</span>
            <span>₹{serviceCharge}</span>
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
          <p className="offer">🎉 Yay! Your total discount is ₹{discount}</p>
          <p className="money">
            Clicking on 'Continue' will not deduct any money
          </p>
          <button className="continue">
            <NavLink to="/" >
              Confirm order
            </NavLink>
          </button>
          <div>
            <img src={cash} alt="cash illustration" className="cash" />
          </div>
        </div>
      </div>
    </div>
  );
}
