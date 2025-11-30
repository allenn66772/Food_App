import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { FaArrowRight } from 'react-icons/fa'
import { GetFoodAPI } from '../../Service/allAPI'

function Homefood() {
  const [token, settoken] = useState("")
  const [SearchKey, setsearchKey] = useState("")
  const [allFoods, setallFoods] = useState([])

  const getAllFood = async (usertoken) => {
    const reqHeader = {
      Authorization: `Bearer ${usertoken}`,
    }

    try {
      const result = await GetFoodAPI(SearchKey, reqHeader)
      console.log(result)

      if (result.status === 200) {
        setallFoods(result.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  // Load token once
  useEffect(() => {
    const usertoken = sessionStorage.getItem("token")
    if (usertoken) {
      settoken(usertoken)
    }
  }, [])

  // Fetch foods when token or search text changes
  useEffect(() => {
    if (token) {
      getAllFood(token)
    }
  }, [token, SearchKey])

  return (
    <>
      <Header />

      <div className="bg-gray-100 h-30 items-center">
        <h1 className="text-center pt-9 text-4xl font-bold">Search foods</h1>

        <div className="flex items-center justify-center">
          <input
            type="text"
            placeholder="Search your food"
            value={SearchKey}
            onChange={(e) => setsearchKey(e.target.value)}
            className="w-80 h-12 px-4 border border-gray-300 rounded-l-2xl 
                 focus:outline-none
                 hover:shadow-md hover:shadow-red-400 transition"
          />

          <button
            onClick={() => getAllFood(token)}
            className="bg-red-600 h-12 w-12 flex justify-center items-center rounded-br-2xl rounded-tr-2xl text-gray-600 hover:text-red-600 hover:bg-gray-600"
          >
            <FaArrowRight className="text-xl" />
          </button>
        </div>
      </div>

      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Available Foods
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allFoods.length > 0 ? (
            allFoods.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition"
              >
                <div className="relative">
                  <img
                    src={item.uploadImages?.[0] || "https://via.placeholder.com/300"}
                    className="h-48 w-full object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 text-sm rounded-lg">
                    {item.discount || 0}% OFF
                  </span>
                </div>

                <div className="p-4">
                  <h2 className="font-semibold text-xl">{item.name}</h2>
                  <p className="text-gray-600 mt-1">₹{item.price}</p>
                  <button className="w-full mt-3 bg-green-600 text-white py-2 rounded-lg">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-4 text-gray-600">No Food Added</p>
          )}
        </div>
      </div>
    </>
  )
}

export default Homefood
