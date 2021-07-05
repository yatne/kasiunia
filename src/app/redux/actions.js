import { UNLOCK_QUIZ } from './constants';

export const unlockQuiz = () => {
  window.localStorage.setItem('quizUnlocked', true);
  return ({
    type: UNLOCK_QUIZ,
  });
};

export const unlockQuizz = () => ({
  type: UNLOCK_QUIZ,
});
