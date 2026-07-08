import React, { useState, useEffect } from 'react';
import StartScreen from './components/StartScreen';
import GameContainer from './components/GameContainer';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [playerName, setPlayerName] = useState('');

  // Check for existing game state on mount
  useEffect(() => {
    const storedState = localStorage.getItem('quizGameState');
    if (storedState) {
      const { playerName: savedName } = JSON.parse(storedState);
      setPlayerName(savedName);
      setGameStarted(true);
    }
  }, []);

  const handleStart = (name: string) => {
    setPlayerName(name);
    setGameStarted(true);
  };

  const handleRestart = () => {
    setGameStarted(false);
    setPlayerName('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          General Knowledge Quiz
        </h1>
        {!gameStarted ? (
          <StartScreen onStart={handleStart} />
        ) : (
          <GameContainer playerName={playerName} onRestart={handleRestart} />
        )}
      </div>
    </div>
  );
}

export default App