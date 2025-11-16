import React from "react";
import { Link } from "react-router-dom";

function Commonheader() {
  return (
    <>
      <header className="w-full h-15 bg-amber-50 shadow">
        <div className="flex items-center justify-between  px-4 py-3 md:px-10">
          
         
          <h1 className="font-bold text-3xl text-red-600">Food APP</h1>

          {/* Navigation */}
       <nav
  className="
    text-sm md:text-base 
    flex items-center gap-4 
    flex-col sm:flex-row
  "
>
  <Link
    to="/about"
    className="text-gray-700 hover:text-red-600 font-medium"
  >
    About Us
  </Link>

  <Link
    to="/contact"
    className="text-gray-700 hover:text-red-600 font-medium"
  >
    Contact
  </Link>

  <button className="bg-black px-5 py-2 rounded-2xl text-white border hover:bg-white hover:text-black">
    <Link to="/login" className="block w-full text-center">
      Login
    </Link>
  </button>
</nav>

        </div>
      </header>
    </>
  );
}

export default Commonheader;
