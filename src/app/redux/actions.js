import {
  UNLOCK_QUIZ, SET_SELECTED_TAB, SET_ANSWER, SET_QUIZ_STAGE, UNLOCK_SECOND_PART, SET_ISBN_PART,
} from './constants';

export const unlockQuiz = () => {
  window.localStorage.setItem('quizUnlocked', true);
  return ({
    type: UNLOCK_QUIZ,
  });
};

export const unlockSecondPart = () => {
  window.localStorage.setItem('secondPartUnlocked', true);
  return ({
    type: UNLOCK_SECOND_PART,
  });
};

export const setOpenedTab = (tab) => ({
  type: SET_SELECTED_TAB,
  payload: {
    tab,
  },
});

export const setAnswer = (questionId, answer) => ({
  type: SET_ANSWER,
  payload: {
    questionId,
    answer,
  },
});

export const setQuizStage = (tab, stage) => ({
  type: SET_QUIZ_STAGE,
  payload: {
    tab,
    stage,
  },
});

export const setIsbnPart = (tab, part) => ({
  type: SET_ISBN_PART,
  payload: {
    tab,
    part,
  },
});
