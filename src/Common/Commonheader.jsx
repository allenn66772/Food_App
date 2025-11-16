import React from "react";
import { Link } from "react-router-dom";

function Commonheader() {
  return (
    <>
      <header className="w-full bg-white shadow">
        <div className="flex items-center justify-between px-4 py-3 md:px-10">
          
          {/* Logo */}
          <img
            width="70"
            height="40"
            className="object-contain"
            src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY="
            alt="logo"
          />

          {/* Navigation */}
          <nav className="text-sm md:text-base">
            <Link
              to="/about"
              className="text-gray-700 hover:text-red-600 font-medium"
            >
              About Us
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Commonheader;
