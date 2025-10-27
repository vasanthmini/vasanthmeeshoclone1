import { useParams, Link, useNavigate } from "react-router-dom";
import prodata from "../data/prodata.json";
import prodetail from "../data/Prodetail.json";
import dis from "../assets/dis.webp";
import "./DetailPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBolt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Loader from "./Loader"; // Import loader

export default function ProductDetailPage({ addcart }) {
  const { id } = useParams();
  const productPage = prodata.find((p) => p.id === parseInt(id));
  const detail = prodetail.find((p) => p.id === parseInt(id));
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // loading state

  if (!productPage) return <h2>Product not found!</h2>;

  // Add to cart handler with loader
  const handleAddToCart = (product) => {
    setLoading(true);
    setTimeout(() => {
      addcart(product);
      navigate("/product2");
    }, 1000);
  };

  // Buy now handler with loader
  const handleBuyNow = (product) => {
    setLoading(true);
    setTimeout(() => {
      navigate("/buynow", { state: { product } });
    }, 1000);
  };

  // Show full-page loader
  if (loading) return <Loader message="Processing..." />;

  return (
    <div className="product-detail-page">
      {/* Back / discount section */}
      <div className="dis-sec">
        <img src={dis} alt="Discount" className="dis" />
      </div>

      <div className="product-main">
        {/* Left: image and actions */}
        <div className="product-image">
          <Link to="/" className="Links">
            ← Back to Products
          </Link>
          <img src={productPage.image} alt={productPage.title} />
          <div className="product-actions">
            <button
              className="btn-cart"
              onClick={() => handleAddToCart(productPage)}
            >
              <FontAwesomeIcon icon={faShoppingCart} className="icons" /> Add to
              Cart
            </button>

            <button
              className="btn-buy"
              onClick={() => handleBuyNow(productPage)}
            >
              <FontAwesomeIcon icon={faBolt} className="icons" /> Buy Now
            </button>
          </div>
        </div>

        {/* Right: product info */}
        <div className="product-info">
          <h1 className="product-titles">{productPage.title}</h1>
          <div className="prices">₹{productPage.price}</div>
          <div className="deliverys">{productPage.delivery}</div>
          <div
            className={productPage.rating >= 4 ? "ratings-high" : "ratings-low"}
          >
            {productPage.rating} ⭐
          </div>
          <div className="reviews">{productPage.review} Reviews</div>

          {/* Size selector */}
          <div className="size-selector">
            <h3>Select size</h3>
            <div className="size">
              {["S", "M", "L", "XL", "XXL", "XXXL"].map((size) => (
                <p key={size}>{size}</p>
              ))}
            </div>
          </div>

          {/* Product details */}
          <div className="product-details">
            <h2>Product Details</h2>
            <div key={detail.id}>
              <h3>{detail.title}</h3>
              <p>
                <strong>Fabric:</strong> {detail.fabric}
              </p>
              <p>
                <strong>Sleeve Length:</strong> {detail.sleeve_length}
              </p>
              <p>
                <strong>Pattern:</strong> {detail.pattern}
              </p>
              <p>
                <strong>Fit:</strong> {detail.fit}
              </p>
              <p>
                <strong>Price:</strong> ₹{detail.price}
              </p>
              <p>
                <strong>Rating:</strong> {detail.rating} ⭐
              </p>
              <p>
                <strong>Delivery:</strong> {detail.delivery}
              </p>
              <p>
                <strong>Reviews:</strong> {detail.review}
              </p>
            </div>
          </div>

          {/* Ratings summary */}
          <div className="product-ratings">
            <h3>Product Ratings & Reviews</h3>
            <div className="overall-rating">
              <span className="rating-number">3.7</span>
              <span className="rating-text">
                216,739 Ratings, 61,810 Reviews
              </span>
            </div>
            <div className="rating-breakdown">
              {[
                { label: "Poor", count: "30,918" },
                { label: "Average", count: "16,248" },
                { label: "Good", count: "32,809" },
                { label: "Very Good", count: "44,774" },
                { label: "Excellent", count: "91,990" },
              ].map((r) => (
                <div className="rating-row" key={r.label}>
                  <span className="rating-label">{r.label}</span>
                  <span className="rating-count">{r.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
