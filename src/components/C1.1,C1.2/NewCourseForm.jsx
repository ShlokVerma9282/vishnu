import React from 'react';

function NewCourseForm() {
  return (
    <div className="bg-gray-100 ">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-blue-700">Course Info</h1>
       
          </div>
          <div className="mb-4">
            <label htmlFor="course-title" className="block mb-2 font-bold ">Course Title</label>
            <input type="text" id="course-title" className="w-full border-2 border-gray-300 p-2 rounded-lg" placeholder="Enter course title" />
            <p style={{color:"grey"}}>© Title should be 30 character</p>
           
          </div>
          <div className="mb-4">
            <label htmlFor="course-slug" className="block mb-2 font-bold">Course Slug</label>
            <input type="text" id="course-slug" className="w-full border-2 border-gray-300 p-2 rounded-lg" placeholder="Enter course slug" />
            <p style={{color:"grey"}}>©Permalink:https://yourdomain.com/new-course
            </p>
          </div>
          <div className="mb-4">
            <label htmlFor="course-permalink" className="block mb-2 font-bold">About Course</label>
            <input type="text" id="course-permalink" className="w-full h-32  border-2 border-gray-300 p-2 rounded-lg"  />
            <p style={{color:"grey"}}>© HTML or plain text allowed, no emoji This field is used for search, so please be descriptive!</p>
          </div>
          <button className="bg-blue-500 text-white px-5 py-2 rounded-lg">Create Course</button>
        </div>
      
      </div>
    </div>
  );
}

export default NewCourseForm;


