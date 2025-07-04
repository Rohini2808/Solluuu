import React from "react";
import { FaPlus, FaFilter } from "react-icons/fa";
import { BsPatchCheckFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between w-full sticky top-0 z-50">
  
      <div className="text-2xl sm:text-3xl font-bold text-blue-600 font-cursive tracking-wide">
        Solluuu
      </div>

      
      <div className="flex flex-wrap gap-3 items-center justify-end mt-3 sm:mt-0">
        
        <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full font-medium text-black hover:bg-gray-200 transition">
          <span className="text-lg">🔁</span>
          <span className="text-sm sm:text-base">6391</span>
          <FaPlus className="text-gray-600 cursor-pointer text-sm sm:text-base hover:text-gray-800" />
        </div>

        
        <button className="flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium text-sm hover:bg-purple-200 transition">
          <BsPatchCheckFill className="text-purple-600 text-sm sm:text-base" />
          <span className="hidden sm:inline">Badges</span>
        </button>

       
        <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-1 rounded-full font-medium text-sm flex items-center gap-2 transition">
          <FaFilter />
          <span className="hidden sm:inline">Filters</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;