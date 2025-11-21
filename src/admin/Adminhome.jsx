import React from 'react'

function Adminhome() {
  return (
    <>
   <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-orange-600 to-amber-700 text-white p-6 shadow-xl hidden md:block">
        <h2 className="text-3xl font-extrabold mb-10">Admin Panel</h2>

        <ul className="space-y-6 text-lg">
          <li className="hover:text-gray-200 cursor-pointer">Dashboard</li>
          <li className="hover:text-gray-200 cursor-pointer">Hotels</li>
          <li className="hover:text-gray-200 cursor-pointer">Users</li>
          <li className="hover:text-gray-200 cursor-pointer">Approvals</li>
          <li className="hover:text-gray-200 cursor-pointer">Settings</li>
        </ul>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8">

        {/* Top Bar */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

          <div className="flex items-center gap-5">
            <span className="text-gray-700 font-semibold">Welcome, Admin</span>
            <img
              src=""
              alt="profile"
              className="w-10 h-10 rounded-full border-2 border-orange-500"
            />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-gray-400">Total Hotels Registered</h3>
            <p className="text-4xl font-extrabold mt-2 text-orange-600">48</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-gray-400">Total Users Registered</h3>
            <p className="text-4xl font-extrabold mt-2 text-green-600">12,340</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-gray-400">Pending Approvals</h3>
            <p className="text-4xl font-extrabold mt-2 text-amber-600">7</p>
          </div>

        </div>

        {/* Recent Registrations */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h2 className="text-2xl font-bold mb-5">Recent Registrations</h2>

          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="py-3">Name</th>
                <th className="py-3">Type</th>
                <th className="py-3">Date</th>
                <th className="py-3">Status</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3">hotel one</td>
                <td className="py-3 text-orange-600 font-semibold">Hotel</td>
                <td className="py-3">10 Nov 2025</td>
                <td className="py-3 text-green-600 font-semibold">Approved</td>
              </tr>

              <tr className="border-b hover:bg-gray-50">
                <td className="py-3">user 1</td>
                <td className="py-3 text-blue-600 font-semibold">User</td>
                <td className="py-3">9 Nov 2025</td>
                <td className="py-3 text-green-600 font-semibold">Approved</td>
              </tr>

              <tr className="hover:bg-gray-50">
                <td className="py-3">hotel 2</td>
                <td className="py-3 text-orange-600 font-semibold">Hotel</td>
                <td className="py-3">8 Nov 2025</td>
                <td className="py-3 text-amber-600 font-semibold">Pending</td>
              </tr>
            </tbody>
          </table>
        </div>

      </main>
    </div>
    
    </>
  )
}

export default Adminhome