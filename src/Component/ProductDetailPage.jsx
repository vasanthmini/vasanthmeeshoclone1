import { useParams, Link,useNavigate } from "react-router-dom";
import prodata from "../data/prodata.json";
import prodetail from "../data/prodetail.json";

// import prodetail from "../data/prodetail.json";


import dis from "../assets/dis.webp";
import "./DetailPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart,faBolt} from "@fortawesome/free-solid-svg-icons";
// import { useState } from "react";

export default function ProductDetailPage({addcart}) {
  const { id } = useParams();
  const productPage = prodata.find((p) => p.id === parseInt(id));
  const detail = prodetail.find((p) => p.id === parseInt(id));
  // const [carts, setCarts] = useState(0);
  const navigate = useNavigate();
  // const addToCart = () => {
  //   setCarts(carts + 1);
  //   navigate("/cart", { state: { product: productPage } });
  // };

  const buyNow = () => {
    navigate("/buynow", { state: { product: productPage } });
  };



  if (!productPage) return <h2>Product not found!</h2>;

  return (
    <div className="product-detail-page">
      {/* Back / discount section */}
      <div className="dis-sec">
        <img src={dis} alt="Discount" className="dis" />
      </div>

      {/* Main content: left image, right details */}
      <div className="product-main">
        {/* Left side: product image */}
        <div className="product-image">
          <Link to="/" className="Links">
            ← Back to Products
          </Link>
          <img src={productPage.image} alt={productPage.title} />
          <div className="product-actions">
            <button className="btn-cart"  onClick={() => addcart(productPage)}>
              <FontAwesomeIcon icon={faShoppingCart} className="icons" /> Add to
              Cart
              {/* <span>{count}</span> */}
            </button>

            <button className="btn-buy" onClick={buyNow}>
              <FontAwesomeIcon icon={faBolt} className="icons" /> Buy Now
            </button>
          </div>
        </div>

        {/* Right side: product info */}
        <div className="product-info">
          <h1 className="product-titles">{productPage.title}</h1>
          <div className="prices">₹{productPage.price}</div>
          <div className="deliverys">{productPage.delivery}</div>
          <div
            className={productPage.rating >= 4 ? "ratings-high" : "ratings-low"}
          >
            {productPage.rating} ⭐
          </div>{" "}
          <div className="reviews">{productPage.review} Reviews</div>
          {/* Size selection */}
          <div className="size-selector">
            <h3>Select size</h3>
            <div className="size">
              <p>S</p>
              <p>M</p>
              <p>L</p>
              <p>XL</p>
              <p>XXL</p>
              <p>XXXL</p>
            </div>
          </div>
          {/* Product description/details */}
          <div className="product-details">
            <h2>Product Details</h2>
            <div className="product-details">
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
          </div>
          <div className="product-ratings">
            <h3>Product Ratings & Reviews</h3>

            <div className="overall-rating">
              <span className="rating-number">3.7</span>
              <span className="rating-text">
                216,739 Ratings, 61,810 Reviews
              </span>
            </div>

            <div className="rating-breakdown">
              <div className="rating-row">
                <span className="rating-label">Poor</span>
                <span className="rating-count">30,918</span>
              </div>
              <div className="rating-row">
                <span className="rating-label">Average</span>
                <span className="rating-count">16,248</span>
              </div>
              <div className="rating-row">
                <span className="rating-label">Good</span>
                <span className="rating-count">32,809</span>
              </div>
              <div className="rating-row">
                <span className="rating-label">Very Good</span>
                <span className="rating-count">44,774</span>
              </div>
              <div className="rating-row">
                <span className="rating-label">Excellent</span>
                <span className="rating-count">91,990</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
