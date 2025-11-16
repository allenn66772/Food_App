import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Login() {

  const images = [
    "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg",
    "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg",
    "https://images.pexels.com/photos/70498/pexels-photo-70498.jpeg",
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
   <div style={{backgroundImage:`url("https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1155&h=1528")`, backgroundSize: "cover",
            backgroundPosition: "center",}} className='w-full h-screen'>
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
                    transition-opacity duration-[1500ms] ease-in-out
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
            <div className="w-120 h-140 bg-amber-400 rounded-2xl p-8 flex flex-col items-center">

  {/* Title */}
  <h1 className="text-4xl text-white font-bold mb-6">Login</h1>

  {/* Options */}
  <div className="space-y-4 w-full text-center">
    <label className=" items-center text-white text-lg font-medium">
      Login as Admin
      <Link className="text-black font-bold underline">Login</Link>
    </label>

    <label className="flex justify-between items-center text-white text-lg font-medium">
      Login as User
      <Link className="text-black font-bold underline">Login</Link>
    </label>

    <label className="flex justify-between items-center text-white text-lg font-medium">
      Login as Hotel
      <Link className="text-black font-bold underline">Login</Link>
    </label>
  </div>

</div>

          </div>
   </div>
    </>
  );
}

export default Login;
