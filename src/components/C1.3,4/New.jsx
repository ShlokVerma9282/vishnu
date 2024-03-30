import React, { useState } from "react";

const New = () => {
  const [activeButton, setActiveButton] = useState("button1");

  return (
    <div className="bg-gray-100 ">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-blue-700">Course Setting</h1>
          <div className="m-5 flex items-center">
            <div className="flex flex-col px-5 py-4 rounded-lg">
              <button
                className={`btn ${
                  activeButton === "button1"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-black-500 hover:bg-blue-400 hover:text-white"
                } w-60 h-10 py-2 px-4 rounded-full text-lg font-semibold mb-4`}
                onClick={() => setActiveButton("button1")}
              >
                Paid
              </button>
              <button
                className={`btn ${
                  activeButton === "button2"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-black-500 hover:bg-blue-400 hover:text-white"
                } w-60 h-10 py-2 px-4 text-lg font-semibold rounded-full`}
                onClick={() => {
                  setActiveButton("button2");
                }}
              >
                Free
              </button>
            </div>
            {activeButton === "button1" && (
              <div className="m-4">
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
            )}
            {activeButton === "button2" && (
             <div className="m-4">
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default New
