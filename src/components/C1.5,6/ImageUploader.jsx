// import React, { useState } from 'react';

// const ImageUploader = () => {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileInputChange = (event) => {
//     const file = event.target.files[0];
//     if (file.size <= 700 * 430 * 3 && (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif' || file.type === 'image/webp')) {
//       setSelectedFile(file);
//     } else {
//       alert('Please select a file that is 700x430 pixels or smaller and is a JPG, JPEG, PNG, GIF, or WEBP file.');
//     }
//   };

//   return (
// <>
//     <h1 className='font-semibold'>Course Thumbnail</h1>
//     <div>
//       <input type="file" accept=".jpg,.jpeg,.png,.gif,.webp" onChange={handleFileInputChange} />
//       {selectedFile && (
//         <div style={{ width: '700px', height: '430px', border: '1px solid #ccc', position: 'relative' }}>
//           <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '24px', fontWeight: 'bold' }}>
//             Your Image
//           </div>
//           <img src={URL.createObjectURL(selectedFile)} alt="preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
//         </div>
//       )}
//     </div>
//    <p style={{color:"grey"}}> Size: 700×430 pixels, File Support: JPG, JPEG, PNG, GIF, WEBP</p>
//     </>
//   );
// };

// export default ImageUploader;

import React, { useState } from 'react';

const ImageUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file.size <= 700 * 430 * 3 && (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif' || file.type === 'image/webp')) {
      setSelectedFile(file);
    } else {
      alert('Please select a file that is 700x430 pixels or smaller and is a JPG, JPEG, PNG, GIF, or WEBP file.');
    }
  };

  return (
    <>
  
    <div className="m-10">
      
      
      <div>
        <input type="file" accept=".jpg,.jpeg,.png,.gif,.webp" onChange={handleFileInputChange} />
        {selectedFile && (
          <div style={{ width: '700px', height: '430px', border: '1px solid #ccc', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '24px', fontWeight: 'bold' }}>
              Your Image
            </div>
            <img src={URL.createObjectURL(selectedFile)} alt="preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        )}
      </div>
      <p style={{color:"grey"}}> Size: 700×430 pixels, File Support: JPG, JPEG, PNG, GIF, WEBP</p>
    </div>
    </>
  );
};

export default ImageUploader;
