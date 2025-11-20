import React, { useState } from 'react'
import Footer from '../user/Footer'
import Hotelheader from './Hotelheader'

function AddedDishes() {
    const [openModal, setOpenModal] = useState(false);
  return (
    <>
    
    <Hotelheader/>
      <div className="min-h-screen bg-gray-100 p-6">
        {/* Page Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Manage Your Food Items
          </h1>
          <button
            onClick={() => setOpenModal(true)}
            className="bg-amber-500 text-white px-5 py-2 rounded-xl shadow hover:bg-amber-600"
          >
            + Add New Item
          </button>
        </header>

        {/* Food Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1604909052688-c3a3b9f73a7d"
              className="w-full h-40 object-cover"
              alt="Food"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">Paneer Butter Masala</h2>
              <p className="text-gray-600 text-sm mt-1">
                Creamy curry served with naan or rice.
              </p>

              <div className="mt-3 flex items-center gap-3">
                <span className="text-lg font-bold text-amber-600">₹299</span>
                <span className="text-sm line-through text-gray-400">₹350</span>
                <span className="bg-green-500 text-xs text-white px-2 py-1 rounded">
                  15% OFF
                </span>
              </div>

              <div className="flex justify-between mt-4">
                <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------ */}
        {/* ADD FOOD MODAL */}
        {/* ------------------------------------------------ */}
        {openModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white w-11/12 max-w-lg rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Add New Food Item
              </h2>

              {/* Form Inputs (Design Only) */}
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Food Name"
                  className="w-full border rounded-lg p-2"
                />
                <textarea
                  placeholder="Food Description"
                  className="w-full border rounded-lg p-2 h-24"
                ></textarea>
                <input
                  type="number"
                  placeholder="Price"
                  className="w-full border rounded-lg p-2"
                />
                <input
                  type="number"
                  placeholder="Discount Price"
                  className="w-full border rounded-lg p-2"
                />
                <input
                  type="text"
                  placeholder="Image URL"
                  className="w-full border rounded-lg p-2"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => setOpenModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600">
                  Add Item
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer/>
    </>
  )
}

export default AddedDishes