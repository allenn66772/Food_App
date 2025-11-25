import React from 'react'

function About() {
  return (
    <>
    <div className="min-h-screen bg-gray-50 px-6 py-12 flex flex-col items-center">
      
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>

      {/* Description */}
      <p className="max-w-3xl text-center text-lg text-gray-600">
        Welcome to our Food Delivery Platform! We connect customers with their
        favorite restaurants by allowing hotel owners to list delicious meals at
        discounted prices. Our mission is to make online food ordering simple,
        fast, and affordable for everyone.
      </p>

      {/* Card Section */}
      <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-5xl w-full">
        
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
             Our Mission
          </h2>
          <p className="text-gray-600">
            To provide a smooth and budget-friendly food ordering experience by
            supporting restaurant owners and delighting customers.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
             For Restaurant Owners
          </h2>
          <p className="text-gray-600">
            Hotels can easily list their dishes, set discounts, and manage
            orders — all from a simple dashboard.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
             For Customers
          </h2>
          <p className="text-gray-600">
            Users can explore restaurants, enjoy exciting discounts, and place
            orders with just a few clicks.
          </p>
        </div>
      </div>

      {/* Footer Statement */}
      <p className="mt-12 text-gray-500 text-center max-w-2xl">
        We believe in quality, trust, and convenience. Whether you're a food
        lover or a restaurant owner, our platform is designed to make your
        experience better.
      </p>
    </div>
    
    </>
  )
}

export default About