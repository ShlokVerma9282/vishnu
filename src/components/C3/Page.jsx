import React from 'react'

const Page = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-blue-700">Course Builder</h1>
          </div>
          <div className="mb-4">
          <button className="mt-5  bg-gradient-to-tr from-blue-500 to bg-purple-500 text-white px-5 py-2 rounded-lg">Add New Topic +</button> 
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default Page
