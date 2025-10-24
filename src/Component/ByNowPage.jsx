import { useLocation, Link } from "react-router-dom";
import "./CartPage.css";

export default function BuyNowPage() {
  const location = useLocation();
  const { product } = location.state || {};

  if (!product) {
    return <h2>No product selected for purchase!</h2>;
  }

  return (
    
     <div className="cart-items">
          <h4 className="cart-title">Purchase Details</h4>

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
               
                <Link to="/" className="Continue-Shopping">
                  confirm order
                </Link>
              </div>
            </div>
          
        </div>
  );
}
