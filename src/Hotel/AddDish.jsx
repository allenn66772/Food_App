import React, { useEffect, useEffectEvent, useState } from 'react'
import { AddFoodAPI } from '../Service/allAPI'

function AddDish() {
    const [uploadImages,setuploadImages]=useState([])
    const [token,settoken]=useState("")
    const [preview,setpreview]=useState("")
    const [foodDetails,setfoodDetails]=useState({
        name:"",
        price:"",
        category:"",
        descryption:"",
        uploadImages:[]

    })

    const  handleAddFood =async()=>{
      const {name,price,category,descryption,uploadImages}=foodDetails
      if(!name || !price || !category || !descryption|| uploadImages.length ==0){
        alert("Fill out the fields completely")
      }else{
        //reqheader
        const reqHeader ={
        "Authorization":`Bearer ${token}`
      }
       //reqbody
       const reqbody =new FormData()
       for(let key in foodDetails){
        if (key !="uploadImages"){
          reqbody.append(key,foodDetails[key])
        }else{
          foodDetails.uploadImages.forEach(img=>{
            reqbody.append("uploadImages",img)
          })
        }
       }
        try{
          const result=await AddFoodAPI(reqbody,reqHeader)
          console.log(result);
          if (result.status ==200 ){
            alert("Food Added Successfully")
          }else if(result.status ==401 ){
            alert("Something went wrong") 
             
          }else{
            alert("erroe")
          }
          

        }catch(error){
          console.log(error);
          
        }


      }
      
    }

  const Handlefile = (e) => {
    console.log(e.target.files[0]);
    const fileArray = [...foodDetails.uploadImages];
    fileArray.push(e.target.files[0]);
    setfoodDetails({ ...foodDetails, uploadImages: fileArray });

    const url = URL.createObjectURL(e.target.files[0]);
    setpreview(url);

    let images = [...uploadImages];
    images.push(url);
    setuploadImages(images);
  };


    console.log(foodDetails);

    useEffect(()=>{
      if(sessionStorage.getItem("token")){
        settoken(sessionStorage.getItem("token"))
      }
    })
    
  return (
    <>
    <div className="min-h-screen bg-gray-50 p-8">
<div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
<header className="mb-6">
<h1 className="text-2xl font-semibold">Add New Food Item</h1>
<p className="text-sm text-gray-500">Fill in the food details and upload an appetizing image.</p>
</header>


<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/* Left: form fields */}
<div className="md:col-span-2 space-y-4">
<label className="block">
<span className="text-sm font-medium text-gray-700">Food Name</span>
<input  onChange={(e)=>setfoodDetails({...foodDetails,name:e.target.value})}
className="mt-1 block w-full border border-gray-200 rounded-lg p-3 bg-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
placeholder="e.g., Butter Chicken"
aria-label="Food name"
/>
</label>


<div className="grid grid-cols-2 gap-4">
<label className="block">
<span className="text-sm font-medium text-gray-700">Price (INR)</span>
<input onChange={(e)=>setfoodDetails({...foodDetails,price:e.target.value})}
className="mt-1 block w-full border border-gray-200 rounded-lg p-3 bg-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
placeholder="199.00"
aria-label="Price"
/>
</label>


<label className="block">
<span className="text-sm font-medium text-gray-700">Category</span>
<input onChange={(e)=>setfoodDetails({...foodDetails,category:e.target.value})}
className="mt-1 block w-full border border-gray-200 rounded-lg p-3 bg-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
placeholder="e.g., North Indian"
aria-label="Category"
/>
</label>
</div>


<label className="block">
<span className="text-sm font-medium text-gray-700">Description</span>
<textarea
rows={4} onChange={(e)=>setfoodDetails({...foodDetails,descryption:e.target.value})}
className="mt-1 block w-full border border-gray-200 rounded-lg p-3 bg-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
placeholder="Short description of the dish"
aria-label="Description"
/>
</label>


<div className="flex items-center gap-3 pt-2">
<button type='button' onClick={()=>handleAddFood()} className="px-5 py-3 bg-blue-600 text-white rounded-lg shadow hover:brightness-105 transition">
Publish Food
</button>


<button className="px-5 py-3 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 transition">
Save Draft
</button>
</div>
</div>


{/* Right: image card */}
<aside className="flex flex-col items-center justify-start gap-4 p-4 border border-gray-100 rounded-lg bg-gray-50">
<div className="w-full">
<div className="w-full">
  <label className="block">
    <div className="h-48 w-full rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 
                    flex flex-col items-center justify-center border border-dashed 
                    border-gray-300 cursor-pointer hover:bg-gray-100 transition">

      <svg xmlns="http://www.w3.org/2000/svg"
           className="mx-auto mb-2 text-gray-400"
           width="48" height="48" viewBox="0 0 24 24"
           fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4"
              strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 6l-4-4-4 4"
              strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 2v11"
              strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <span className="text-sm text-gray-600">Drag & drop image here</span>
      <span className="text-xs text-gray-400">or click to browse</span>
    </div>

    {/* Hidden input — design only */}
    <input id='uploadImages' onChange={(e)=>Handlefile(e)} type="file" className="hidden" />
  </label>
</div>



<div className="mt-3 text-xs text-gray-500">Recommended: 800×600px, JPG/PNG, max 2MB</div>
</div>


<div className="w-full">
<div className="rounded-md overflow-hidden shadow-sm">
<img
alt="Food preview"
src={preview}
className="w-full h-36 object-cover"
/>
</div>


<div className="mt-2 flex items-center justify-between">
<div className="text-sm text-gray-600">No file selected</div>
<div className="flex gap-2">
<button className="px-3 py-1 text-sm border border-gray-200 rounded bg-white">Remove</button>
<button className="px-3 py-1 text-sm border border-gray-200 rounded bg-white">Replace</button>
</div>
</div>
</div>
</aside>
</div>


<footer className="mt-6 text-xs text-gray-400">Preview shown above is static — this is a design-only layout.</footer>
</div>
</div>
    
    </>
  )
}

export default AddDish