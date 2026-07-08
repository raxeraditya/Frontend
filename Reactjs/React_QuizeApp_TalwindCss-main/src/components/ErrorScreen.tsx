import React from 'react';

interface ErrorScreenProps {
  error: string;
  onRestart: () => void;
}

const ErrorScreen: React.FC<ErrorScreenProps> = ({ error, onRestart }) => {
  return (
    <div className="text-center">
      <p className="text-red-500 mb-4">{error}</p>
      <button
        onClick={onRestart}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorScreen;