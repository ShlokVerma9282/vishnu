import React, { useState } from "react";

function NewCourseForm() {
  const [activeButton, setActiveButton] = useState("button1");
  const [activeTab, setActiveTab] = useState("button1");
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
          <h1 className="text-lg font-bold text-black mt-6">Course Setting</h1>
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
                General
              </button>
              <button
                className={`btn ${
                  activeButton === "button2"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-black-500 hover:bg-blue-400 hover:text-white"
                } w-60 h-10 py-2 px-4 text-lg font-semibold rounded-full`}
                onClick={() => setActiveButton("button2")}
              >
                Content Drip
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
                    <p>Number of students that can enroll in this course. Set 0 for no limits</p>
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
                        <div className="flex items-center mt-3">
                          <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
                            <input
                              type="checkbox"
                              name="toggle"
                              id="public-course-toggle"
                              className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                            />
                            <label
                              htmlFor="public-course-toggle"
                              className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                            ></label>
                          </div>
                          <span className="ml-5">Public Course</span>
                        </div>
                      </label>
                      <label className="text-gray-500" htmlFor="public-course">
                        No enrollment required.
                      </label>
                    </div>
                  </div>
                  <div className="w-1/2 px-4">
                    <div className="w-full">
                      <label className="block mb-2 font-bold">
                        <div className="flex items-center mt-3">
                          <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
                              <input
                                type="checkbox"
                                name="toggle"
                                id="enable-q-a-toggle"
                                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                              />
                              <label
                                htmlFor="enable-q-a-toggle"
                                className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                              ></label>
                            </div>
                          <span className="ml-5">Q&A</span>
                        </div>
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
                <div className="mt-6">
                  <h1 className="text-lg">Content Drip Type</h1>
                  <h3 className="text-gray-600 mt-3 text-lg">
                    You can schedule your course content using the above content drip options.
                  </h3>
                  <div>
                    <div>
                      <input type="radio" id="option1" name="option" value="option1" />
                      <label htmlFor="option1">Schedule Course Contents By Date</label>
                    </div>
                    <div>
                      <input type="radio" id="option2" name="option" value="option2" />
                      <label htmlFor="option2">Content Available After X Days From Enrollment</label>
                    </div>
                    <div>
                      <input type="radio" id="option3" name="option" value="option3" />
                      <label htmlFor="option3">Course Content Available Sequentially</label>
                    </div>
                    <div>
                      <input type="radio" id="option4" name="option" value="option4" />
                      <label htmlFor="option4">Course Content Unlocked After Finishing Prerequisites</label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <h1 className="text-lg font-bold text-black">Course Price</h1>
          <div className="m-5 flex items-center">
            <div className="flex flex-col px-5 py-4 rounded-lg">
              <button
                className={`btn ${
                  activeTab === "button1"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-black-500 hover:bg-blue-400 hover:text-white"
                } w-60 h-10 py-2 px-4 rounded-full text-lg font-semibold mb-4`}
                onClick={() => setActiveTab("button1")}
              >
                Paid
              </button>
              <button
                className={`btn ${
                  activeTab === "button2"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-black-500 hover:bg-blue-400 hover:text-white"
                } w-60 h-10 py-2 px-4 text-lg font-semibold rounded-full`}
                onClick={() => {
                  setActiveTab("button2");
                }}
              >
                Free
              </button>
            </div>
            {activeTab === "button1" && (
              <div className="m-4">
                <div className="m-4">
                  <label htmlFor="regular-price" className="block font-bold">
                    Regular Price ($)
                  </label>
                  <input
                    type="text"
                    id="regular-price"
                    className="w-full border-2 border-gray-300 p-2 rounded-lg"
                    placeholder="$ Regular Price"
                  />
                  <p className="text-gray-600">© The Course Price Includes Your Author Fee.</p>
                </div>
                <div className="m-4">
                  <label htmlFor="discounted-price" className="block mb-2 font-bold">
                    Discounted Price ($)
                  </label>
                  <input
                    type="text"
                    id="discounted-price"
                    className="w-full border-2 border-gray-300 p-2 rounded-lg"
                    placeholder="$ Discounted Price"
                  />
                  <p className="text-gray-600">© The Course Price Includes Your Author Fee.</p>
                </div>
                <div className="w-full px-4">
                  <label htmlFor="difficulty-level" className="block mb-2 font-bold">
                    Difficulty Level
                  </label>
                  <select
                    className="w-1000 h-10 text-gray-400 border-2 border-gray-600 p-2 rounded-lg leading-tight"
                    id="difficulty-level"
                  >
                    <option value="all-levels">Web developer</option>
                    <option value="beginner">data science</option>
                    <option value="intermediate">Machine learning</option>
                    <option value="advanced">Devops</option>
                  </select>
                </div>
              </div>
            )}
            {activeTab === "button2" && <p></p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewCourseForm;


