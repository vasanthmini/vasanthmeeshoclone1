import logo1 from "../assets/logoname.jpeg";

import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch,faUser,faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import prodata from "../data/prodata.json";
import { useState } from "react";

export default function Navbar({count,click}) {
  const [search,setSearch]=useState([])
  const searchdata=prodata.find((item)=>{
    item.title.toLowerCase().includes(search.toLowerCase)
  })

  return (
    <>
      <div className="Main">
        <div className="line"></div>
        <div className="nav-section">
          <div className="section1">
            <img src={logo1} alt="" className="logos" />
            <FontAwesomeIcon icon={faSearch} className="logo1" />
            <input
              className="search"
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="        Try Saree,Kurti or search by product code"
            />

            {/* <input
              className="search"
              type="search"
              placeholder="        Try Saree,Kurti or search by product code"
            /> */}
          </div>

          <div className="section2">
            <div className="nav-item navv-items">
              <p>Become a supplier </p>
            </div>
            <div className="nav-item navv-items">
              <p>Investor Relations</p>
            </div>
            <div className="nav-item">
              <FontAwesomeIcon icon={faUser} className="icon" />
              <p>Profile</p>
            </div>
            <div className="nav-item">
              <FontAwesomeIcon icon={faShoppingCart} className="icon" />
              <p onClick={() => click()}>Cart ({count})</p>
            </div>
          </div>
        </div>
        <div className="line"></div> {/*  */}
        <div className="list-con">
          <ul className="list-sec">
            <li className="lists">Women Ethnic</li>
            <li className="lists">Women Western</li>
            <li className="lists">Men</li>
            <li className="lists">Kids</li>
            <li className="lists">Home & Kitchen</li>
            <li className="lists"> Beauty & Health</li>
            <li className="lists">Jewllery & Accessories</li>
            <li className="lists">Bags & footwear</li>
            <li className="lists">Electornics</li>
            <li className="lists">sports & fitness</li>
            <li className="lists">car & motorbike</li>
            <li className="lists">office&supplies</li>
          </ul>
        </div>
        <div className="line"></div>
      </div>

      {/*  */}
      {/*  */}
    </>
  );
}
