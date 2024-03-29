import React from 'react'

const Add = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-black">Add Topic</h1>
       
          </div>
          <div className="mb-4">
            <label htmlFor="course-title" className="block mb-2 font-bold ">Topic Name</label>
            <input type="text" id="course-title" className="w-full border-2 border-gray-300 p-2 rounded-lg" />
            <p style={{color:"grey"}}>© Topic titles are displayed publicly wherever required. Each topic may contain one or more lessons, quiz and assignments.</p>
           
          </div>
          <div className="mb-4">
            <label htmlFor="course-permalink" className="block mb-2 font-bold">Topic Summary</label>
            <input type="text" id="course-permalink" className="w-full h-24  border-2 border-gray-300 p-2 rounded-lg"  />
            <p style={{color:"grey"}}>© Add a summary of short text to prepare students for the activities for the topic. The text is shown on the course page beside the tooltip beside the topic name.</p>
          </div>
          <button className="bg-blue-500 text-white px-5 py-2 rounded-lg">Create Course</button>
        </div>
      
      </div>
    </div>
  )
}

export default Add
