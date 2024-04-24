import React, { useContext, useEffect, useState } from "react";
import  { createContext } from 'react'
import axios from "axios";






const ProductContext=createContext()
export const useProductsContext=()=>{
    return useContext(ProductContext)
}
const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
  
    const getData = async () => {
      setLoading(true)
      try {
        const { data } = await axios(
          `https://dummyjson.com/products/search?q=${search}&skip=30` //skip ile 30 üründen başladım api en fazla 30 ürün verdiğinden limiti de 30 yaptım
        );
        console.log(data);
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false)
      }
    };
    useEffect(() => {
      getData();
    }, [search]);
  
    const values={products,loading,search,setSearch}
  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  )
}

export default ProductProvider
