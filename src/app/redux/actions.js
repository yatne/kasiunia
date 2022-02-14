import {
  UNLOCK_GAME, SET_SELECTED_TAB, SET_ANSWER, SET_QUIZ_STAGE, SET_ISBN_PART,
} from './constants';

export const unlockGame = () => {
  window.localStorage.setItem('gameUnlocked', true);
  return ({
    type: UNLOCK_GAME,
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

export const setIsbnPart = (tab, part) => {
  window.localStorage.setItem(`isbn-${tab}`, part);
  return {
    type: SET_ISBN_PART,
    payload: {
      tab,
      part,
    },
  };
};
