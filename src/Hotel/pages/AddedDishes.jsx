import React from 'react'
import { FaSearch } from "react-icons/fa";

function AddedDishes() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Hotel Added Foods
      </h1>

      {/* Search Bar */}
      <div className="max-w-xl mx-auto mb-8 flex items-center gap-3 bg-white shadow p-3 rounded-xl">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search foods..."
          className="w-full outline-none text-lg bg-transparent"
        />
      </div>

      {/* Food Cards */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 max-w-6xl mx-auto">
        
          <div
            
            className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4"
          >
            <img
              src="https://via.placeholder.com/400"
              alt="Food"
              className="w-full h-48 object-cover rounded-xl mb-3"
            />

            <h2 className="text-xl font-semibold mb-1">Food Name</h2>
            <p className="text-gray-600 text-sm mb-2">
              Sample food description goes here.
            </p>
            <p className="font-bold text-lg">₹ 199</p>
          </div>
       
      </div>
    </div>
    
    </>
  )
}

export default AddedDishes