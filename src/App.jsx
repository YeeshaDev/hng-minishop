//import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Checkout from "../pages/Checkout";
function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-[1250px]  mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
