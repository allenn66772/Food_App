import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";

import { MdFeedback, MdOutlinePayment, MdOutlineSecurity } from "react-icons/md";
function Profile() {
  return (
    <>
      <div className="justify-center items-center">
        <h2 className="text-4xl font-extrabold px-20 mt-10 text-orange-400">Your Account</h2>
        <div className="ms-65 mt-20">
          <div className="flex gap-5">
            <div className="w-80 bg-white shadow-md rounded-xl p-5 flex items-start gap-4 cursor-pointer hover:shadow-lg transition">
              <div className="text-red-700 text-4xl">
                <CiDeliveryTruck />
              </div>
  
              <div>
                <h1 className="text-3xl font-semibold">Your Orders</h1>
                <p className="text-gray-600 text-xl">Track, buy things again</p>
              </div>
            </div>
             <div className="w-80 bg-white shadow-md rounded-xl p-5 flex items-start gap-4 cursor-pointer hover:shadow-lg transition">
              <div className="text-red-700 text-4xl">
                <MdOutlineSecurity />
              </div>
  
              <div>
                <h1 className="text-2xl font-semibold">Login and Security</h1>
                <p className="text-gray-600 text-lg">Edit login name and mobile number</p>
              </div>
            </div>
             <div className="w-80 bg-white shadow-md rounded-xl p-5 flex items-start gap-4 cursor-pointer hover:shadow-lg transition">
              <div className="text-red-700 text-4xl">
               <FaLocationDot />
              </div>
  
              <div>
                <h1 className="text-2xl font-semibold">Your Address</h1>
                <p className="text-gray-600 text-lg">Edit Your Addresses for orders</p>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex gap-5 mt-9">
              <div className="w-80 bg-white shadow-md rounded-xl p-5 flex items-start gap-4 cursor-pointer hover:shadow-lg transition">
              <div className="text-red-700 text-4xl">
              <MdFeedback />
              </div>
  
              <div>
                <h1 className="text-2xl font-semibold">Contact us</h1>
                <p className="text-gray-600 text-lg">Contact our customer service via phone or chat</p>
              </div>
            </div>
             <div className="w-80 bg-white shadow-md rounded-xl p-5 flex items-start gap-4 cursor-pointer hover:shadow-lg transition">
              <div className="text-red-700 text-4xl">
           <MdOutlinePayment />
              </div>
  
              <div>
                <h1 className="text-2xl font-semibold">Payment Options</h1>
                <p className="text-gray-600 text-lg">Edit or Add Payment Methods</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Profile