import React from 'react'

function Contact() {
  return (
    <>
     <div className="min-h-screen bg-gray-100 px-6 py-12 flex justify-center">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow p-8">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Contact Us
        </h1>

        <p className="text-center text-gray-600 max-w-xl mx-auto mb-10">
          Have questions or want support? Send us a message — we are here to help!
        </p>

        {/* Form */}
        <form className="space-y-6">
          
          <div>
            <label className="block text-gray-600 font-medium">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 border rounded-lg bg-gray-50 focus:bg-white focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border rounded-lg bg-gray-50 focus:bg-white focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium">Message</label>
            <textarea
              placeholder="Write your message..."
              rows={4}
              className="w-full p-3 border rounded-lg bg-gray-50 focus:bg-white focus:outline-none"
            ></textarea>
          </div>

          <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>

        {/* Contact Details Section */}
        <div className="mt-10 text-center space-y-3 text-gray-700">
          <p><strong>Email:</strong> support@example.com</p>
          <p><strong>Phone:</strong> +91 9876543210</p>
          <p><strong>Address:</strong> Kochi, Kerala, India</p>
        </div>

      </div>
    </div>
    </>
  )
}

export default Contact