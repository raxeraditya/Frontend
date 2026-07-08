import React from 'react';
import Button from './common/Button';

interface ScoreScreenProps {
  playerName: string;
  score: number;
  totalQuestions: number;
  timeLeft: number;
  onRestart: () => void;
}

const ScoreScreen: React.FC<ScoreScreenProps> = ({
  playerName,
  score,
  totalQuestions,
  timeLeft,
  onRestart,
}) => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold mb-4">
        {playerName}, your score is {score} out of {totalQuestions}!
      </h2>
      <p className="mb-6 text-gray-600">
        Time remaining: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
      </p>
      <Button onClick={onRestart}>
        Play Again
      </Button>
    </div>
  );
};

export default ScoreScreen;