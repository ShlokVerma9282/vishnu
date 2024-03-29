

// import React, { useState } from "react";

// export default function CoursePrice() {
//   const [activeButton, setActiveButton] = useState(null);

//   return (
//     <>
//       <h1 className="text-xl font-bold text-blue-700 m-5">Course Price</h1>
//       <div className="m-5 flex items-center">
//         <div className="flex flex-col px-5 py-4 rounded-lg">
//           <button
//             className={`btn ${
//               activeButton === "button1"
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-300 text-black-500 hover:bg-blue-400 hover:text-white"
//             } w-48 h-10 py-2 px-4 rounded-md text-lg font-semibold mb-4`}
//             onClick={() => setActiveButton("button1")}
//           >
//             Button 1
//           </button>
//           <button
//             className={`btn ${
//               activeButton === "button2"
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-300 text-black-500 hover:bg-blue-400 hover:text-white"
//             } w-48 h-10 py-2 px-4 text-lg font-semibold rounded-md`}
//             onClick={() => {
//               setActiveButton("button2");
//             }}
//           >
//             Button 2
//           </button>
//         </div>
//         {activeButton === "button1" && (
//   <div className="m-4">
//     <div className="m-4">
//       <label htmlFor="regular-price" className="block font-bold">
//         Regular Price ($)
//       </label>
//       <input
//         type="text"
//         id="regular-price"
//         className="w-3/5 border-2 border-gray-300 p-2 rounded-lg"
//         placeholder="$ Regular Price"
//       />
//       <p className="text-gray-600">© The Course Price Includes Your Author Fee.</p>
//     </div>
//     <div className="m-4">
//       <label htmlFor="discounted-price" className="block mb-2 font-bold">
//         Discounted Price ($)
//       </label>
//       <input
//         type="text"
//         id="discounted-price"
//         className="w-3/5 border-2 border-gray-300 p-2 rounded-lg"
//         placeholder="$ Discounted Price"
//       />
//       <p className="text-gray-600">© The Course Price Includes Your Author Fee.</p>
//     </div>
//     <div className="w-3/5 px-4">
//       <label htmlFor="difficulty-level" className="block mb-2 font-bold">
//         Difficulty Level
//       </label>
//       <select
//         className="w-full h-10 text-gray-400 border-2 border-gray-600 p-2 rounded-lg leading-tight"
//         id="difficulty-level"
//       >
//         <option value="all-levels">All Levels</option>
//         <option value="beginner">Beginner</option>
//         <option value="intermediate">Intermediate</option>
//         <option value="advanced">Advanced</option>
//       </select>
//     </div>
//   </div>
// )}

//         {activeButton === "button2" && <p className="text-blue-500">Hi</p>}
// </div>



//       <div>
//       <div className="m-4">
// <label htmlFor="course-title" className="block mb-2 font-bold ">Regular Price ($)</label>
// <input type="text" id="course-title" className="w-1/2 border-2 border-gray-300 p-2 rounded-lg" placeholder="$ Regular Price" />
// <p style={{color:"grey"}}>© The Course Price Includes Your Author Fee.</p>

// </div>
// <div className=" m-4">
// <label htmlFor="course-title" className="block mb-2 font-bold ">Discounted Price ($)</label>
// <input type="text" id="course-title" className="w-1/2  border-2 border-gray-300 p-2 rounded-lg" placeholder="$ Discounted Price" />
// <p style={{color:"grey"}}>© The Course Price Includes Your Author Fee..</p>

// </div>
// <div className="w-1/2 px-4">
//             <label className="block mb-2 font-bold">Difficulty Level</label>
//             <select
//               className="w-full h-10 text-gray-400 border-2 border-gray-600 p-2 rounded-lg leading-tight"
//               id="difficulty-level"
//             >
//               <option value="all-levels">All Levels</option>
//               <option value="beginner">Beginner</option>
//               <option value="intermediate">Intermediate</option>
//               <option value="advanced">Advanced</option>
//             </select>
//           </div>
//           </div>

//     </>
//   );
// }

// import React, { useState } from "react";

// export default function CoursePrice() {
//   const [activeButton, setActiveButton] = useState(null);

//   return (
//     <>
//       <h1 className="text-xl font-bold text-blue-700 m-5">Course Price</h1>
//       <div className="m-5 flex items-center">
//         <div className="flex flex-col px-5 py-4 rounded-lg">
//           <button
//             className={`btn ${
//               activeButton === "button1"
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-300 text-black-500 hover:bg-blue-400 hover:text-white"
//             } w-48 h-10 py-2 px-4 rounded-md text-lg font-semibold mb-4`}
//             onClick={() => setActiveButton("button1")}
//           >
//             Button 1
//           </button>
//           <button
//             className={`btn ${
//               activeButton === "button2"
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-300 text-black-500 hover:bg-blue-400 hover:text-white"
//             } w-48 h-10 py-2 px-4 text-lg font-semibold rounded-md`}
//             onClick={() => {
//               setActiveButton("button2");
//             }}
//           >
//             Button 2
//           </button>
//         </div>
//         {activeButton === "button1" && (
//           <div className="m-4">
//             <div className="m-4">
//               <label htmlFor="regular-price" className="block font-bold">
//                 Regular Price ($)
//               </label>
//               <input
//                 type="text"
//                 id="regular-price"
//                 className="w-full  border-2 border-gray-300 p-2 rounded-lg"
//                 placeholder="$ Regular Price"
//               />
//               <p className="text-gray-600">© The Course Price Includes Your Author Fee.</p>
//             </div>
//             <div className="m-4">
//               <label htmlFor="discounted-price" className="block mb-2 font-bold">
//                 Discounted Price ($)
//               </label>
//               <input
//                 type="text"
//                 id="discounted-price"
//                 className="w-full  border-2 border-gray-300 p-2 rounded-lg"
//                 placeholder="$ Discounted Price"
//               />
//               <p className="text-gray-600">© The Course Price Includes Your Author Fee.</p>
//             </div>
//             <div className="w-full  px-4">
//               <label htmlFor="difficulty-level" className="block mb-2 font-bold">
//                 Difficulty Level
//               </label>
//               <select
//                 className="w-full h-10 text-gray-400 border-2 border-gray-600 p-2 rounded-lg leading-tight"
//                 id="difficulty-level"
//               >
//                 <option value="all-levels">All Levels</option>
//                 <option value="beginner">Beginner</option>
//                 <option value="intermediate">Intermediate</option>
//                 <option value="advanced">Advanced</option>
//               </select>
//             </div>
//           </div>
//         )}
//         {activeButton === "button2" && <p className="text-blue-500">Hi</p>}
//       </div>
//     </>
//   );
// }


import React, { useState } from "react";

export default function CoursePrice() {
  const [activeButton, setActiveButton] = useState(null);

  return (
    <>
      <h1 className="text-xl font-bold text-blue-700 m-5">Course Price</h1>
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
        {activeButton === "button2" && <p className="text-blue-500">hlo</p>}
      </div>
    </>
  );
}

