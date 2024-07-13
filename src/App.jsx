//import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Checkout from "../pages/Checkout";
import ProductDetails from "../pages/ProductDetails";
import SeeAll from "../pages/SeeAll";
function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-[1250px]  mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product_details/:id" element={<ProductDetails />} />
          <Route path="/products" element={<SeeAll />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
