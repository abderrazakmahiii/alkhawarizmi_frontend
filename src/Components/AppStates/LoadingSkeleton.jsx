import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div className="loading-skeleton">
      <div className="image">
      <div className="skeleton-line"></div>
      </div>
      <div className="actions-sk">
      <div className="skeleton-line"></div>
      <div className="skeleton-line"></div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
