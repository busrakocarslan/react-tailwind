import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Username from "../components/Username";
import Password from "../components/Password";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import NotFound from "../pages/NotFound";

const Approuter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}>
            <Route path="/username" element={<Username />} />
            <Route path="/password" element={<Password />} />
          </Route>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Approuter;
