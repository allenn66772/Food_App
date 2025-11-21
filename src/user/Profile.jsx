import React from 'react'

function Profile() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 px-6 py-10 flex justify-center">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow p-8">

        {/* Profile Header */}
        <div className="flex flex-col items-center">
          <img
            src=""
            alt="profile"
            className="w-28 h-28 rounded-full shadow"
          />
          <h2 className="text-2xl font-bold text-gray-800 mt-4">John Doe</h2>
          <p className="text-gray-500">john.doe@example.com</p>
        </div>

        {/* Info Section */}
        <div className="mt-10 space-y-6">
          
          <div>
            <label className="text-gray-600 font-semibold">Full Name</label>
            <input
              type="text"
              defaultValue="John Doe"
              className="mt-1 w-full p-3 border rounded-lg bg-gray-50 focus:bg-white focus:outline-none"
            />
          </div>

          <div>
            <label className="text-gray-600 font-semibold">Email</label>
            <input
              type="email"
              defaultValue="john.doe@example.com"
              className="mt-1 w-full p-3 border rounded-lg bg-gray-50 focus:bg-white focus:outline-none"
            />
          </div>

          <div>
            <label className="text-gray-600 font-semibold">Phone Number</label>
            <input
              type="text"
              defaultValue="+91 9876543210"
              className="mt-1 w-full p-3 border rounded-lg bg-gray-50 focus:bg-white focus:outline-none"
            />
          </div>

          <div>
            <label className="text-gray-600 font-semibold">Address</label>
            <textarea
              defaultValue="123, Main Street, Kochi, Kerala"
              className="mt-1 w-full p-3 border rounded-lg bg-gray-50 focus:bg-white focus:outline-none"
              rows={3}
            ></textarea>
          </div>

        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-between">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Save Changes
          </button>

          <button className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
            Logout
          </button>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Profile