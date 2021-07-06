import { UNLOCK_QUIZ, SET_SELECTED_TAB } from './constants';

export const unlockQuiz = () => {
  window.localStorage.setItem('quizUnlocked', true);
  return ({
    type: UNLOCK_QUIZ,
  });
};

export const setOpenedTab = (page, tab) => ({
  type: SET_SELECTED_TAB,
  payload: {
    page,
    tab,
  },
});

export const unlockQuizz = () => ({
  type: UNLOCK_QUIZ,
});
