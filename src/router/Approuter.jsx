import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Username from "../components/Username";
import Password from "../components/Password";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import NotFound from "../pages/NotFound";
import Navbar from "../components/Navbar";
import PrivateRouter from "./PrivateRouter";
import ProductDetail from "../pages/ProductDetail";
import Contact from "../pages/Contact";
import ComingSoon from "../pages/ComingSoon";

const Approuter = () => {
  return (
    <div>
      {/* <BrowserRouter> */}
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Login />}>
          <Route path="/username" element={<Username />} />
          <Route path="/password" element={<Password />} />
        </Route>
        <Route path="/dashboard" element={<PrivateRouter />}>
          {/*privite router dosyasında bşr koşul oluşturduğumuz için burayı direk o elemenete bağladık */}
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="contact" element={<Contact/>}/>
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/comingsoon" element={<ComingSoon/>}/>
      </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
};

export default Approuter;
