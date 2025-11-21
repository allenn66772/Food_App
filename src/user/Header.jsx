import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <header className="w-full bg-linear-to-r from-orange-600 to-amber-600 shadow-xl py-4 px-6 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-3xl font-extrabold text-white drop-shadow cursor-pointer">
          Foodapp
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10 text-white font-semibold text-lg">
          <a href="#" className="hover:text-gray-200 transition">Home</a>
          {/* <a href="#" className="hover:text-gray-200 transition">Restaurants</a> */}
          {/* <a href="#" className="hover:text-gray-200 transition">Offers</a> */}
          {/* <a href="#" className="hover:text-gray-200 transition">LogOut</a> */}
        </nav>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-6">

          {/* Cart */}
         <Link to="/cart">
            <div className="relative cursor-pointer">
              <span className="text-white text-2xl">🛒</span>
              <span className="absolute -top-2 -right-2 bg-white text-orange-600 text-xs font-bold rounded-full px-2 py-0.5 shadow">
                3
              </span>
            </div>
         </Link>

          {/* Profile */}
  <details className="relative inline-block">
  <summary className="list-none cursor-pointer">
    <img
      src="https://i.pravatar.cc/40"
      alt="User"
      className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
    />
  </summary>

  <div
    className="absolute right-0 mt-3 w-44 bg-white shadow-xl rounded-xl p-3
               animate-dropdown"
  >
    <ul className="text-sm text-gray-700 space-y-2">
      <Link to='/profile' className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer">Profile</Link>
      
      <li className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer">Logout</li>
    </ul>
  </div>
</details>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden flex flex-col space-y-1">
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>

      </div>
    </header>
    </>
  )
}

export default Header