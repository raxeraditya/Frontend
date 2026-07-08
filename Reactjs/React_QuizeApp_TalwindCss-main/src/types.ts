export interface Question {
  questionText: string;
  options: string[];
  correctAnswer: string;
}

export interface ApiQuestion {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface GameState {
  playerName: string;
  score: number;
  timeLeft: number;
}