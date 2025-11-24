import React from 'react'

function Orders() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        {/* Page Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Customer Orders
        </h1>

        {/* Orders Table */}
        <div className="bg-white shadow rounded-xl overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-amber-500 text-white">
              <tr>
                <th className="p-3">Order ID</th>
                <th className="p-3">Customer</th>
                <th className="p-3">Items</th>
                <th className="p-3">Total Amount</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {/* Order Row */}
              <tr className="border-b hover:bg-gray-50">
                <td className="p-3 font-medium">#ORD1023</td>
                <td className="p-3">Allen Thomas</td>
                <td className="p-3">Paneer Butter Masala, Naan</td>
                <td className="p-3 font-semibold text-green-600">₹549</td>

                <td className="p-3">
                  <span className="bg-blue-500 text-white px-3 py-1 text-sm rounded-lg">
                    Pending
                  </span>
                </td>

                <td className="p-3 text-center space-x-2">
                  <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                    Accept
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                    Reject
                  </button>
                </td>
              </tr>

              {/* Another Sample Row */}
              <tr className="border-b hover:bg-gray-50">
                <td className="p-3 font-medium">#ORD1041</td>
                <td className="p-3">Neha Kapoor</td>
                <td className="p-3">Veg Biryani, Raita</td>
                <td className="p-3 font-semibold text-green-600">₹320</td>

                <td className="p-3">
                  <span className="bg-green-500 text-white px-3 py-1 text-sm rounded-lg">
                    Completed
                  </span>
                </td>

                <td className="p-3 text-center space-x-2">
                  <button className="bg-gray-400 text-white px-3 py-1 rounded cursor-not-allowed">
                    –
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

export default Orders