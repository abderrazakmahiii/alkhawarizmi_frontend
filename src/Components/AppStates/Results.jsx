import React, { useState, useEffect } from 'react';
import { GrDownload } from "react-icons/gr";
import { FiRefreshCw } from "react-icons/fi";
import LoadingSkeleton from './LoadingSkeleton';

const Results = ({ originalImageUrl, colorizedImageUrl, onTryAgain }) => {
  const [showOriginal, setShowOriginal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading completion after 2 seconds
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const switchImage = (isOriginal) => {
    setShowOriginal(isOriginal);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = colorizedImageUrl;
    link.download = 'colorized_image.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleTryAgain = () => {
    // Reset the state and trigger the onTryAgain callback
    setShowOriginal(false);
    setLoading(true);
    if (onTryAgain) {
      onTryAgain();
    }
  };

  return (
    <div className='results'>
      <div className="top">
        <ul>
          <li onClick={() => switchImage(true)} className={showOriginal ? 'selected' : ''}>
            Original
          </li>
          <li onClick={() => switchImage(false)} className={!showOriginal ? 'selected' : ''}>
            Colorized
          </li>
        </ul>
      </div>
      <div className="bottom">
        {loading ? (
          <LoadingSkeleton />
        ) : (
          <>
            <img src={showOriginal ? originalImageUrl : colorizedImageUrl} alt={showOriginal ? 'Original' : 'Colorized'} />
            <div className="actions">
              <div className='one'>
                <button onClick={handleDownload}>
                  <GrDownload /> Download
                </button>
              </div>
              <div className='two'>
                <button onClick={handleTryAgain}>
                  <FiRefreshCw /> Try again
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Results;
