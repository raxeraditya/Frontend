import React from 'react';

interface TimerProps {
  timeLeft: number;
}

const Timer: React.FC<TimerProps> = ({ timeLeft }) => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="text-lg font-semibold text-gray-700">
      Time Left: {minutes}:{seconds.toString().padStart(2, '0')}
    </div>
  );
};
export default Timer