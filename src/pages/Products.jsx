import axios from "axios";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";
import SearchInput from "../components/SearchInput";
import { useProductsContext } from "../context/ProductProvider";
import { GiH2O } from "react-icons/gi";


const Products = () => {
  const {products,loading,setSearch,search}=useProductsContext()
 
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:py-20 lg:max-w-7xl lg:px-8 ">
      <SearchInput setSearch={setSearch} search={search}/>
      <h3 className="text-orange-400 font-extrabold text-2xl text-center tracking-tighter ">
        PRODUCTS
      </h3>
      {loading ? (
        <Loading />
      ) : products.length ? (
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      ) : ( <h2 className="text-center text-3xl text-red-500 mt-32 uppercase">No products</h2> )}
    </div>
  );
};

export default Products;
//
