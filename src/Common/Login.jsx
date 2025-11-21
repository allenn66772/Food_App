import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../user/Footer';
import Commonheader from './Commonheader';

function Login() {

  const images = [
    "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg",
    "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg",
  
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  return (
    <>
    <Commonheader/>
   <div className='w-full h-screen'>
          {/* CENTER WRAPPER */}
          <div  className="flex justify-center items-center gap-10  pt-20">
    
            {/* CAROUSEL */}
            <div className="w-120 h-140 rounded-2xl overflow-hidden relative bg-black">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="carousel"
                  className={`
                    absolute inset-0 w-full h-full object-cover rounded-2xl
                    transition-opacity duration-1500 ease-in-out
                    ${index === currentIndex ? "opacity-100" : "opacity-0"}
                  `}
                />
              ))}
    
              {/* Dots */}
              <div className="absolute bottom-3 w-full flex justify-center gap-2">
                {images.map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full ${
                      currentIndex === i ? "bg-white" : "bg-gray-600"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
    
            {/* SECOND DIV */}
            <div className="bg-red-600 w-4 h-140 rounded-2xl"></div>
    
            {/* THIRD DIV */}
       <div className="w-96 bg-amber-400 rounded-2xl p-8 flex flex-col items-center shadow-xl">

  {/* Title */}
  <h1 className="text-4xl text-white font-bold mb-8">Login</h1>

  {/* Options */}
 

  {/* Options */}
  <div className="space-y-6 w-full">

    <div className="flex justify-between items-center bg-white/25 px-5 py-4 rounded-2xl shadow-md backdrop-blur-sm hover:bg-white/40 transition-all duration-300 cursor-pointer">
      <span className="text-white text-lg font-semibold">Login as Admin</span>
      <Link to="/admin-login" className="text-white font-bold underline underline-offset-4 hover:text-gray-200">
        Login
      </Link>
    </div>

    <div className="flex justify-between items-center bg-white/25 px-5 py-4 rounded-2xl shadow-md backdrop-blur-sm hover:bg-white/40 transition-all duration-300 cursor-pointer">
      <span className="text-white text-lg font-semibold">Login as Hotel</span>
      <Link to="/hotel-login" className="text-white font-bold underline underline-offset-4 hover:text-gray-200">
        Login
      </Link>
    </div>

  </div>

</div>

          </div>
   </div>
   <Footer/>
    </>
  );
}

export default Login;
