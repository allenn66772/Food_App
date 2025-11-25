import React from 'react'
import {Link} from 'react-router-dom'
import Header from '../components/Header'
import About from './About'
import Footer from '../components/Footer'

function Landingpage() {
  return (
    <>
    <Header/>
      <div className="min-w-screen h-160 flex justify-center items-center bg-white 
                      px-2 sm:px-0">
        <div
          className="
            w-full sm:w-7xl
            h-auto sm:h-150
            transition-all duration-300 
            hover:shadow-[0_0_20px_red] 
            flex items-center justify-center sm:justify-normal
            rounded-xl
          "
          style={{
            backgroundImage: `url("https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?cs=srgb&dl=pexels-ella-olsson-572949-1640774.jpg&fm=jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="
              rounded-3xl 
              w-11/12 sm:w-120 
              h-auto sm:h-100 
              bg-gray-500 
              bg-opacity-80
              p-4 sm:p-0
              transition-all duration-300 
              hover:shadow-[0_0_20px_blue]
              mx-auto sm:ms-28
            "
          >
            <h5 className="text-xl sm:text-2xl text-white sm:ms-8 pt-4 sm:pt-10 text-center sm:text-left">
              Online food delivery
            </h5>

            <h2 className="text-3xl sm:text-5xl text-black font-extrabold 
                           sm:ms-10 pt-5 sm:pt-10 text-center sm:text-left">
              Don't Starve
            </h2>

            <h2 className="text-4xl sm:text-6xl text-red-600 font-extrabold 
                           sm:ms-10 text-center sm:text-left">
              Just Order
            </h2>

            <div className="rounded-2xl p-3 sm:p-0 sm:h-20 sm:ms-3 flex gap-3 text-sm w-full sm:w-115 mt-4 sm:mt-0">
              <div className="hidden sm:block h-16 w-3 mt-2 rounded-2xl bg-red-600"></div>

              <p className="ps-0 sm:ps-2 text-white text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quasi
                aliquam nisi unde architecto veritatis tempore sapiente exercitationem.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-center items-center w-full h-auto sm:h-20 mt-5 sm:mt-0">
             <Link to='/user-login'>
                <button className="font-semibold hover:bg-white hover:text-red-600 hover:border hover:border-red-600 bg-red-600 rounded-2xl w-40 sm:w-25 h-10 text-white">
                  Order Now
                </button>
             </Link>

             <Link to="/about">
                <button className="font-semibold hover:bg-red-600 hover:text-white bg-white border rounded-2xl border-red-600 w-40 sm:w-25 h-10 text-red-600">
                  Know More
                </button>
             </Link>
            </div>
          </div>
        </div>
      </div>
      <About/>
      <Footer/>
    </>
  )
}

export default Landingpage