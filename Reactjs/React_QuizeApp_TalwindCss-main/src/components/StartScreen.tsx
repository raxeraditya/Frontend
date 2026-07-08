import React, { useState, useEffect } from 'react';
import Button from './common/Button';

interface StartScreenProps {
  onStart: (name: string) => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    // Clear any existing game state when showing start screen
    localStorage.removeItem('quizGameState');
    sessionStorage.removeItem('quizQuestions');
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onStart(name.trim());
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-6">Welcome to the Quiz!</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <Button type="submit">
          Start Quiz
        </Button>
      </form>
    </div>
  );
};

export default StartScreen;