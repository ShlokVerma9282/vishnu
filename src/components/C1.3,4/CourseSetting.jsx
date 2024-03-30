import React, { useState } from "react";

const CourseSettings = () => {
  const [selectedButton, setSelectedButton] = useState("General");

  return (
    <div className="p-6">
      <div className="space-y-4">
        <div className="flex items-center">
          <div className="w-48">
            <button
              className={`w-full py-2 px-4 border-2 border-gray-300 rounded-lg  ${
                selectedButton === "General"
                  ? "bg-blue-500 text-white font-bold"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => setSelectedButton("General")}
            >
              General
            </button>
          </div>
     
        </div>

        <div className=" -mx-4">
          <div className="w-1/2 px-4">
            <label className="block mb-2 font-bold">Maximum Students</label>
            <input
              type="number"
              className="w-full h-10 border-2 border-gray-300 p-2 rounded-lg leading-tight"
              id="max-students"
              placeholder="100"
            />
            <p> Number of students that can enrol in this course. Set 0 for no limits</p>
          </div>
          <div className="w-1/2 px-4">
            <label className="block mb-2 font-bold">Difficulty Level</label>
            <select
              className="w-full h-10 border-2 border-gray-300 p-2 rounded-lg leading-tight"
              id="difficulty-level"
            >
              <option value="all-levels">All Levels</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
        </div>

        <div className="-mx-4">
          <div className="w-1/2 px-4">
            <div className="w-full">
              <label className="block mb-2 font-bold">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600 mr-2"
                  id="public-course"
                />
                Public Course
              </label>
              <label className="text-gray-500" htmlFor="public-course">
                No enrollment required.
              </label>
            </div>
          </div>
          <div className="w-1/2 px-4">
            <div className="w-full">
              <label className="block mb-2 font-bold">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600 mr-2"
                  id="enable-q-a"
                />
                Q&A
              </label>
              <label className="text-gray-500" htmlFor="enable-q-a">
                Enable Q&A section for your course
              </label>
            </div>
          </div>
        </div>
      </div>



      <div>
      <div className="w-48 mt-5">
            <button
              className={`w-full py-2 px-4 border-2 border-gray-300 rounded-lg  ${
                selectedButton === "General"
                  ? "bg-blue-500 text-white font-bold"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => setSelectedButton("General")}
            >
              Content drip
            </button>
            </div>
            <label className="block mb-2 text-gray-500 text-lg mt-5 ">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gray-500 mr-2"
                  id="public-course"
                />
                Enable
              </label>
              <p>Enable / Disable content drip</p>
          <div  className="mt-6">
            <h1 className="text-lg">Content Drip Type</h1>
            <h3 className="text-gray-600 mt-3 text-lg">You can schedule your course content using the above content drip options.</h3>
            <div>
    
      <div>
        <input type="radio" id="option1" name="option" value="option1" />
        <label for="option1">Schedule Course Contents By Date</label>
      </div>
      <div>
        <input type="radio" id="option2" name="option" value="option2" />
        <label for="option2">Content Available After X Days From Enrollment</label>
      </div>
      <div>
        <input type="radio" id="option3" name="option" value="option3" />
        <label for="option3">Course Content Available Sequentially</label>
      </div>
      <div>
        <input type="radio" id="option4" name="option" value="option4" />
        <label for="option4">Course Content Unlocked After Finishing Prerequisites</label>
      </div>
    </div>
          </div>
      </div>
    </div>
  );
};

export default CourseSettings;




