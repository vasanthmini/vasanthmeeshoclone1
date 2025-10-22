

import Card from "react-bootstrap/Card";
import prodata from "../data/prodata.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
function Product2() {

    const items = [
      "Women T-Shirt",
      "Men T-Shirt",
      "Jeans",
      "Dresses",
      "Shoes",
      "Dressess",
      "Watches",
      "Bike covers",
      "Blouses",
      "Boxes",
      "DUPatta",
      "kids toys",
      "jewellery set",
      "growns",
      "kurta tools",
      "kurtis",
      "jars",
      "lunchboxes",
      "men jewellery",
      "men shirts",
    ];

    const [search, setSearch] = useState("");
    
    const filteredProducts = prodata.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
  return (
    <div className="product-con">
      <h1>Products For You</h1>

      <div className="product-section">
        <div className="product-left">
          <select>
            <option value="">sort by: Discount</option>
            <option value="Relevance">sort by: Relevance</option>
            <option value="New Arrivals">sort by: New Arrivals</option>
            <option value="price(Highe to Low)">
              sort by: price(Highe to Low)
            </option>
            <option value="price (Low to High)">
              sort by: price (Low to High)"
            </option>
            <option value="Relevance">sort by: Rating</option>
          </select>
          <div className="left">
            <div className="lefts">
              <h4>FILITERS</h4>
              <p>{prodata.length}+ products</p>
            </div>

            <select>
              <option value="">Category</option>
              <option value="Relevance">Relevance</option>
              <option value="Gender">Gender</option>
              <option value="Rating">Rating</option>
              <option value="color">color </option>
              <option value="fabric">fabric </option>
              <option value="size">size</option>
            </select>
          </div>
          <div className="checked">
            <FontAwesomeIcon icon={faSearch} className="searchlogo1" />
            <input
              type="search"
              name=""
              id=""
              placeholder="       search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="checkeds"
            />
          </div>
          {/*  */}
          <div className="check-box">
            {items.map((item, index) => (
              <div className="check-con" key={item}>
                <input
                  type="checkbox"
                  id={`checkbox-${index}`} // unique id
                  name="category"
                  className="box"
                />
                <label htmlFor={`checkbox-${index}`}>{item}</label>
              </div>
            ))}
          </div>
        </div>
        {/* right */}
        <div className="product-right">
          <div className="d-flex gap-3 flex-wrap">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Card style={{ width: "18rem" }} key={product.id}>
                  <Link to={`/${product.id}`}>
                    <Card.Img variant="top" src={product.image} />
                  </Link>

                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                      <span className="price">₹{product.price}</span>
                      <br />
                      <span className="delivery">{product.delivery}</span>
                      <br />
                      <span
                        className={
                          product.rating >= 4 ? "rating-high" : "rating-low"
                        }
                      >
                        {product.rating} ⭐
                      </span>
                      <br />
                      <span className="review">{product.review}</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product2