import React from "react";
import { FaSearchengin } from "react-icons/fa6";
const SearchInput = ({setSearch,search}) => {
  return (
    <div className="">
      <div className="relative w-6/12 mx-auto">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <FaSearchengin />
        </div>
        <input
          type="search"
          onChange={(e)=>setSearch(e.target.value)}
          id="default-search"
          className="block outline-none w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  focus:border-gray-900  focus:text-black"
          placeholder="Search products..."
          value={search}
        />
      </div>
    </div>
  );
};

export default SearchInput;
