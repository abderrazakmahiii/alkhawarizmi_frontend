import React, { useRef } from 'react';
import { MdOutlineFileUpload } from 'react-icons/md';

const Upload = ({ onImageUpload }) => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onImageUpload(file);
    }
  };

  return (
    <div className="upload">
      <label htmlFor="uploadInput">
        <button onClick={handleButtonClick}>
          <MdOutlineFileUpload /> UPLOAD IMAGE
        </button>
      </label>
      <p>Or drag and drop one here!</p>
      <input
        ref={fileInputRef}
        id="uploadInput"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default Upload;
