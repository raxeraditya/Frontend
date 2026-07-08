import React, { useState, useEffect } from 'react';
import Quiz from './Quiz';
import { Question, GameState } from '../types';
import { fetchQuestions } from '../api/quiz';
import ScoreScreen from './ScoreScreen';
import LoadingScreen from './LoadingScreen';
import ErrorScreen from './ErrorScreen';
import Card from './common/Card';

const QUIZ_TIME = 30; // 30 seconds
const STORAGE_KEY = 'quizGameState';

interface GameContainerProps {
  playerName: string;
  onRestart: () => void;
}

const GameContainer: React.FC<GameContainerProps> = ({ playerName, onRestart }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(() => {
    const savedState = localStorage.getItem(STORAGE_KEY);
    if (savedState) {
      const { currentQuestionIndex } = JSON.parse(savedState);
      return currentQuestionIndex || 0;
    }
    return 0;
  });
  
  const [gameState, setGameState] = useState<GameState>(() => {
    const savedState = localStorage.getItem(STORAGE_KEY);
    if (savedState) {
      const parsed = JSON.parse(savedState);
      if (parsed.playerName === playerName) {
        return parsed;
      }
    }
    return {
      playerName,
      score: 0,
      timeLeft: QUIZ_TIME,
    };
  });
  
  const [showScore, setShowScore] = useState(false);

  // Save game state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      ...gameState,
      currentQuestionIndex: currentQuestion,
    }));
  }, [gameState, currentQuestion]);

  useEffect(() => {
    if (gameState.timeLeft > 0 && !showScore) {
      const timer = setInterval(() => {
        setGameState(prev => {
          if (prev.timeLeft <= 1) {
            if (currentQuestion === questions.length - 1) {
              setShowScore(true);
            } else {
              setCurrentQuestion(curr => curr + 1);
              return { ...prev, timeLeft: QUIZ_TIME };
            }
            clearInterval(timer);
            return prev;
          }
          return { ...prev, timeLeft: prev.timeLeft - 1 };
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [gameState.timeLeft, showScore, currentQuestion, questions.length]);

  useEffect(() => {
    let mounted = true;

    const loadQuestions = async () => {
      try {
        // Check if we have cached questions
        const cachedQuestions = sessionStorage.getItem('quizQuestions');
        
        if (cachedQuestions) {
          if (mounted) {
            setQuestions(JSON.parse(cachedQuestions));
            setLoading(false);
          }
        } else {
          const fetchedQuestions = await fetchQuestions();
          if (mounted) {
            setQuestions(fetchedQuestions);
            // Cache the questions
            sessionStorage.setItem('quizQuestions', JSON.stringify(fetchedQuestions));
            setLoading(false);
          }
        }
      } catch (err) {
        if (mounted) {
          const errorMessage = err instanceof Error ? err.message : 'Failed to load questions. Please try again later.';
          setError(errorMessage);
          setLoading(false);
        }
      }
    };

    loadQuestions();

    return () => {
      mounted = false;
    };
  }, []);

  const handleAnswerClick = (isCorrect: boolean) => {
    if (isCorrect && gameState.timeLeft > 0) {
      setGameState(prev => ({ ...prev, score: prev.score + 1 }));
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setGameState(prev => ({ ...prev, timeLeft: QUIZ_TIME }));
    } else {
      setShowScore(true);
    }
  };

  const handleRestartGame = () => {
    // Clear stored state
    localStorage.removeItem(STORAGE_KEY);
    sessionStorage.removeItem('quizQuestions');
    onRestart();
  };

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <ErrorScreen error={error} onRestart={handleRestartGame} />;
  }

  if (showScore) {
    return (
      <Card>
        <ScoreScreen
          playerName={gameState.playerName}
          score={gameState.score}
          totalQuestions={questions.length}
          timeLeft={gameState.timeLeft}
          onRestart={handleRestartGame}
        />
      </Card>
    );
  }

  return (
    <Card>
      <Quiz
        question={questions[currentQuestion]}
        currentQuestion={currentQuestion}
        totalQuestions={questions.length}
        onAnswerClick={handleAnswerClick}
        timeLeft={gameState.timeLeft}
        playerName={playerName}
      />
    </Card>
  );
};
export default GameContainer;