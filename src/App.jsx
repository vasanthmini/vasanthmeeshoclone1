import {  Routes, Route,useNavigate } from "react-router-dom";
import Navbar from "./Component/Navbar";
import ProductDetail from "./Component/ProductDetail";
import ProductDetailPage from "./Component/ProductDetailPage";
import Product2 from "./Component/Product2";
import BuyNowPage from "./Component/ByNowPage";
import CartPage from "./Component/CartPage";
import { useState } from "react";

function App() {
  
    const navigate = useNavigate();

  const[cartss,setCartss]=useState(0);
  
  const [cartItems, setCartItems] = useState([]);
  
  function addone(product) {
    setCartss((prev) => prev + 1);
        setCartItems((prev) => [...prev, product]);
  }
  
  function remove(id) {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
        setCartss((prev) => (prev > 0 ? prev - 1 : 0));

  }
  
  function cartdet() {
    navigate("/cart");
  }

  return (
    <div>
      {/* Navbar always visible */}
      <Navbar count={cartss} click={cartdet} />

      {/* Define routes */}
      <Routes>
        <Route path="/" element={<ProductDetail />} />
        <Route path="/product2" element={<Product2 />} />
        <Route path="/:id" element={<ProductDetailPage addcart={addone} />} />
        <Route
          path="/cart"
          element={<CartPage cartItems={cartItems} removes={remove} />}
        />
        <Route path="/buynow" element={<BuyNowPage />} />
      </Routes>
    </div>
  );
}

export default App;
