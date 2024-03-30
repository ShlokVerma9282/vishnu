import React from 'react'

const Intro = () => {
  return (
    <div className="bg-gray-100 ">
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-blue-700">Course Intro Video</h1>
        </div>
        <div className="mb-4">
          <input type="text" id="Youtube" className="w-full border-2 border-gray-300 p-2 rounded-lg " placeholder='Youtube' />
        </div>
        <div className="mb-4">
          <label htmlFor="course-permalink" className="block mb-2 font-bold">Add Video URL</label>
          <input type="text" id="URL" className="w-full border-2 border-gray-300 p-2 rounded-lg " placeholder='Add URL Here' />
          <p style={{color:"grey"}}>Example:https://www.youtube.com/</p>
        </div>
      </div>
    
    </div>
  </div>
  )
}

export default Intro
