import React from "react";
import { FaSearchengin } from "react-icons/fa6";
const SearchInput = ({setSearch,search,category,setCategory}) => {
  return (
    <div className="">
      <div className="w-auto">
        
        <input
          type="search"
          onChange={(e)=>setSearch(e.target.value)}
          id="default-search"
          className="block outline-none w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  focus:border-gray-900  focus:text-black"
          placeholder="Search products..."
          value={search}
        />
        <div>
        <button className="border-2 border-orange-400 text-gray-600 font-montepasifico rounded-xl p-2 m-3 hover:bg-gray-600 hover:text-orange-400" onClick={()=>setCategory("")}>All</button>
        <button className="border-2 border-orange-400 text-gray-600 font-montepasifico rounded-xl p-2 m-3 hover:bg-gray-600 hover:text-orange-400" onClick={()=>setCategory("home")}>Home-Decoration</button>
        <button className="border-2 border-orange-400 text-gray-600 font-montepasifico rounded-xl p-2 m-3 hover:bg-gray-600 hover:text-orange-400" onClick={()=>setCategory("laptop")}>Laptops</button>
        <button className="border-2 border-orange-400 text-gray-600 font-montepasifico rounded-xl p-2 m-3 hover:bg-gray-600 hover:text-orange-400" onClick={()=>setCategory("bag")}>Bag</button>
        <button className="border-2 border-orange-400 text-gray-600 font-montepasifico rounded-xl p-2 m-3 hover:bg-gray-600 hover:text-orange-400" onClick={()=>setCategory("glasses")}>Glasses</button>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
