import React, { useState } from 'react';
import Upload from './AppStates/Upload';
import Results from './AppStates/Results';
import LoadingSkeleton from './AppStates/LoadingSkeleton';

const Alkhawarizmi = () => {
  const [originalImageUrl, setOriginalImageUrl] = useState(null);
  const [colorizedImageUrl, setColorizedImageUrl] = useState(null);
  const [appState, setAppState] = useState('upload');

  const colorizeImage = async (imageFile) => {
    fetch('http://localhost:5000/colorize')
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          // Process the data
        })
        .catch(error => {
          console.error('Error during fetch operation:', error.message);
          // Log more details if needed
        });
    
    setAppState('loading');

    const reader = new FileReader();
    reader.onload = (event) => setOriginalImageUrl(event.target.result);
    reader.readAsDataURL(imageFile);

    const formData = new FormData();
    formData.append('image', imageFile);
   
    try {
      const response = await fetch('http://localhost:5000/colorize', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }

      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      setColorizedImageUrl(url);

      setAppState('results');
    } catch (error) {
      console.error(error);
      setAppState('upload');
    }
  };

  const handleTryAgain = (success) => {
    setOriginalImageUrl(null);
    setColorizedImageUrl(null);
    setAppState('upload');
  };

  const renderAppState = () => {
    switch (appState) {
      case 'upload':
        return <Upload onImageUpload={colorizeImage} />;
      case 'loading':
        return (
          <Results originalImageUrl={originalImageUrl} colorizedImageUrl={colorizedImageUrl} onTryAgain={handleTryAgain}>
            <LoadingSkeleton />
          </Results>
        );
      case 'results':
        return <Results originalImageUrl={originalImageUrl} colorizedImageUrl={colorizedImageUrl} onTryAgain={handleTryAgain} />;
      default:
        return null;
    }
  };

  return <div>{renderAppState()}</div>;
};

export default Alkhawarizmi;
