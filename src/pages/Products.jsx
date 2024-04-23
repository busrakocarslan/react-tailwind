import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const getData = async () => {
    setLoading(true)
    try {
      const { data } = await axios(
        `https://dummyjson.com/products/search?q=${search}&skip=60&&limit=30` //skip ile 30 üründen başladım api en fazla 30 ürün verdiğinden limiti de 30 yaptım
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
  }, []);

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:py-20 lg:max-w-7xl lg:px-8 ">
      <h3 className="text-orange-400 font-extrabold text-2xl text-center tracking-tighter ">
        PRODUCTS
      </h3>
      {loading ? (
        <Loading />
      ) : (
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
//
