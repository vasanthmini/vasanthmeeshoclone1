import { Routes, Route } from "react-router-dom";
import ProductDetail from "./ProductDetail";
// import Navbar from "./Navbar";
export default function Portal() {
  return (
      <Routes>
        {/* <Route path="/" element={<Navbar />} /> */}
        <Route path="/productdetail" element={<ProductDetail />} />
      </Routes>
  );
}
