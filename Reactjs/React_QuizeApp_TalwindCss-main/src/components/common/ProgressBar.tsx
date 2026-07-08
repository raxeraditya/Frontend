import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total, className = '' }) => {
  const progress = ((current + 1) / total) * 100;
  
  return (
    <div className={`w-64 h-2 bg-gray-200 rounded-full ${className}`}>
      <div
        className="h-full bg-blue-500 rounded-full transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;