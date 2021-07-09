import {
  UNLOCK_QUIZ, SET_SELECTED_TAB, SET_ANSWER, SET_QUIZ_STAGE, UNLOCK_TAB,
} from './constants';

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

export const unlockTab = (tab, unlockedTabs) => {
  window.localStorage.setItem('unlocked-tabs', JSON.stringify(unlockedTabs.concat([tab])));
  return {
    type: UNLOCK_TAB,
    payload: {
      tab,
    },
  };
};

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
