import React from 'react'

function Pnf() {
  return (
    <>
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
      <h1 className="text-8xl font-bold text-gray-700">404</h1>
      <p className="text-2xl mt-4 text-gray-600">Page Not Found</p>

      <p className="text-gray-500 mt-2 text-center">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      <a
        href="/"
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
      >
        Go to Landing Page
      </a>
    </div>
    </>
  )
}

export default Pnf