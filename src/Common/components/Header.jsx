import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>    <header className="w-full shadow-md bg-white  top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-red-600">
          Food<span className="text-gray-800">app</span>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          
         
          <Link to="/contact" className="hover:text-red-600 duration-200">Contact</Link>
           <Link  to="/login" className="hover:text-red-600 duration-200">login</Link>
  </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden flex flex-col space-y-1">
          <span className="block w-6 h-0.5 bg-gray-700"></span>
          <span className="block w-6 h-0.5 bg-gray-700"></span>
          <span className="block w-6 h-0.5 bg-gray-700"></span>
        </button>
      </div>
    </header>  </>
  )
}

export default Header