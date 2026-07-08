import React from 'react';
import { Question } from '../types';
import Timer from './Timer';
import Button from './common/Button';
import ProgressBar from './common/ProgressBar';

interface QuizProps {
  question: Question;
  currentQuestion: number;
  totalQuestions: number;
  onAnswerClick: (isCorrect: boolean) => void;
  timeLeft: number;
  playerName: string;
}

const Quiz: React.FC<QuizProps> = ({
  question,
  currentQuestion,
  totalQuestions,
  onAnswerClick,
  timeLeft,
  playerName,
}) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-gray-500">
          Player: {playerName}
        </span>
        <Timer timeLeft={timeLeft} />
      </div>
      
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-gray-500">
          Question {currentQuestion + 1} of {totalQuestions}
        </span>
        <ProgressBar current={currentQuestion} total={totalQuestions} />
      </div>
      
      <h2 className="text-xl font-semibold mb-6" 
          dangerouslySetInnerHTML={{ __html: question.questionText }} />
      
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <Button
            key={index}
            onClick={() => onAnswerClick(option === question.correctAnswer)}
            className="w-full text-left bg-white border border-gray-200 hover:border-blue-500 hover:bg-blue-50"
          >
            <span dangerouslySetInnerHTML={{ __html: option }} />
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;