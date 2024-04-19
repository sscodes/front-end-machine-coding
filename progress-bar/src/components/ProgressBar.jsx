import React, { useEffect, useState } from 'react';

const ProgressBar = ({ onComplete }) => {
  const [completionPercentage, setCompletionPercentage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (completionPercentage < 100) setCompletionPercentage((e) => e + 1);
      else {
        onComplete();
        setCompletionPercentage(100);
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [completionPercentage]);
  return (
    <div className='progress-bar'>
      <div
        className='progress'
        style={{ width: `${completionPercentage}%` }}
      ></div>
      <div
        className='progress-label'
        style={{ color: `${completionPercentage >= 50 ? 'white' : 'black'}` }}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={completionPercentage}
        role='progressbar'
      >
        {completionPercentage}%
      </div>
    </div>
  );
};

export default ProgressBar;
