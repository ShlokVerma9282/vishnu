

import React, { useState } from 'react';

const ImageUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const defaultBackgroundImage = 'https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg'; // Provide a valid URL for your default image

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file.size <= 700 * 430 * 3 && (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif' || file.type === 'image/webp')) {
      setSelectedFile(file);
    } else {
      alert('Please select a file that is 700x430 pixels or smaller and is a JPG, JPEG, PNG, GIF, or WEBP file.');
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.currentTarget.classList.add('border-4', 'border-dashed', 'border-blue-500', 'hover:bg-gray-100');
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    event.currentTarget.classList.remove('border-4', 'border-dashed', 'border-blue-500', 'hover:bg-gray-100');
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.currentTarget.classList.remove('border-4', 'border-dashed', 'border-blue-500', 'hover:bg-gray-100');
    const file = event.dataTransfer.files[0];
    if (file.size <= 700 * 430 * 3 && (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif' || file.type === 'image/webp')) {
      setSelectedFile(file);
    } else {
      alert('Please select a file that is 700x430 pixels or smaller and is a JPG, JPEG, PNG, GIF, or WEBP file.');
    }
  };

  const handleImageClick = () => {
  
    console.log('Image clicked');
  };

  return (
    <>
      <div className="m-10">
        <h1 className="block mb-2 font-bold text-lg">Course Thumbnail</h1>

        <div
          onClick={handleImageClick}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className="w-900 h-400 border-4 border-dashed border-blue-500 hover:bg-gray-100 flex flex-col justify-center items-center cursor-pointer"
          style={{ height: '400px' }} // Adjust height inline
        >
          <div
            className="flex flex-col justify-center items-center"
            style={{
              backgroundImage: `url(${selectedFile ? URL.createObjectURL(selectedFile) : defaultBackgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              width: '100%',
              height: '100%'
            }}
          >
            {selectedFile ? (
              <p style={{ color: "grey" }}>Size: 700×430 pixels, File Support: JPG, JPEG, PNG, GIF, WEBP</p>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-10 h-10 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <p className="mt-1 text-sm text-gray-600">Drag & drop your file here or click to select a file</p>
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/gif,image/webp"
                  className="hidden"
                  onChange={handleFileInputChange}
                />
              </>
            )}
          </div>
        </div>
        <h1 style={{color:"grey"}}>© Size: 700×430 pixels, File Support: JPG, JPEG, PNG, GIF,</h1>
      </div>
    </>
  );
};

export default ImageUploader;
