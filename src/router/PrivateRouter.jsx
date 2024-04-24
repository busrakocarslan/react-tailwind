import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivateRouter = () => {
  const { user } = useContext(AuthContext);
  return user ? (
  <>
      <Navbar />
       <Outlet />
       <Footer/>
       </> 
       ):( <Navigate to="/dashboard" />

  );
};

export default PrivateRouter;
