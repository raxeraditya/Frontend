import axios from 'axios';
import { ApiQuestion, Question } from '../types';
import { questions as localQuestions } from '../data/questions';

const decodeHtml = (html: string) => {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
};

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchQuestions = async (retries = 2): Promise<Question[]> => {
  try {
    const response = await axios.get(
      'https://opentdb.com/api.php?amount=10&type=multiple'
    );

    if (response.data.response_code !== 0) {
      throw new Error('Failed to fetch questions');
    }

    return response.data.results.map((q: ApiQuestion) => {
      const options = [...q.incorrect_answers, q.correct_answer].map(decodeHtml);
      // Shuffle options
      for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
      }
      
      return {
        questionText: decodeHtml(q.question),
        options,
        correctAnswer: decodeHtml(q.correct_answer),
      };
    });
  } catch (error) {
    if (retries > 0) {
      await delay(1000); // Wait 1 second before retrying
      return fetchQuestions(retries - 1);
    }
    
    // If all retries failed or rate limited, use local questions
    return localQuestions.map(q => ({
      ...q,
      options: [...q.options].sort(() => Math.random() - 0.5) // Shuffle options
    }));
  }
}