import React from 'react'
import { Link } from 'react-router-dom'

function LoginAs() {
  return (
    <>
    <div className="flex h-screen">

        {/* Left Image */}
        <div className="w-1/2 h-full">
          <img
            src="https://images.immediate.co.uk/production/volatile/sites/30/2023/06/Ultraprocessed-food-58d54c3.jpg?quality=90&resize=440,400"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>

        {/* Right Side */}
        <div className="w-1/2 h-full bg-linear-to-br from-red-600 to-orange-500 flex items-center justify-center p-6">

          <div className="w-full max-w-md bg-amber-200 rounded-2xl shadow-2xl p-8 animate-fadeIn">

            <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">
              Login
            </h1>

            {/* Two Boxes – FLEX & CENTERED */}
            <div className="flex items-center justify-center gap-6">

              <Link to="/admin-login">
                <div className="w-52 h-32 bg-blue-300 rounded-xl shadow-md">
                  <p>login as  admin</p>
                </div>
              </Link>

              <Link to="/hotel-login">
                <div className="w-52 h-32 bg-blue-500 rounded-xl shadow-md"><p>login as hotel owner</p></div>
              </Link>

            </div>

          </div>
        </div>

      </div>
    
    </>
  )
}

export default LoginAs