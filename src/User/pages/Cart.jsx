import React from 'react'
import { Link } from 'react-router-dom';

function Cart() {
  return (
    <>
    <div className="min-h-screen bg-gray-100 p-26">
        {/* Page Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {/* Cart Item */}
            <div className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
              {/* Image */}
              <img
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
                className="w-28 h-28 rounded-lg object-cover"
                alt="Food"
              />

              {/* Details */}
              <div className="flex-1">
                <h2 className="text-lg font-semibold">Veg Biryani</h2>
                <p className="text-sm text-gray-500 mt-1">
                  Spicy biryani with raita
                </p>

                {/* Price */}
                <div className="mt-2 font-semibold text-amber-600">₹199</div>

                {/* Quantity */}
                <div className="mt-3 flex items-center gap-2">
                  <button className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300">
                    -
                  </button>
                  <span className="px-3">1</span>
                  <button className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300">
                    +
                  </button>
                </div>
              </div>

              {/* Remove */}
              <button className="text-red-500 font-semibold hover:text-red-700">
                Remove
              </button>
            </div>

            {/* Duplicate sample item */}
            <div className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
                className="w-28 h-28 rounded-lg object-cover"
                alt="Food"
              />

              <div className="flex-1">
                <h2 className="text-lg font-semibold">Chicken Shawarma</h2>
                <p className="text-sm text-gray-500 mt-1">Garlic mayo wrap</p>

                <div className="mt-2 font-semibold text-amber-600">₹149</div>

                <div className="mt-3 flex items-center gap-2">
                  <button className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300">
                    -
                  </button>
                  <span className="px-3">2</span>
                  <button className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300">
                    +
                  </button>
                </div>
              </div>

              <button className="text-red-500 font-semibold hover:text-red-700">
                Remove
              </button>
            </div>
          </div>

          {/* Summary Section */}
          <div className="bg-white p-6 rounded-xl shadow h-fit">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Order Summary
            </h2>

            <div className="space-y-2 text-gray-700">
              <div className="flex justify-between">
                <span>Items Total</span>
                <span>₹497</span>
              </div>

              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>₹20</span>
              </div>

              <div className="flex justify-between font-semibold text-lg border-t pt-3 mt-3">
                <span>Total Amount</span>
                <span className="text-amber-600">₹517</span>
              </div>
            </div>

            <Link to="/checkout" className="mt-6 w-full bg-amber-500 text-white py-3 rounded-xl shadow hover:bg-amber-600">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart