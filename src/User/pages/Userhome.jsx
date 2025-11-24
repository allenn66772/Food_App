import React from 'react'

function Userhome() {
  return (
    <>
     <div className="min-h-screen bg-gray-100 p-26">

      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Welcome, User 👋
      </h1>

      {/* Search Bar */}
      <div className="mb-6 flex">
        <input
          type="text"
          placeholder= "Enter Your >location"
          className="w-45 p-3 rounded-tl-2xl rounded-bl-2xl border-orange-400 shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
        <input
          type="text"
          placeholder="Search for food, restaurants..."
          className="w-full p-3 rounded-tr-2xl rounded-br-2xl  border-orange-400 shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
      </div>

      {/* Category Buttons */}
      <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
        {["All", "Indian", "Chinese", "Snacks", "Drinks", "Desserts"].map(
          (cat) => (
            <button
              key={cat}
              className="px-4 py-2 bg-white shadow rounded-full hover:bg-amber-500 hover:text-white transition"
            >
              {cat}
            </button>
          )
        )}
      </div>

      {/* Food Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Food Card */}
        <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1604909052688-c3a3b9f73a7d"
            className="w-full h-40 object-cover"
            alt="Food"
          />

          <div className="p-4">
            <h2 className="text-lg font-semibold">Paneer Butter Masala</h2>
            <p className="text-gray-600 text-sm mt-1">Creamy cottage cheese curry</p>

            {/* Price */}
            <div className="mt-3 flex items-center gap-2">
              <span className="text-lg font-bold text-amber-600">₹299</span>
              <span className="line-through text-gray-400 text-sm">₹350</span>
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                15% OFF
              </span>
            </div>

            {/* Add Button */}
            <button className="mt-4 w-full bg-amber-500 text-white py-2 rounded-xl hover:bg-amber-600">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Another Card */}
        <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
            className="w-full h-40 object-cover"
            alt="Food"
          />

          <div className="p-4">
            <h2 className="text-lg font-semibold">Chicken Shawarma</h2>
            <p className="text-gray-600 text-sm mt-1">Garlic mayo wrap</p>

            <div className="mt-3 flex items-center gap-2">
              <span className="text-lg font-bold text-amber-600">₹149</span>
              <span className="line-through text-gray-400 text-sm">₹170</span>
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                12% OFF
              </span>
            </div>

            <button className="mt-4 w-full bg-amber-500 text-white py-2 rounded-xl hover:bg-amber-600">
              Add to Cart
            </button>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default Userhome