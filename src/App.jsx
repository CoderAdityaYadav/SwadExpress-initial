import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import VendorPage from "./pages/VendorPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import AccountPage from "./pages/AccountPage";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Login state

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div>
        {isLoggedIn && <Navbar cartItems={cartItems} />}
        <main className={isLoggedIn ? "mt-16" : ""} style={isLoggedIn ? {} : { margin: 0, padding: 0 }}>
        <Routes>
          <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
          <Route path="/vendor/:id" element={isLoggedIn ? <VendorPage addToCart={addToCart} /> : <Navigate to="/login" />} />
          <Route path="/cart" element={isLoggedIn ? <CartPage cartItems={cartItems} /> : <Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/account" element={isLoggedIn ? <AccountPage /> : <Navigate to="/login" />} />
        </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
