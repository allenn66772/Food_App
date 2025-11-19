import React from 'react'

function Adminhome() {
  return (
    <>
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Hotel Owner Verification Requests
      </h1>

      {/* Owner Request List */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="p-3">Owner Name</th>
              <th className="p-3">Hotel Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Location</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {/* Row 1 */}
            <tr className="border-b hover:bg-gray-50">
              <td className="p-3 font-medium">Rahul Menon</td>
              <td className="p-3">Golden Spice Restaurant</td>
              <td className="p-3">rahul@example.com</td>
              <td className="p-3">Kochi, Kerala</td>

              <td className="p-3 text-center space-x-2">
                <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                  Accept
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                  Reject
                </button>
              </td>
            </tr>

            {/* Row 2 */}
            <tr className="border-b hover:bg-gray-50">
              <td className="p-3 font-medium">Ananya Prasad</td>
              <td className="p-3">Spice Villa</td>
              <td className="p-3">ananya@gmail.com</td>
              <td className="p-3">Chennai, Tamil Nadu</td>

              <td className="p-3 text-center space-x-2">
                <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                  Accept
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                  Reject
                </button>
              </td>
            </tr>

            {/* Row 3 */}
            <tr className="border-b hover:bg-gray-50">
              <td className="p-3 font-medium">Akshay Babu</td>
              <td className="p-3">Urban Tadka</td>
              <td className="p-3">akshay@tadka.com</td>
              <td className="p-3">Mumbai, Maharashtra</td>

              <td className="p-3 text-center space-x-2">
                <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                  Accept
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                  Reject
                </button>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>
    
    </>
  )
}

export default Adminhome