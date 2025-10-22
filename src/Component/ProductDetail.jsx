import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faGreaterThan,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import back from "../assets/screen.jpeg";

import {  NavLink } from "react-router-dom";

import prodata from "../data/prodata.json";
import data from "../data/data.json";
import datas from "../data/datas.json";


import font1 from "../assets/font1.svg";
import font2 from "../assets/font2.svg";
import font3 from "../assets/font3.svg";

import fullscreen from "../assets/fullscreen.webp";
import fsaree from "../assets/fsaree.webp";
import le from "../assets/le.webp";
import fmens from "../assets/fmens.webp";
import fjewel from "../assets/fjewel.webp";

import f2screen from "../assets/f2screen.webp";
import f21 from "../assets/f21.webp";
import f22 from "../assets/f22.webp";
import f23 from "../assets/f23.webp";
import f24 from "../assets/f24.webp";

import mi from "../assets/mi.webp";
import ba from "../assets/ba.webp";
import wow from "../assets/wow.webp";
import mama from "../assets/mama.webp";
import wild from "../assets/wild.webp";
import plom from "../assets/plom.webp";
import nivea from "../assets/nivea.webp";
import himla from "../assets/himla.webp";
import { useState } from "react";




function ProductDetail() {
  const [search, setSearch] = useState("");
  
  
const filteredProducts = prodata.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
  const logos = [mi, ba, wild, wow, mama, plom, mi, himla, nivea];


    const items = ["Women T-Shirt", "Men T-Shirt", "Jeans", "Dresses", "Shoes","Dressess","Watches","Bike covers","Blouses","Boxes","DUPatta","kids toys","jewellery set","growns","kurta tools","kurtis","jars","lunchboxes","men jewellery","men shirts"];

  return (
    <>
      <div className="backpic">
        <img src={back} alt="" className="backpics" />
        <div className="content">
          <h1>Smart Shopping Trusted by Millions</h1>

          <button className="btn-btn-outline">Shop Now</button>
        </div>
      </div>
      {/*  */}
      <div className="font">
        <p>
          {" "}
          <img src={font1} alt="" className="fonts" />7 Days Cash Return
        </p>
        <p>
          {" "}
          <img src={font2} alt="" className="fonts" />
          cash on delivery
        </p>
        <p>
          {" "}
          <img src={font3} alt="" className="fonts" />
          Lowest Price
        </p>
      </div>
      {/*  */}
      <div className="card-container">
        {data.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.title} />
          </div>
        ))}
      </div>
      {/*  */}
      <div className="screen">
        <img src={fullscreen} alt="" className="firstimgs" />
        <div className="full-sec">
          {[le, fmens, fsaree, fjewel].map((img, i) => (
            <NavLink to="/product2" key={i}>
              <img
                src={img}
                alt="Product"
                style={{ cursor: "pointer" }}
                loading="lazy"
              />
            </NavLink>
          ))}
        </div>
        <div className="btn">
          <button className="btns">shop now</button>
        </div>
      </div>
      {/*  */}
      <div className="brand">
        <h1>
          Original Brands
          <FontAwesomeIcon icon={faCircleCheck} className="circle" />
        </h1>
          <NavLink to="/product2" className="views">
            View All
            <FontAwesomeIcon icon={faGreaterThan} className="greater" />
          </NavLink>
      </div>
      <div className="card-container">
        {datas.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.title} />
          </div>
        ))}
      </div>
      {/*  */}
      <div className="company-marquee">
        <div className="marquee-content">
          {[...logos, ...logos].map((logo, index) => (
            <p key={index}>
              <img src={logo} alt={`logo-${index}`} />
            </p>
          ))}
        </div>
      </div>
      {/*  */}
      <div className="screen">
        <img src={f2screen} alt="" className="firstimgs" loading="lazy" />
        <div className="full-secs">
          {[f21, f22, f23, f24].map((img, i) => (
            <img src={img} alt="" key={i} loading="lazy" />
          ))}
        </div>
        <div className="btnse">
          {["Dhanteras", "Diwali", "Bhai Dooj", "Chhat Pooja"].map((btn) => (
            <button key={btn} className="btnss">
              {btn}
            </button>
          ))}
        </div>
        <div className="btn">
          <button className="btns">shop now</button>
        </div>
      </div>
      {/*
       */}

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
                  {" "}
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
                    <NavLink to={`/${product.id}`}>
                      <Card.Img variant="top" src={product.image} />
                    </NavLink>

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
    </>
  );
}

export default ProductDetail;
