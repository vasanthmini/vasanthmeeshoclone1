import { useLocation, Link } from "react-router-dom";

export default function BuyNowPage() {
  const location = useLocation();
  const { product } = location.state || {};

  if (!product) {
    return <h2>No product selected for purchase!</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>💳 Checkout Page</h1>
      <img src={product.image} alt={product.title} width="200" />
      <h2>{product.title}</h2>
      <p>Price: ₹{product.price}</p>
      <p>Delivery: {product.delivery}</p>
      <h3>Total Amount: ₹{product.price}</h3>
      <Link to="/">
        <button>Confirm Order</button>
      </Link>
    </div>
  );
}
