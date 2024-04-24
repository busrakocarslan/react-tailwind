import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";

const ProductContext = createContext();
export const useProductsContext = () => {
  return useContext(ProductContext);
};
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const getData = async () => {
    setLoading(true);
    try {
      let apiUrl = `https://dummyjson.com/products`; //skip ile 30 üründen başladım api en fazla 30 ürün verdiğinden limiti de 30 yaptım
      if (category) {
        apiUrl += `/search?q=${category}`;
      } else {
        apiUrl += `/search?q=${search}&skip=60`;
      }
      const { data } = await axios(apiUrl);
      console.log(data);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, [search, category]);

  const values = {
    products,
    loading,
    search,
    setSearch,
    category,
    setCategory,
  };
  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;
