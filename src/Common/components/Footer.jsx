import React from 'react'

function Footer() {
  return (
    <>
     <footer className="w-full bg-linear-to-br from-orange-600 to-amber-700 text-white py-10 mt-16 rounded-t-3xl shadow-2xl">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-extrabold drop-shadow">FoodHub</h2>
          <p className="mt-3 text-white/80 leading-relaxed">
            Delicious food delivered fresh and fast.  
            Your hunger, our priority.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-white/85">
            <li className="hover:text-white transition">Home</li>
            <li className="hover:text-white transition">Menu</li>
            <li className="hover:text-white transition">Offers</li>
            <li className="hover:text-white transition">Contact</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-white/90">
            <span className="cursor-pointer hover:text-white transition">Facebook</span>
            <span className="cursor-pointer hover:text-white transition">Instagram</span>
            <span className="cursor-pointer hover:text-white transition">Twitter</span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-white/20 pt-5 text-center text-white/70 text-sm">
        © {new Date().getFullYear()} FoodHub. All rights reserved.
      </div>
    </footer>
    </>
  )
}

export default Footer