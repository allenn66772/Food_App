import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Checkout() {
  return (
    <>
    <Header/>
     <div className="pt-24 px-6 pb-16 bg-gray-100 min-h-screen">

      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-gray-800 mb-10">
        Checkout
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* Left Section */}
        <div className="lg:col-span-2 space-y-10">

          {/* Delivery Address */}
          <div className="bg-white p-8 shadow-xl rounded-2xl">
            <h2 className="text-2xl font-bold mb-5 text-gray-800">
              Delivery Address
            </h2>

            <div className="space-y-4">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border rounded-xl focus:outline-none focus:border-orange-600"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-3 border rounded-xl focus:outline-none focus:border-orange-600"
              />

              <textarea
                placeholder="Full Address"
                rows={3}
                className="w-full p-3 border rounded-xl focus:outline-none focus:border-orange-600"
              ></textarea>

              <input
                type="text"
                placeholder="City"
                className="w-full p-3 border rounded-xl focus:outline-none focus:border-orange-600"
              />

              <input
                type="text"
                placeholder="Pincode"
                className="w-full p-3 border rounded-xl focus:outline-none focus:border-orange-600"
              />
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white p-8 shadow-xl rounded-2xl">
            <h2 className="text-2xl font-bold mb-5 text-gray-800">
              Payment Method
            </h2>

            <div className="space-y-5">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="payment" className="w-5 h-5" />
                <span className="text-lg font-semibold">Cash on Delivery</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="payment" className="w-5 h-5" />
                <span className="text-lg font-semibold">UPI</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="payment" className="w-5 h-5" />
                <span className="text-lg font-semibold">Credit / Debit Card</span>
              </label>
            </div>
          </div>

        </div>

        {/* Right Section – Order Summary */}
        <div className="bg-white p-8 shadow-xl rounded-2xl h-fit">
          <h2 className="text-2xl font-bold mb-5 text-gray-800">
            Order Summary
          </h2>

          <div className="space-y-4 mb-6">

            <div className="flex justify-between">
              <span className="text-gray-600">Chicken Biryani x 1</span>
              <span className="font-bold">₹180</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Paneer Butter x 1</span>
              <span className="font-bold">₹150</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Masala Dosa x 2</span>
              <span className="font-bold">₹180</span>
            </div>

            <hr />

            <div className="flex justify-between font-semibold">
              <span>Subtotal</span>
              <span>₹510</span>
            </div>

            <div className="flex justify-between font-semibold">
              <span>Delivery Fee</span>
              <span>₹30</span>
            </div>

            <hr />

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span className="text-orange-600">₹540</span>
            </div>

          </div>

          {/* Pay Button */}
          <button className="w-full bg-linear-to-r from-orange-600 to-amber-600 text-white font-bold py-3 rounded-xl text-lg shadow-lg hover:opacity-90 transition">
            Place Order
          </button>
        </div>

      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Checkout